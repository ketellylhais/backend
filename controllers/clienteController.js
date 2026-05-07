const clienteModel = require("../models/clienteModel.js")

class clienteController {
    buscar(){
        return clienteModel.listar()
    }
    criar(cliente){
        return clienteModel.criar(cliente)
    }

    alterar(id){
        return "Cliente atualizado com sucesso  Código do cliente: " + id
    }

    excluir(){
        return "Cliente excluído com sucesso."
    }
}

module.exports = new clienteController()