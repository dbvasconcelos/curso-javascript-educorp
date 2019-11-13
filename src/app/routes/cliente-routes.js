const ClienteController = require('../controllers/cliente-controller');
const clienteController = new ClienteController();

const BaseController = require('../controllers/base-controller');

const Cliente = require('../models/cliente');

module.exports = (app) => {
	const rotasCliente = ClienteController.rotas();

	app.use(rotasCliente.autenticadas, (req, resp, next) => {
		if (req.isAuthenticated()) {
			next();
		} else {
			resp.redirect(BaseController.rotas().acesso);
		}
	});

	app.get(rotasCliente.lista, clienteController.lista());
	app.get(rotasCliente.criacao, clienteController.criacao());
	app.get(rotasCliente.edicao, clienteController.edicao());

	app.post(rotasCliente.lista, Cliente.validacoesFormulario(), clienteController.insere());

	app.put(rotasCliente.lista, Cliente.validacoesFormulario(), clienteController.atualiza());
	
	app.delete(rotasCliente.remocao, clienteController.remove());
}