const FORM_ENDPOINT = "";
const STORAGE_KEY = "alenBelenLunchSelections";

const langMeta = {
  en: { htmlLang: "en", label: "English" },
  ja: { htmlLang: "ja", label: "日本語" },
  hi: { htmlLang: "hi", label: "हिन्दी" },
};

const copy = {
  en: {
    title: "Wedding lunch selection",
    intro: "Please choose one lunch option per guest from the confirmed menu.",
    deadline: "Deadline to be confirmed",
    onePerGuest: "One response per guest",
    photoCaption: "Family lunch preferences",
    formKicker: "Guest response",
    formTitle: "Tell us your lunch choice",
    guestInfo: "Guest name",
    guestName: "Guest name",
    mealLegend: "Lunch options",
    mealNote: "Please select the entree you would like for the wedding lunch.",
    submit: "Submit lunch choice",
    reset: "Clear form",
    summaryKicker: "Live summary",
    summaryTitle: "Current selection",
    summaryGuest: "Guest",
    summaryMeal: "Meal",
    summaryHelp: "This page can send each guest's name and meal choice to a spreadsheet.",
    missingName: "Please enter the guest name.",
    missingMeal: "Please choose one lunch option.",
    demoSaved: "Preview saved on this device. Before sharing with guests, Alen will connect this form to a spreadsheet.",
    submitted: "Thank you. Your lunch choice has been submitted.",
    submitFailed: "We could not submit the form. Please try again or contact Alen.",
    none: "None selected",
  },
  ja: {
    title: "結婚式ランチの選択",
    intro: "確定したメニューから、ゲストお一人につきランチを1つお選びください。",
    deadline: "締切は後日お知らせします",
    onePerGuest: "お一人につき1回答",
    photoCaption: "ランチの希望",
    formKicker: "ゲスト回答",
    formTitle: "ランチの希望を教えてください",
    guestInfo: "お名前",
    guestName: "お名前",
    mealLegend: "ランチの選択肢",
    mealNote: "結婚式ランチで召し上がりたいメイン料理をお選びください。",
    submit: "ランチを送信",
    reset: "フォームをクリア",
    summaryKicker: "入力内容",
    summaryTitle: "現在の選択",
    summaryGuest: "ゲスト",
    summaryMeal: "ランチ",
    summaryHelp: "このページからゲスト名とランチの希望をスプレッドシートに送れます。",
    missingName: "お名前を入力してください。",
    missingMeal: "ランチを1つ選んでください。",
    demoSaved: "プレビューとしてこの端末に保存しました。ゲストに共有する前に、Alenがスプレッドシートへ接続します。",
    submitted: "ありがとうございます。ランチの希望を送信しました。",
    submitFailed: "送信できませんでした。もう一度お試しいただくか、Alenにご連絡ください。",
    none: "未選択",
  },
  hi: {
    title: "शादी के लंच का चयन",
    intro: "कृपया तय मेन्यू में से हर मेहमान के लिए एक लंच विकल्प चुनें।",
    deadline: "अंतिम तारीख बाद में बताई जाएगी",
    onePerGuest: "हर मेहमान के लिए एक जवाब",
    photoCaption: "परिवार के लंच विकल्प",
    formKicker: "मेहमान का जवाब",
    formTitle: "अपना लंच विकल्प बताएं",
    guestInfo: "मेहमान का नाम",
    guestName: "मेहमान का नाम",
    mealLegend: "लंच विकल्प",
    mealNote: "कृपया शादी के लंच के लिए अपना पसंदीदा मुख्य व्यंजन चुनें।",
    submit: "लंच विकल्प भेजें",
    reset: "फॉर्म साफ करें",
    summaryKicker: "लाइव सारांश",
    summaryTitle: "मौजूदा चयन",
    summaryGuest: "मेहमान",
    summaryMeal: "लंच",
    summaryHelp: "यह पेज हर मेहमान का नाम और लंच विकल्प spreadsheet में भेज सकता है।",
    missingName: "कृपया मेहमान का नाम लिखें।",
    missingMeal: "कृपया एक लंच विकल्प चुनें।",
    demoSaved: "Preview इस device पर सेव हो गया। मेहमानों को भेजने से पहले Alen इसे spreadsheet से जोड़ेंगे।",
    submitted: "धन्यवाद। आपका लंच विकल्प भेज दिया गया है।",
    submitFailed: "फॉर्म भेजा नहीं जा सका। कृपया फिर कोशिश करें या Alen से संपर्क करें।",
    none: "कुछ नहीं चुना गया",
  },
};

