const routerCliente = require('./clienteRoute');

module.exports = (app) => {
    app.use(routerCliente)
}