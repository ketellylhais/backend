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

    criar(cliente){
        const sql = "insert into clientes set ?"
        return new Promise((resolve, reject) => {
            connection.query(sql, cliente, (error, results) => {
                if(error){
                    console.log("Erro ao criar cliente")
                    console.log(error.message)
                    reject(error)
                }
                console.log("Cliente criado com sucesso")
                resolve(results)
            })
        })
    }

    atualizar(id, cliente){
        const sql = "update clientes set ? where id = ?"
        return new Promise((resolve, reject) => {
            connection.query(sql, [cliente, id], (error, results) => {
                if(error){
                    console.log("Erro ao atualizar cliente")
                    console.log(error.message)
                    reject(error)
                }
                console.log("Cliente atualizado com sucesso")
                resolve(results)
            })
        })
    }

    deletar(id, clienteExclusao){
        const sql = "update clientes set ? where id = ?"
        return new Promise((resolve, reject) => {
            connection.query(sql, [clienteExclusao, id], (error, results) => {
                if(error){
                    console.log("Erro ao deletar cliente")
                    console.log(error.message)
                    reject(error)
                }
                console.log("Cliente deletado com sucesso")
                resolve(results)
            })
        })
    }
}

module.exports = new clienteModel()