function emailSending() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Evaluation"); // change
  var data = sheet.getDataRange().getValues(); 
  
  for (var i = 1; i < data.length; i++) { 
    var response = data[i];
    
    var emailAdd = response[0]; 
    var surName = response[1]; 
    var givenName = response[2]; 
    var affiliation = response[3]; 
    var status = response[4];
    //var status = response[4];
    //var status = response[2];


    
    if (status == "") {
      var htmlBody = HtmlService.createTemplateFromFile('Evaluation'); /// change

      htmlBody.surName = surName;
      htmlBody.givenName = givenName;
      htmlBody.affiliation = affiliation;

      var htmlOutput = htmlBody.evaluate().getContent(); 
      //var subject = "[ANNIV NIGHT] Registration Confirmation for Kairos: SA's 45th Anniversary Night";
      // var subject = "[ANNIV NIGHT] 3 Days Left! UP DOST SA's 45th Anniversary Night";
      //var subject = "[ANNIV NIGHT] 2 Days Left! UP DOST SA's 45th Anniversary Night";
      //var subject = "[ANNIV NIGHT] 1 Day Left! UP DOST SA's 45th Anniversary Night";
      //var subject = "[ANNIV NIGHT] 8 Hours Left! UP DOST SA's 45th Anniversary Night";
      var subject = "[ANNIV NIGHT] Evaluation Form for Kairos: SA's 45th Anniversary Night"
      
      MailApp.sendEmail({
        to: emailAdd,
        subject: subject,
        htmlBody: htmlOutput,
        name: "[UP DOST SA] Anniversary Night Team 2024"
      });

      
      sheet.getRange(i + 1, 5).setValue("Email Sent"); 
    }
  }
}
