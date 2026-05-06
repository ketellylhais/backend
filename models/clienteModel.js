const connection = require("../connection/connection")

class clienteModel {
    listar(){
        const sql = "SELECT * FROM cliente"
        return new Promise((resolve, reject) => {
            connection.query(sql, {}, (error, results) => {
                if(error){
                    console.log("Erro ao listar clientes")
                    console.log(error.message)
                    reject(error)
                }
                console.log("Clientes listados com sucesso")
                resolve(results)
            })
        })
    }
}

module.exports = new clienteModel()