const mysql = require("mysql")

const connection = mysql.createConnection({
    hos: "localhost",
    port: 3306,
    user: "root",
    password: "123",
    database: "CRUD"
})

module.exports = connection