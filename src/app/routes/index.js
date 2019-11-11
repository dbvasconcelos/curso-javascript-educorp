module.exports = (app) => {
    const rotasUsuario = require('./usuario-routes');
	rotasUsuario(app);
    const rotasCliente = require('./cliente-routes');
    rotasCliente(app);
}
