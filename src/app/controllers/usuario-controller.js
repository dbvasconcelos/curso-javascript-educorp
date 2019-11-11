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
        return (req, res) => {
            this._dao.autentica(req.body.usuario, req.body.senha)
                .then(autenticou => {
                    if (autenticou) {
                        res.redirect(ClienteController.rotas().lista);
                    } else {
                        res.redirect(UsuarioController.rotas().acesso);
                    }
                })
                .catch(erro =>  console.log(erro));
        }
    }
}

module.exports = UsuarioController;