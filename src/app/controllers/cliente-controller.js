const ClienteDao = require('../infra/cliente-dao');

const bd = require('../../config/database');
const templates = require('../views/templates');

const { validationResult } = require('express-validator');

const DataHelper = require('../helpers/data-helper');

class ClienteController {
    
    static rotas() {
        return {
            autenticadas: '/clientes*',
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
        return (req, resp) => {
            this._dao.lista()
                .then(clientes =>
                    resp.marko(
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
        return (req, resp) => {
            resp.marko(
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
        return (req, resp) => {
            this._dao.buscaPorId(req.params.id)
                .then(cliente => 
                    resp.marko(
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
        return (req, resp) => {
            const erros = validationResult(req);
            if (!erros.isEmpty()) {
                return resp.marko(
                    templates.clientes.formulario,
                    { 
                        cliente: { 
                            cpfClie: req.body.cpf,
                            nomeClie: req.body.nome,
                            emailClie: req.body.email,
                            idClie: req.body.id,
                            dataNiverClie: DataHelper.dataParaTexto(req.body.aniversario)
                        }, 
                        errosValidacao: erros.array()
                    }
                );
            }
            this._dao.insere(req.body)
                .then(resp.redirect(ClienteController.rotas().lista))
                .catch(erro => console.log(erro));
        }
    }

    atualiza() {
        return (req, resp) => {
            const erros = validationResult(req);
            if (!erros.isEmpty()) {
                return resp.status(422).marko(
                    templates.clientes.formulario,
                    { 
                        cliente: { 
                            cpfClie: req.body.cpf,
                            nomeClie: req.body.nome,
                            emailClie: req.body.email,
                            idClie: req.body.id,
                            dataNiverClie: DataHelper.dataParaTexto(req.body.aniversario)
                        }, 
                        errosValidacao: erros.array()
                    }
                );
            }
            this._dao.atualiza(req.body)
                .then(resp.redirect(ClienteController.rotas().lista))
                .catch(erro => console.log(erro));
        }
    }

    remove() {
        return (req, resp) => {
            this._dao.removePorId(req.params.id)
                .then(() => resp.status(200).end())
                .catch(erro => console.log(erro));
        }
    }

}

module.exports = ClienteController;
