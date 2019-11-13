const UsuarioController = require('../controllers/usuario-controller');
const usuarioController = new UsuarioController();

const BaseController = require('../controllers/base-controller');

const Usuario = require('../models/usuario');

module.exports = (app) => {
	const rotasUsuario = UsuarioController.rotas();

	app.use(rotasUsuario.autenticadas, (req, resp, next) => {
		if (req.isAuthenticated()) {
			next();
		} else {
			resp.redirect(BaseController.rotas().acesso);
		}
	});

	app.get(rotasUsuario.lista, usuarioController.lista());
	app.get(rotasUsuario.criacao, usuarioController.criacao());
	app.get(rotasUsuario.edicao, usuarioController.edicao());

	app.post(rotasUsuario.lista, Usuario.validacoesFormulario(), usuarioController.insere());
	
	app.put(rotasUsuario.lista, Usuario.validacoesFormulario(), usuarioController.atualiza());
	
	app.delete(rotasUsuario.remocao, usuarioController.remove());
}