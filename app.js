const express = require("express")
const app = express()
const port = 3001
const router = require("./routes/moduleRoute")
const connection = require("./connection/connection")
const tables = require("./connection/tables")

// Try to connect to the database first. If it fails, log the error and exit.
connection.connect((err) => {
    if (err) {
        console.error("Erro ao conectar no banco de dados:", err.message)
        return
    }

    console.log("Conectado ao banco de dados")

    // Initialize tables after successful DB connection
    tables.init(connection)

    // Register routes and start server
    router(app)

    app.listen(port, () => {
        console.log("Rodou na porta " + port)
    })
})