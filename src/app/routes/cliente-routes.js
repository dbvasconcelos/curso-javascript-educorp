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
	app.get('/clientes/lista', clienteController.lista());
	app.get('/clientes/cadastro', clienteController.formulario());
	app.get('/clientes/edita/:id', clienteController.formulario());
	app.post('/clientes/insere', clienteController.insere());
}