const UsuarioDao = require('../infra/usuario-dao');
const ClienteController = require('./cliente-controller');

const bd = require('../../config/database');
const templates = require('../views/templates');
const cript = require('../../config/encryption');

const { validationResult } = require('express-validator');

class UsuarioController {
    
    static rotas() {
        return {
            autenticadas: '/usuarios*',
            lista: '/usuarios',
            criacao: '/usuarios/form',
            edicao: '/usuarios/form/:id',
            remocao: '/usuarios/:id',
        }
    }
    
    constructor() {
        this._dao = new UsuarioDao(bd);
    }

    lista() {
        return (req, resp) => {
            this._dao.lista()
                .then(usuarios =>
                    resp.marko(
                        templates.usuarios.lista,
                        {
                            usuarios: usuarios
                        }
                    )
                )
                .catch(erro => console.log(erro));
        }
    }

    criacao() {
        return (req, resp) => {
            resp.marko(
                templates.usuarios.formulario,
                {
                    usuario: { 
                        idUsr: '',
                        nomeUsr: '',
                        loginUsr: '',
                        senhaUsr: ''
                    }
                }
            )
        }
    }

    edicao() {
        return (req, resp) => {
            this._dao.buscaPorId(req.params.id)
                .then(usuarios => 
                    resp.marko(
                        templates.usuarios.formulario,
                        {
                            usuario: usuarios[0]
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
                    templates.usuarios.formulario,
                    { 
                        usuario: { 
                            nomeUsr: req.body.nome,
                            loginUsr: req.body.login,
                            senhaUsr: req.body.senha,
                            idUsr: req.body.id
                        }, 
                        errosValidacao: erros.array()
                    }
                );
            }
            let senhaCript = cript.criptografa(req.body.senha);
            req.body.senha = senhaCript;
            this._dao.insere(req.body)
                .then(resp.redirect(UsuarioController.rotas().lista))
                .catch(erro => console.log(erro));
        }
    }

    atualiza() {
        return (req, resp) => {
            const erros = validationResult(req);
            if (!erros.isEmpty()) {
                return resp.status(422).marko(
                    templates.usuarios.formulario,
                    { 
                        usuario: { 
                            nomeUsr: req.body.nome,
                            loginUsr: req.body.login,
                            senhaUsr: req.body.senha,
                            idUsr: req.body.id
                        },
                        usuario: req.body,
                        errosValidacao: erros.array()
                    }
                );
            }
            req.body.senha = cript.criptografa(req.body.senha);
            this._dao.atualiza(req.body)
                .then(resp.redirect(UsuarioController.rotas().lista))
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

module.exports = UsuarioController;