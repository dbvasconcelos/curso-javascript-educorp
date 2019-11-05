module.exports = (app) => {
	// CORS workaround
	app.use((req, res, next) => {
		res.header('Access-Control-Allow-Origin', '*');
    	res.header('Access-Control-Allow-Origin', 'http://localhost');
    	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    	res.header('Access-Control-Allow-Headers', 'Content-Type');
    	next();
	});

	const ClienteController = require('../controllers/cliente-controller');
	const clienteController = new ClienteController();
	app.get('/clientes', clienteController.lista());
	app.get('/clientes/form', clienteController.criacao());
	app.get('/clientes/form/:id', clienteController.edicao());
	app.post('/clientes', clienteController.insere());
	app.put('/clientes', clienteController.atualiza());
}