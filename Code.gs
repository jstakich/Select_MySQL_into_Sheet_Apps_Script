function onOpen() {
   var conn = Jdbc.getConnection("jdbc:mysql://db4free.net:3306/testdataj", "Username", "Password");
   
 var SQLstatement = conn.createStatement();
 var result = SQLstatement.executeQuery("SELECT * FROM testdataj.test_table");
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var cell = ss.getRange('f7');
  Logger.log(cell.getA1Notation());
  var row = 0;
  while (result.next()) {
    for (var col = 0; col < result.getMetaData().getColumnCount(); col++) {
      cell.offset(row, col).setValue(result.getString(col + 1));
    }
    row++;
  }
      
 result.close();
 SQLstatement.close();
 conn.close();
     
};
