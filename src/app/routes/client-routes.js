module.exports = (app) => {

	// CORS issue workaround
	app.use((req, res, next) => {
		res.header("Access-Control-Allow-Origin", "*");
    	res.header("Access-Control-Allow-Origin", "http://localhost");
    	res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    	res.header("Access-Control-Allow-Headers", "Content-Type");
    	next();
	});

	const clientsController = require("../controllers/clientsController");
	const cliController = new clientsController();
	app.get("/clientes", cliController.listClients());

}