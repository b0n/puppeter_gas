function doGet (req) {
  var result = { ok : 0, a : req.parameters };
  //var result = { ok : 0};
  
  if (req.parameters.api_key == 'XXX') {
    var rows = [];
    try { rows = JSON.parse(req.parameters.rows) } catch (e) { }
    if (rows.length) {
      var ss = SpreadsheetApp.getActiveSpreadsheet();
      var sheet = ss.getSheets()[0];
      for (var i = 0, len = rows.length; i < len; i++) {
        sheet.appendRow(rows[i]);
        result.ok++;
      }
    }
  }
  return ContentService.createTextOutput(
    JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}
