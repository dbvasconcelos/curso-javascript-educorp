module.exports = (app) => {
	const UsuarioController = require('../controllers/usuario-controller');
	const usuarioController = new UsuarioController();
	const rotasUsuario = UsuarioController.rotas();

	app.get(rotasUsuario.acesso, usuarioController.acesso());

	app.post(rotasUsuario.acesso, usuarioController.autentica());
}