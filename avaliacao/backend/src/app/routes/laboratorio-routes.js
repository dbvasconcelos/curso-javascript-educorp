const UsuarioApi = require('../api/usuario-api');
const LaboratorioApi = require('../api/laboratorio-api');

const usuarioApi = new UsuarioApi();
const laboratorioApi = new LaboratorioApi();
const endpoints = LaboratorioApi.endpoints();

module.exports = (app) => {
	app.use(endpoints.protegidos, usuarioApi.autoriza());

	app.get(endpoints.lista, laboratorioApi.lista());
	
	app.post(endpoints.lista, laboratorioApi.insere());

	app.delete(endpoints.detalhe, laboratorioApi.remove());
}