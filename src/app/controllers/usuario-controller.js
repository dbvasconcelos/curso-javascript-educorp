const UsuarioDao = require('../infra/usuario-dao');
const bd = require('../../config/database');

class UsuarioController {
    acesso() {
        return (req, res) => {
            res.marko(
                require('../views/usuarios/acesso.marko')
            )
        }
    }

    autentica() {
        return (req, res) => {
            const usuarioDao = new UsuarioDao(bd);
            usuarioDao.autentica(req.body.usuario, req.body.senha)
                .then(autenticou => {
                    if (autenticou) {
                        res.redirect('/clientes');
                    } else {
                        res.redirect('/');
                    }
                })
                .catch(erro =>  console.log(erro));
        }
    }
}

module.exports = UsuarioController;