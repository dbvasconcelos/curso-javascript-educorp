const ClienteDao = require('../infra/cliente-dao');
const db = require('../../config/database');

class ClienteController {
    
    lista() {
        return (req, res) => {
            const clienteDao = new ClienteDao(db);
            clienteDao.lista((erro, clientes) => {
                res.marko(
                    require('../views/clientes/lista.marko'),
                    {
                        clientes: clientes
                    }
                );
            });
        }
    }
}

module.exports = ClienteController;
