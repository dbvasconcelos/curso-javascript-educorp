const templates = require('../views/templates');

class BaseController {

    static rotas() {
        return {
            home: '/',
            acesso: '/acesso',
            sair: '/logout'
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