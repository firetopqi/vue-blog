const mysql = require('mysql')
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "new_schema"
})
connection.connect()
let addSql = "INSERT INTO new_table(id,name,age) VALUES(0,?,?)"
let addSqlParams = ["zhangqi", "27"]
connection.query(addSql, addSqlParams, (err, res) => {
  if (err) {
    console.log("新增错误：")
    console.log(err)
  } else {
    console.log("新增成功：")
    console.log(res)
  }
})
connection.end()