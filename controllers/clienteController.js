const clienteModel = require("../models/clienteModel.js")

class clienteController {
    buscar(){
        return clienteModel.listar()
    }
    criar(){
        return "Cliente criado com sucesso"
    }

    alterar(id){
        return "Cliente atualizado com sucesso  Código do cliente: " + id
    }

    excluir(){
        return "Cliente excluído com sucesso."
    }
}