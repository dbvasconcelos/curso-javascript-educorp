const UsuarioController = require('../controllers/usuario-controller');
const usuarioController = new UsuarioController();

const BaseController = require('../controllers/base-controller');
const baseController = new BaseController();

const Usuario = require('../models/usuario');

module.exports = (app) => {
	const rotasUsuario = UsuarioController.rotas();

	app.use(rotasUsuario.autenticadas, baseController.autoriza());

	app.get(rotasUsuario.lista, usuarioController.lista());
	app.get(rotasUsuario.api, usuarioController.listaApi());
	app.get(rotasUsuario.criacao, usuarioController.criacao());
	app.get(rotasUsuario.edicao, usuarioController.edicao());

	app.post(rotasUsuario.lista, Usuario.validacoesFormulario(), usuarioController.insere());
	
	app.put(rotasUsuario.lista, Usuario.validacoesFormulario(), usuarioController.atualiza());
	
	app.delete(rotasUsuario.remocao, usuarioController.remove());
}