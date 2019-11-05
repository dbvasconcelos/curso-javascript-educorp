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

    formulario() {
        return (req,res) => {
            if (req.params.id) {
                const clienteDao = new ClienteDao(bd);
                clienteDao.buscaPorId(req.params.id)
                    .then(cliente => 
                        res.marko(
                        require('../views/clientes/cadastro.marko'),
                        {
                            cliente: cliente[0]
                        }
                    ))
                    .catch(erro => console.log('Erro'));
            } else {
                res.marko(
                    require('../views/clientes/cadastro.marko'),
                    {
                        cliente: {
                            idClie: '',
                            nomeClie: '',
                            cpfClie: '',
                            dataNiverClie: '',
                            emailClie: ''
                        }
                    }
                )
            }
        }
    }

    insere() {
        return (req, res) => {
            const clienteDao = new ClienteDao(bd);
            if (req.body.id) {
                console.log('atualizando');
                clienteDao.atualiza(req.body)
                .then(res.redirect('/clientes/lista'))
                .catch(erro => console.log(erro));
            } else {
                clienteDao.insere(req.body)
                    .then(res.redirect('/clientes/lista'))
                    .catch(erro => console.log(erro));
            }
        }
    }
}

module.exports = ClienteController;
