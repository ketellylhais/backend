class Tables {
    init(connection) {
        this.connection = connection
        this.createTableCliente()
    }

    createTableCliente() {
        const sql =
            `   CREATE TABLE IF NOT EXISTS cliente (
            id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
            nome VARCHAR(50) NOT NULL,
            email VARCHAR(50) NOT NULL UNIQUE,
            telefone VARCHAR(20),
            data_nascimento DATE,
            data_cadastro DATE
        )`

        this.connection.query(sql, (error) => {
            if (error) {
                console.log("Erro ao criar tabela cliente")
                console.log(error.message)
                return
            }
            console.log("Tabela cliente criada com sucesso")

        })

    }
}

module.exports = new Tables()