const mealOptions = [
  {
    id: "lobster-ravioli-scallops",
    image: "./assets/meals/lobster-ravioli.jpg",
    tag: { en: "Seafood", ja: "シーフード", hi: "समुद्री भोजन" },
    title: {
      en: "Lobster ravioli with seared scallops",
      ja: "ロブスターのラビオリと帆立のソテー",
      hi: "लॉब्स्टर रैवियोली और सिकी हुई स्कैलप्स",
    },
    description: {
      en: "Ravioles de langostas y vieiras selladas.",
      ja: "Ravioles de langostas y vieiras selladas.",
      hi: "Ravioles de langostas y vieiras selladas.",
    },
  },
  {
    id: "grilled-beef-filet",
    image: "./assets/meals/grilled-beef-filet.jpg",
    tag: { en: "Beef", ja: "牛肉", hi: "बीफ" },
    title: {
      en: "Grilled beef filet",
      ja: "グリルした牛フィレ",
      hi: "ग्रिल्ड बीफ फ़िलेट",
    },
    description: {
      en: "Filete de Res a la parrilla.",
      ja: "Filete de Res a la parrilla.",
      hi: "Filete de Res a la parrilla.",
    },
  },
  {
    id: "stuffed-chicken-breast",
    image: "./assets/meals/stuffed-chicken-breast.jpg",
    tag: { en: "Chicken", ja: "鶏肉", hi: "चिकन" },
    title: {
      en: "Stuffed chicken breast",
      ja: "詰め物入り鶏胸肉",
      hi: "भरवां चिकन ब्रेस्ट",
    },
    description: {
      en: "Pechuga de pollo cerrado rellena.",
      ja: "Pechuga de pollo cerrado rellena.",
      hi: "Pechuga de pollo cerrado rellena.",
    },
  },
];

const form = document.querySelector("#mealForm");
const mealOptionsEl = document.querySelector("#mealOptions");
const formMessage = document.querySelector("#formMessage");
const resetFormButton = document.querySelector("#resetForm");
const adminPanel = document.querySelector("#adminPanel");
const adminTableBody = document.querySelector("#adminTable tbody");
const downloadCsvButton = document.querySelector("#downloadCsv");
const clearLocalButton = document.querySelector("#clearLocal");
const summaryGuest = document.querySelector("#summaryGuest");
const summaryMeal = document.querySelector("#summaryMeal");

let currentLang = localStorage.getItem("mealLanguage") || "en";
if (!copy[currentLang]) currentLang = "en";

function t(key) {
  return copy[currentLang][key] || copy.en[key] || key;
}

function localize() {
  document.documentElement.lang = langMeta[currentLang].htmlLang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (copy[currentLang][key]) node.textContent = copy[currentLang][key];
  });

  document.querySelectorAll(".language-button").forEach((button) => {
    button.setAttribute("aria-current", button.dataset.lang === currentLang ? "true" : "false");
  });

  renderMealOptions();
  updateSummary();
}

function renderMealOptions() {
  const selected = form.mealChoice?.value || "";
  mealOptionsEl.innerHTML = mealOptions.map((option) => `
    <label class="meal-option">
      <input type="radio" name="mealChoice" value="${option.id}" ${selected === option.id ? "checked" : ""} required>
      <span class="meal-option__photo">
        <img src="${option.image}" alt="" loading="lazy">
      </span>
      <span>
        <strong>${option.title[currentLang]}</strong>
        <small>${option.description[currentLang]}</small>
        <em>${option.tag[currentLang]}</em>
      </span>
    </label>
  `).join("");
}

