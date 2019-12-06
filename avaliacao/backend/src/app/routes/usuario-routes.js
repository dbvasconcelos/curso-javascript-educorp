const UsuarioApi = require('../api/usuario-api');
const usuarioApi = new UsuarioApi();
const endpoints = UsuarioApi.endpoints();

module.exports = (app) => {
	app.use(endpoints.protegidos, usuarioApi.autoriza());

	app.get(endpoints.lista, usuarioApi.lista());
	app.get(endpoints.existe, usuarioApi.existe());

	app.post(endpoints.login, usuarioApi.autentica());
	app.post(endpoints.lista, usuarioApi.insere());

	app.delete(endpoints.detalhe, usuarioApi.remove());
}