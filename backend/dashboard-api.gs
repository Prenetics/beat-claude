/**
 * Beat Claude Dashboard API
 * Google Apps Script Web App
 *
 * Reads candidate scores from the "Dashboard Scores" tab and serves them as JSON.
 * Also accepts POST requests to ping the recruitment team on Slack.
 *
 * Sheet ID: 1RfNhr6Hm2Ga5iMOO53NwadaXIFX6z3McRmUwjAV_G2Y
 */

var SHEET_ID = '1RfNhr6Hm2Ga5iMOO53NwadaXIFX6z3McRmUwjAV_G2Y';
var TAB_NAME = 'Dashboard Scores';

// Replace with the actual Slack bot token before deploying
var SLACK_BOT_TOKEN = 'xoxb-REPLACE-WITH-ACTUAL-TOKEN';

var SLACK_CHANNEL_ID = 'C02F60PFWDB'; // #people-and-culture

/**
 * GET handler - returns all Dashboard Scores rows as JSON.
 */
function doGet(e) {
  try {
    var ss = SpreadsheetApp.openById(SHEET_ID);
    var sheet = ss.getSheetByName(TAB_NAME);

    if (!sheet) {
      return buildJsonResponse({ error: 'Tab "' + TAB_NAME + '" not found.' }, 404);
    }

    var data = sheet.getDataRange().getValues();
    if (data.length <= 1) {
      return buildJsonResponse({ candidates: [], count: 0 });
    }

    var headers = data[0];
    var candidates = [];

    for (var i = 1; i < data.length; i++) {
      var row = data[i];
      // Skip empty rows
      if (!row[0] && !row[1]) continue;

      candidates.push({
        candidate_name: row[0] || '',
        email: row[1] || '',
        linkedin_url: row[2] || '',
        role: row[3] || '',
        submission_date: row[4] ? Utilities.formatDate(new Date(row[4]), 'Asia/Hong_Kong', 'yyyy-MM-dd') : '',
        strategic_depth_score: row[5] || 0,
        specificity_score: row[6] || 0,
        ai_integration_score: row[7] || 0,
        creativity_score: row[8] || 0,
        communication_score: row[9] || 0,
        total_score: row[10] || 0,
        verdict: row[11] || '',
        cv_url: row[12] || '',
        submission_url: row[13] || '',
        teamtailor_url: row[14] || '',
        strengths: row[15] ? String(row[15]).split(',').map(function(s) { return s.trim(); }) : [],
        gaps: row[16] ? String(row[16]).split(',').map(function(s) { return s.trim(); }) : [],
        summary: row[17] || ''
      });
    }

    return buildJsonResponse({ candidates: candidates, count: candidates.length });

  } catch (err) {
    return buildJsonResponse({ error: err.message }, 500);
  }
}

/**
 * POST handler - accepts JSON body with actions.
 *
 * Supported actions:
 *   "ping_recruitment" - sends a Slack message to #people-and-culture
 *     Required fields: candidate_name, role, requester_name
 */
function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);
    var action = body.action;

    if (action === 'ping_recruitment') {
      return handlePingRecruitment(body);
    }

    return buildJsonResponse({ error: 'Unknown action: ' + action }, 400);

  } catch (err) {
    return buildJsonResponse({ error: err.message }, 500);
  }
}

/**
 * Sends a Slack message to #people-and-culture notifying the team
 * that someone wants to discuss a candidate.
 */
function handlePingRecruitment(body) {
  var candidateName = body.candidate_name;
  var role = body.role;
  var requesterName = body.requester_name;

  if (!candidateName || !role || !requesterName) {
    return buildJsonResponse({
      error: 'Missing required fields: candidate_name, role, requester_name'
    }, 400);
  }

  var message = '\ud83d\udd14 *' + requesterName + '* wants to discuss *' + candidateName + '* for *' + role + '*. Please follow up.';

  var payload = {
    channel: SLACK_CHANNEL_ID,
    text: message,
    unfurl_links: false
  };

  var options = {
    method: 'post',
    contentType: 'application/json; charset=utf-8',
    headers: {
      'Authorization': 'Bearer ' + SLACK_BOT_TOKEN
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  var response = UrlFetchApp.fetch('https://slack.com/api/chat.postMessage', options);
  var result = JSON.parse(response.getContentText());

  if (result.ok) {
    return buildJsonResponse({ success: true, message: 'Slack notification sent.' });
  } else {
    return buildJsonResponse({ error: 'Slack API error: ' + result.error }, 500);
  }
}

/**
 * Builds a JSON response with CORS headers.
 */
function buildJsonResponse(data, statusCode) {
  var output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
