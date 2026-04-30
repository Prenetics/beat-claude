/**
 * Setup script for the Beat Claude Dashboard Google Sheet.
 * Creates the "Dashboard Scores" tab with the correct headers.
 *
 * Run this function once to initialise the sheet.
 * Sheet ID: 1RfNhr6Hm2Ga5iMOO53NwadaXIFX6z3McRmUwjAV_G2Y
 */

var SHEET_ID = '1RfNhr6Hm2Ga5iMOO53NwadaXIFX6z3McRmUwjAV_G2Y';
var TAB_NAME = 'Dashboard Scores';

function setupDashboardScoresTab() {
  var ss = SpreadsheetApp.openById(SHEET_ID);

  // Check if tab already exists
  var existing = ss.getSheetByName(TAB_NAME);
  if (existing) {
    Logger.log('Tab "' + TAB_NAME + '" already exists. Skipping creation.');
    // Still set headers in case they are missing
    setHeaders(existing);
    return;
  }

  var sheet = ss.insertSheet(TAB_NAME);
  setHeaders(sheet);
  Logger.log('Created "' + TAB_NAME + '" tab with headers.');
}

function setHeaders(sheet) {
  var headers = [
    'Candidate Name',       // A
    'Email',                // B
    'LinkedIn URL',         // C
    'Role',                 // D
    'Submission Date',      // E
    'Strategic Depth (35)', // F
    'Specificity (25)',     // G
    'AI Integration (20)',  // H
    'Creativity (10)',      // I
    'Communication (10)',   // J
    'Total Score',          // K
    'Verdict',              // L
    'CV URL',               // M
    'Submission URL',       // N
    'Teamtailor URL',       // O
    'Strengths',            // P
    'Gaps',                 // Q
    'Summary'               // R
  ];

  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setValues([headers]);

  // Format header row
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#A40011');
  headerRange.setFontColor('#FFFFFF');
  headerRange.setHorizontalAlignment('center');

  // Freeze header row
  sheet.setFrozenRows(1);

  // Set reasonable column widths
  sheet.setColumnWidth(1, 180);  // Candidate Name
  sheet.setColumnWidth(2, 220);  // Email
  sheet.setColumnWidth(3, 200);  // LinkedIn URL
  sheet.setColumnWidth(4, 180);  // Role
  sheet.setColumnWidth(5, 130);  // Submission Date
  sheet.setColumnWidth(6, 140);  // Strategic Depth
  sheet.setColumnWidth(7, 120);  // Specificity
  sheet.setColumnWidth(8, 130);  // AI Integration
  sheet.setColumnWidth(9, 110);  // Creativity
  sheet.setColumnWidth(10, 130); // Communication
  sheet.setColumnWidth(11, 100); // Total Score
  sheet.setColumnWidth(12, 110); // Verdict
  sheet.setColumnWidth(13, 200); // CV URL
  sheet.setColumnWidth(14, 200); // Submission URL
  sheet.setColumnWidth(15, 200); // Teamtailor URL
  sheet.setColumnWidth(16, 250); // Strengths
  sheet.setColumnWidth(17, 250); // Gaps
  sheet.setColumnWidth(18, 350); // Summary

  // Add data validation for Verdict column (L)
  var verdictRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['PASS', 'TIEBREAKER', 'FAIL'], true)
    .setAllowInvalid(false)
    .build();
  sheet.getRange('L2:L1000').setDataValidation(verdictRule);

  // Format date column
  sheet.getRange('E2:E1000').setNumberFormat('yyyy-mm-dd');

  // Format score columns as numbers
  sheet.getRange('F2:K1000').setNumberFormat('0');

  Logger.log('Headers and formatting applied.');
}
