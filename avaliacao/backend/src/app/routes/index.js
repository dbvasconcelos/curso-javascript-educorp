const rotasUsuario = require('./usuario-routes');
const rotasLaboratorio = require('./laboratorio-routes');
const rotasReserva = require('./reserva-routes');

module.exports = (app) => {
	rotasUsuario(app);
	rotasLaboratorio(app);
	rotasReserva(app);
}