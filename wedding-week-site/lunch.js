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
    intro: "Please choose one lunch option per guest. The exact dishes will be updated soon.",
    deadline: "Deadline to be confirmed",
    onePerGuest: "One response per guest",
    photoCaption: "Family lunch preferences",
    formKicker: "Guest response",
    formTitle: "Tell us your lunch choice",
    guestInfo: "Guest information",
    guestName: "Guest name",
    partyName: "Family / party name",
    contact: "Email or phone",
    guestType: "Guest type",
    guestTypeFamily: "Family",
    guestTypeFriend: "Friend",
    guestTypeCornell: "Cornell",
    guestTypeOther: "Other",
    mealLegend: "Lunch options",
    mealNote: "These are placeholders. Alen will replace them with the real dishes.",
    dietLegend: "Dietary notes",
    dietNone: "No restrictions",
    dietVegetarian: "Vegetarian",
    dietVegan: "Vegan",
    dietGluten: "Gluten-free",
    dietNuts: "Nut allergy",
    dietOther: "Other",
    notes: "Notes for allergies or preferences",
    submit: "Submit lunch choice",
    reset: "Clear form",
    summaryKicker: "Live summary",
    summaryTitle: "Current selection",
    summaryGuest: "Guest",
    summaryMeal: "Meal",
    summaryDiet: "Dietary notes",
    summaryHelp: "Once the final dishes are confirmed, this page can send responses to a spreadsheet.",
    missingName: "Please enter the guest name.",
    missingMeal: "Please choose one lunch option.",
    demoSaved: "Preview saved on this device. Before sharing with guests, Alen will connect this form to a spreadsheet.",
    submitted: "Thank you. Your lunch choice has been submitted.",
    submitFailed: "We could not submit the form. Please try again or contact Alen.",
    none: "None selected",
  },
  ja: {
    title: "結婚式ランチの選択",
    intro: "ゲストお一人につき、ランチを1つお選びください。正式な料理名は後日更新します。",
    deadline: "締切は後日お知らせします",
    onePerGuest: "お一人につき1回答",
    photoCaption: "ランチの希望",
    formKicker: "ゲスト回答",
    formTitle: "ランチの希望を教えてください",
    guestInfo: "ゲスト情報",
    guestName: "お名前",
    partyName: "家族名 / グループ名",
    contact: "メールまたは電話番号",
    guestType: "ゲスト区分",
    guestTypeFamily: "家族",
    guestTypeFriend: "友人",
    guestTypeCornell: "Cornell",
    guestTypeOther: "その他",
    mealLegend: "ランチの選択肢",
    mealNote: "これは仮の選択肢です。Alenが正式な料理名に差し替えます。",
    dietLegend: "食事に関する注意",
    dietNone: "制限なし",
    dietVegetarian: "ベジタリアン",
    dietVegan: "ヴィーガン",
    dietGluten: "グルテンフリー",
    dietNuts: "ナッツアレルギー",
    dietOther: "その他",
    notes: "アレルギーや希望のメモ",
    submit: "ランチを送信",
    reset: "フォームをクリア",
    summaryKicker: "入力内容",
    summaryTitle: "現在の選択",
    summaryGuest: "ゲスト",
    summaryMeal: "ランチ",
    summaryDiet: "食事メモ",
    summaryHelp: "正式な料理が決まったら、このページから回答をスプレッドシートに送れます。",
    missingName: "お名前を入力してください。",
    missingMeal: "ランチを1つ選んでください。",
    demoSaved: "プレビューとしてこの端末に保存しました。ゲストに共有する前に、Alenがスプレッドシートへ接続します。",
    submitted: "ありがとうございます。ランチの希望を送信しました。",
    submitFailed: "送信できませんでした。もう一度お試しいただくか、Alenにご連絡ください。",
    none: "未選択",
  },
  hi: {
    title: "शादी के लंच का चयन",
    intro: "कृपया हर मेहमान के लिए एक लंच विकल्प चुनें। असली व्यंजनों के नाम जल्द जोड़े जाएंगे।",
    deadline: "अंतिम तारीख बाद में बताई जाएगी",
    onePerGuest: "हर मेहमान के लिए एक जवाब",
    photoCaption: "परिवार के लंच विकल्प",
    formKicker: "मेहमान का जवाब",
    formTitle: "अपना लंच विकल्प बताएं",
    guestInfo: "मेहमान की जानकारी",
    guestName: "मेहमान का नाम",
    partyName: "परिवार / समूह का नाम",
    contact: "ईमेल या फोन",
    guestType: "मेहमान का प्रकार",
    guestTypeFamily: "परिवार",
    guestTypeFriend: "दोस्त",
    guestTypeCornell: "Cornell",
    guestTypeOther: "अन्य",
    mealLegend: "लंच विकल्प",
    mealNote: "ये अभी placeholder हैं। Alen इन्हें असली व्यंजनों से बदलेंगे।",
    dietLegend: "खाने से जुड़ी जानकारी",
    dietNone: "कोई restriction नहीं",
    dietVegetarian: "शाकाहारी",
    dietVegan: "वीगन",
    dietGluten: "ग्लूटेन-फ्री",
    dietNuts: "नट एलर्जी",
    dietOther: "अन्य",
    notes: "एलर्जी या पसंद के नोट्स",
    submit: "लंच विकल्प भेजें",
    reset: "फॉर्म साफ करें",
    summaryKicker: "लाइव सारांश",
    summaryTitle: "मौजूदा चयन",
    summaryGuest: "मेहमान",
    summaryMeal: "लंच",
    summaryDiet: "खाने के नोट्स",
    summaryHelp: "असली व्यंजन तय होने के बाद यह पेज जवाबों को spreadsheet में भेज सकता है।",
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
    id: "option-a",
    tag: { en: "Placeholder", ja: "仮", hi: "Placeholder" },
    title: { en: "Lunch option A", ja: "ランチ A", hi: "लंच विकल्प A" },
    description: {
      en: "Dish name coming soon.",
      ja: "料理名は後日追加します。",
      hi: "व्यंजन का नाम बाद में जोड़ा जाएगा।",
    },
  },
  {
    id: "option-b",
    tag: { en: "Placeholder", ja: "仮", hi: "Placeholder" },
    title: { en: "Lunch option B", ja: "ランチ B", hi: "लंच विकल्प B" },
    description: {
      en: "Dish name coming soon.",
      ja: "料理名は後日追加します。",
      hi: "व्यंजन का नाम बाद में जोड़ा जाएगा।",
    },
  },
  {
    id: "option-c",
    tag: { en: "Placeholder", ja: "仮", hi: "Placeholder" },
    title: { en: "Lunch option C", ja: "ランチ C", hi: "लंच विकल्प C" },
    description: {
      en: "Dish name coming soon.",
      ja: "料理名は後日追加します。",
      hi: "व्यंजन का नाम बाद में जोड़ा जाएगा।",
    },
  },
  {
    id: "child-light",
    tag: { en: "Optional", ja: "任意", hi: "वैकल्पिक" },
    title: { en: "Kids / light meal", ja: "キッズ / 軽めの食事", hi: "बच्चों / हल्का भोजन" },
    description: {
      en: "For children or guests who prefer something lighter.",
      ja: "お子様、または軽めの食事をご希望の方へ。",
      hi: "बच्चों या हल्का भोजन चाहने वाले मेहमानों के लिए।",
    },
  },
  {
    id: "no-lunch",
    tag: { en: "Optional", ja: "任意", hi: "वैकल्पिक" },
    title: { en: "I will not need lunch", ja: "ランチは不要です", hi: "मुझे लंच नहीं चाहिए" },
    description: {
      en: "Choose this if you will not be eating lunch with the group.",
      ja: "グループのランチを召し上がらない場合はこちらを選んでください。",
      hi: "यदि आप समूह के साथ लंच नहीं करेंगे तो इसे चुनें।",
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
const summaryDiet = document.querySelector("#summaryDiet");

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

function getSelectedDietLabels() {
  return [...form.querySelectorAll("input[name='diet']:checked")]
    .map((input) => input.nextElementSibling.textContent.trim());
}

function updateSummary() {
  const guestName = form.guestName.value.trim();
  const diets = getSelectedDietLabels();
  summaryGuest.textContent = guestName || "-";
  summaryMeal.textContent = getSelectedMealLabel();
  summaryDiet.textContent = diets.length ? diets.join(", ") : t("none");
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
  const diet = [...form.querySelectorAll("input[name='diet']:checked")].map((input) => input.value);

  return {
    submittedAt: new Date().toISOString(),
    language: currentLang,
    guestName: formData.get("guestName").trim(),
    partyName: formData.get("partyName").trim(),
    contact: formData.get("contact").trim(),
    guestType: formData.get("guestType"),
    mealChoice: meal?.id || "",
    mealLabelEn: meal?.title.en || "",
    mealLabelCurrent: meal?.title[currentLang] || "",
    diet,
    notes: formData.get("notes").trim(),
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

  const response = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(entry),
  });

  return { ok: response.ok, demo: false };
}

function renderAdminTable() {
  if (!adminTableBody) return;
  const submissions = getSubmissions();
  adminTableBody.innerHTML = submissions.map((entry) => `
    <tr>
      <td>${escapeHtml(entry.submittedAt)}</td>
      <td>${escapeHtml(entry.guestName)}</td>
      <td>${escapeHtml(entry.mealLabelEn)}</td>
      <td>${escapeHtml(entry.diet.join(", "))}</td>
      <td>${escapeHtml(entry.notes)}</td>
    </tr>
  `).join("");
}

function csvEscape(value) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

function downloadCsv() {
  const rows = getSubmissions();
  const headers = ["submittedAt", "language", "guestName", "partyName", "contact", "guestType", "mealChoice", "mealLabelEn", "diet", "notes"];
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
