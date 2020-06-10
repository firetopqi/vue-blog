const mysql = require('mysql')
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "new_schema"
})
connection.query("SELECT * FROM new_schema.new_table", (err, res, fields) => {
  if (err) throw err
  console.log(res)
})
connection.end()