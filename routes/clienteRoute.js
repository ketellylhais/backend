const Router = require("express").Router

const router = Router()

router.get("/clientes", (req, res) => {
    res.send("Clientes consultados com sucesso")
})

router.post("/clientes", (req, res) => {
    res.send("Cliente criado com sucesso")
})

router.put("/clientes/:id", (req, res) => {
    const {id} = req.params
    res.send(`Cliente atualizado com sucesso ${id}`)
})

router.delete("/clientes/:id", (req, res) => {
    const {id} = req.params
    res.send(`Cliente deletado com sucesso ${id}`)
})

module.exports = router