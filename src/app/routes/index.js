const rotasBase = require('./base-routes');
const rotasUsuario = require('./usuario-routes');
const rotasCliente = require('./cliente-routes');

module.exports = (app) => {
    rotasBase(app);
	rotasUsuario(app);
    rotasCliente(app);
}