function getSelectedMealLabel() {
  const selected = form.mealChoice?.value;
  const option = mealOptions.find((item) => item.id === selected);
  return option ? option.title[currentLang] : t("none");
}

function updateSummary() {
  const guestName = form.guestName.value.trim();
  summaryGuest.textContent = guestName || "-";
  summaryMeal.textContent = getSelectedMealLabel();
}

function getSubmissions() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveLocalSubmission(entry) {
  const submissions = getSubmissions();
  submissions.push(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function entryFromForm() {
  const formData = new FormData(form);
  const meal = mealOptions.find((option) => option.id === formData.get("mealChoice"));

  return {
    submittedAt: new Date().toISOString(),
    language: currentLang,
    guestName: formData.get("guestName").trim(),
    mealChoice: meal?.id || "",
    mealLabelEn: meal?.title.en || "",
    mealLabelCurrent: meal?.title[currentLang] || "",
    userAgent: navigator.userAgent,
  };
}

function validateForm() {
  if (!form.guestName.value.trim()) {
    form.guestName.focus();
    return t("missingName");
  }

  if (!form.mealChoice?.value) {
    mealOptionsEl.querySelector("input")?.focus();
    return t("missingMeal");
  }

  return "";
}

async function submitEntry(entry) {
  if (!FORM_ENDPOINT) {
    saveLocalSubmission(entry);
    renderAdminTable();
    return { ok: true, demo: true };
  }

  const body = new URLSearchParams();
  Object.entries(entry).forEach(([key, value]) => {
    body.append(key, value);
  });

  await fetch(FORM_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    body,
  });

  return { ok: true, demo: false };
}

function renderAdminTable() {
  if (!adminTableBody) return;
  const submissions = getSubmissions();
  adminTableBody.innerHTML = submissions.map((entry) => `
    <tr>
      <td>${escapeHtml(entry.submittedAt)}</td>
      <td>${escapeHtml(entry.guestName)}</td>
      <td>${escapeHtml(entry.mealLabelEn)}</td>
      <td>${escapeHtml(entry.language)}</td>
    </tr>
  `).join("");
}

function csvEscape(value) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

function downloadCsv() {
  const rows = getSubmissions();
  const headers = ["submittedAt", "language", "guestName", "mealChoice", "mealLabelEn", "mealLabelCurrent"];
  const csv = [
    headers.join(","),
    ...rows.map((row) => headers.map((header) => csvEscape(Array.isArray(row[header]) ? row[header].join("; ") : row[header])).join(",")),
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "alen-belen-lunch-selections.csv";
  link.click();
  URL.revokeObjectURL(url);
}

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", () => {
    currentLang = button.dataset.lang;
    localStorage.setItem("mealLanguage", currentLang);
    localize();
  });
});

form.addEventListener("input", updateSummary);
form.addEventListener("change", updateSummary);

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  formMessage.textContent = "";
  formMessage.classList.remove("success");

  const validationMessage = validateForm();
  if (validationMessage) {
    formMessage.textContent = validationMessage;
    return;
  }

  const entry = entryFromForm();

  try {
    const result = await submitEntry(entry);
    if (!result.ok) throw new Error("Submit failed");
    formMessage.textContent = result.demo ? t("demoSaved") : t("submitted");
    formMessage.classList.add("success");
  } catch {
    formMessage.textContent = t("submitFailed");
  }
});

resetFormButton.addEventListener("click", () => {
  form.reset();
  formMessage.textContent = "";
  formMessage.classList.remove("success");
  updateSummary();
});

downloadCsvButton?.addEventListener("click", downloadCsv);

clearLocalButton?.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  renderAdminTable();
});

if (new URLSearchParams(window.location.search).get("admin") === "1") {
  adminPanel.hidden = false;
  renderAdminTable();
}

localize();
