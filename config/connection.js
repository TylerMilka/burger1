var mysql = require("mysql");
//connection to sql database
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",	
	database: "burger_db"
});
//making sure the connection goes through or else return error
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
