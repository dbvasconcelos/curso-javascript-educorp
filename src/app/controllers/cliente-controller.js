const ClienteDao = require('../infra/cliente-dao');
const bd = require('../../config/database');

class ClienteController {
    
    lista() {
        return (req, res) => {
            const clienteDao = new ClienteDao(bd);
            clienteDao.lista()
                .then(clientes =>
                    res.marko(
                        require('../views/clientes/lista.marko'),
                        {
                            clientes: clientes
                        }
                    )
                )
                .catch(erro => console.log(erro));
        }
    }

    criacao() {
        return (req,res) => {
            res.marko(
                require('../views/clientes/formulario.marko'),
                {
                    cliente: {
                        cpfClie: '',
                        nomeClie: '',
                        emailClie: '',
                        idClie: '',
                        dataNiverClie: ''
                    }
                }
            )
        }
    }

    edicao() {
        return (req,res) => {
            const clienteDao = new ClienteDao(bd);
            clienteDao.buscaPorId(req.params.id)
                .then(cliente => 
                    res.marko(
                        require('../views/clientes/formulario.marko'),
                        {
                            cliente: cliente[0]
                        }
                    )
                )
                .catch(erro => console.log(erro));
        }
    }

    insere() {
        return (req, res) => {
            const clienteDao = new ClienteDao(bd);
            clienteDao.insere(req.body)
                .then(res.redirect('/clientes'))
                .catch(erro => console.log(erro));
        }
    }

    atualiza() {
        return (req, res) => {
            const clienteDao = new ClienteDao(bd);
            clienteDao.atualiza(req.body)
                .then(res.redirect('/clientes'))
                .catch(erro => console.log(erro));
        }
    }

    remove() {
        return (req, res) => {
            const clienteDao = new ClienteDao(bd);
            clienteDao.removePorId(req.params.id)
                .then(() => res.status(200).end())
                .catch(erro => console.log(erro));
        }
    }
}

module.exports = ClienteController;
