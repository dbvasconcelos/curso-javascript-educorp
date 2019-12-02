const templates = require('../views/templates');
const UsuarioDao = require('../infra/usuario-dao');
const bd = require('../../config/database');
const cript = require('../../config/encryption');

class BaseController {

    static rotas() {
        return {
            home: '/',
            acesso: '/acesso',
            sair: '/logout',
			api: '/api'
        };
    }

    home() {
        return (req, resp) => {
            if (req.isAuthenticated()) {
                resp.marko(
                    templates.base.home
                );
            } else {
                resp.redirect(BaseController.rotas().acesso);
            }
        };
    }

    acesso() {
        return (req, resp) => {
            resp.marko(
                templates.base.acesso
            )
        }
    }

    sair() {
        return (req, resp) => {
            req.logout();
            resp.marko(templates.base.acesso);
        }
    }

    autentica() {
        return (req, resp, next) => {
            const passport = req.passport;
            passport.authenticate('local', (erro, usuario, info) => {
                if (info) {
                    return resp.marko(
                        templates.base.acesso,
                        {
                            erro: info.mensagem
                        }
                    );
                }
    
                if (erro) {
                    return next(erro);
                }
    
                req.login(usuario, (erro) => {
                    if (erro) {
                        return next(erro);
                    }
                    return resp.redirect(BaseController.rotas().home);
                });
            }) (req, resp, next);
        }
    }

	autenticaApi() {
		return (req, resp) => {
			const usuario = req.body.usuario;
            const senha = req.body.senha;
			console.log(req.body);
            const usuarioDao = new UsuarioDao(bd);
            usuarioDao.buscaPorLogin(usuario)
                    .then(encontrado => {
                        if (!encontrado || senha != cript.decriptografa(encontrado.senhaUsr)) {
                            resp.json(0);
                        } else {
							resp.json(1);
						}
                    })
                    .catch(erro => resp.json(0));
		}
	}

    autoriza() {
        return (req, resp, next) => {
            if (req.isAuthenticated()) {
                next();
            } else {
                resp.redirect(BaseController.rotas().acesso);
            }
        }
    }
}

module.exports = BaseController;