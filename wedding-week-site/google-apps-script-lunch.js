const SHEET_NAME = "Lunch choices";

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const sheet = getLunchSheet_();
    const data = e.parameter || {};

    sheet.appendRow([
      new Date(),
      data.guestName || "",
      data.mealChoice || "",
      data.mealLabelEn || "",
      data.mealLabelCurrent || "",
      data.language || "",
      data.userAgent || "",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function setupLunchSheet() {
  getLunchSheet_();
}

function getLunchSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Submitted at",
      "Guest name",
      "Meal choice id",
      "Meal label English",
      "Meal label selected language",
      "Language",
      "User agent",
    ]);
  }

  return sheet;
}
