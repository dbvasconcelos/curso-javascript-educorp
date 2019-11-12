const UsuarioDao = require('../infra/usuario-dao');
const ClienteController = require('./cliente-controller');

const bd = require('../../config/database');
const templates = require('../views/templates');

class UsuarioController {
    
    static rotas() {
        return {
            acesso: '/acesso'
        }
    }
    
    constructor() {
        this._dao = new UsuarioDao(bd);
    }

    acesso() {
        return (req, res) => {
            res.marko(
                templates.usuarios.acesso
            )
        }
    }

    autentica() {
        return (req, res, next) => {
            const passport = req.passport;
            passport.authenticate('local', (erro, usuario, info) => {
                if (info) {
                    return res.marko(templates.usuarios.acesso);
                }
    
                if (erro) {
                    return next(erro);
                }
    
                req.login(usuario, (erro) => {
                    if (erro) {
                        return next(erro);
                    }
    
                    return res.redirect(ClienteController.rotas().lista);
                });
            }) (req, res, next);
    
            /*
            this._dao.autentica(req.body.usuario, req.body.senha)
                .then(autenticou => {
                    if (autenticou) {
                        req.session.usuario = req.body.usuario;
                        req.session.save();
                        req.session.loggedIn = true;
                        res.redirect(ClienteController.rotas().lista);
                    } else {
                        res.redirect(UsuarioController.rotas().acesso);
                    }
                })
                .catch(erro =>  console.log(erro));
                */
        }
    }
}

module.exports = UsuarioController;