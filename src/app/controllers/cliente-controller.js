const ClienteDao = require('../infra/cliente-dao');

const bd = require('../../config/database');
const templates = require('../views/templates');

class ClienteController {
    
    static rotas() {
        return {
            lista: '/clientes',
            criacao: '/clientes/form',
            edicao: '/clientes/form/:id',
            remocao: '/clientes/:id'
        }
    }

    constructor() {
        this._dao = new ClienteDao(bd);
    }

    lista() {
        return (req, res) => {
            /*if (!req.session.usuario) {
                res.redirect('/acesso');
            }*/
            this._dao.lista()
                .then(clientes =>
                    res.marko(
                        templates.clientes.lista,
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
                templates.clientes.formulario,
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
            this._dao.buscaPorId(req.params.id)
                .then(cliente => 
                    res.marko(
                        templates.clientes.formulario,
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
            this._dao.insere(req.body)
                .then(res.redirect(ClienteController.rotas().lista))
                .catch(erro => console.log(erro));
        }
    }

    atualiza() {
        return (req, res) => {
            this._dao.atualiza(req.body)
                .then(res.redirect(ClienteController.rotas().lista))
                .catch(erro => console.log(erro));
        }
    }

    remove() {
        return (req, res) => {
            this._dao.removePorId(req.params.id)
                .then(() => res.status(200).end())
                .catch(erro => console.log(erro));
        }
    }
}

module.exports = ClienteController;
