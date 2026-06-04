(function (window) {
  const App = window.MentoringWorkspace = window.MentoringWorkspace || {};
  const { Config, Data } = App;

  function createProvider() {
    if (hasAppsScriptRuntime() || isAppsScriptHost()) return createGoogleProvider();
    return createLocalProvider();
  }

  function createGoogleProvider() {
    return {
      mode: "google",
      loadState: () => callServer("apiGetState"),
      submitDailyLog: (log) => callServer("apiSubmitDailyLog", log),
      upsertTask: (task) => callServer("apiUpsertTask", task),
      deleteTask: (id) => callServer("apiDeleteTask", id),
      resetWorkspace: () => callServer("apiResetWorkspace"),
    };
  }

  function hasAppsScriptRuntime() {
    return typeof google !== "undefined" && google.script && google.script.run;
  }

  function isAppsScriptHost() {
    const host = window.location.hostname;
    return host.endsWith("script.googleusercontent.com")
      || host === "script.google.com"
      || document.referrer.includes("script.google.com");
  }

  function waitForAppsScriptRuntime(timeoutMs = 8000) {
    if (hasAppsScriptRuntime()) return Promise.resolve();
    const startedAt = Date.now();
    return new Promise((resolve, reject) => {
      const check = () => {
        if (hasAppsScriptRuntime()) {
          resolve();
          return;
        }
        if (Date.now() - startedAt >= timeoutMs) {
          reject(new Error("Google Apps Script runtime did not load. Refresh the deployed script.google.com page and try again."));
          return;
        }
        window.setTimeout(check, 50);
      };
      check();
    });
  }

  function callServer(functionName, ...args) {
    return waitForAppsScriptRuntime().then(() => new Promise((resolve, reject) => {
      google.script.run
        .withSuccessHandler(resolve)
        .withFailureHandler((error) => reject(new Error(error.message || String(error))))
        [functionName](...args);
    }));
  }

  function createLocalProvider() {
    return {
      mode: "local",
      async loadState() {
        return getLocalData();
      },
      async submitDailyLog(log) {
        const data = getLocalData();
        data.dailyLogs.push(Data.normalizeLog(log));
        stampLocalSync(data);
        saveLocalData(data);
        return data;
      },
      async upsertTask(task) {
        const data = getLocalData();
        const clean = Data.normalizeTask(task);
        const index = data.tasks.findIndex((item) => item.id === clean.id);
        if (index >= 0) data.tasks[index] = clean;
        else data.tasks.push(clean);
        data.project.people = Data.getPeople(data);
        stampLocalSync(data);
        saveLocalData(data);
        return data;
      },
      async deleteTask(id) {
        const data = getLocalData();
        data.tasks = data.tasks.filter((task) => task.id !== id);
        stampLocalSync(data);
        saveLocalData(data);
        return data;
      },
      async resetWorkspace() {
        const data = getLocalData();
        data.tasks = [];
        data.dailyLogs = [];
        data.project.people = Data.getPeople(data);
        stampLocalSync(data);
        saveLocalData(data);
        return data;
      },
    };
  }

  function getLocalData() {
    const raw = localStorage.getItem(Config.storageKey);
    if (!raw) return Data.createDefaultData();
    try {
      return Data.normalizeData(JSON.parse(raw));
    } catch {
      return Data.createDefaultData();
    }
  }

  function saveLocalData(data) {
    localStorage.setItem(Config.storageKey, JSON.stringify(Data.normalizeData(data)));
  }

  function stampLocalSync(data) {
    data.sync = {
      ...data.sync,
      mode: "local",
      lastSync: new Date().toISOString(),
    };
  }

  App.Providers = {
    createProvider,
  };
})(window);
