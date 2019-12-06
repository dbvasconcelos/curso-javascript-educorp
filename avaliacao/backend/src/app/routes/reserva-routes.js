const UsuarioApi = require('../api/usuario-api');
const ReservaApi = require('../api/reserva-api');

const usuarioApi = new UsuarioApi();
const reservaApi = new ReservaApi();
const endpoints = ReservaApi.endpoints();

module.exports = (app) => {
	app.use(endpoints.protegidos, usuarioApi.autoriza());

	app.get(endpoints.lista, reservaApi.lista());
	app.get(endpoints.lista_por_usuario, reservaApi.listaPorUsuario());

	app.post(endpoints.lista, reservaApi.insere());

	app.delete(endpoints.detalhe, reservaApi.remove());
}