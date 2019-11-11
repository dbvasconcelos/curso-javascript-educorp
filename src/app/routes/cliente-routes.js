module.exports = (app) => {
	const ClienteController = require('../controllers/cliente-controller');
	const clienteController = new ClienteController();
	const rotasCliente = ClienteController.rotas();

	app.get(rotasCliente.lista, clienteController.lista());
	app.get(rotasCliente.criacao, clienteController.criacao());
	app.get(rotasCliente.edicao, clienteController.edicao());

	app.post(rotasCliente.lista, clienteController.insere());

	app.put(rotasCliente.lista, clienteController.atualiza());
	
	app.delete(rotasCliente.remocao, clienteController.remove());
}