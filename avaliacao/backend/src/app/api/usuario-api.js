const jwt = require('jsonwebtoken');
const UsuarioDao = require('../infra/usuario-dao');
const bd = require('../../config/database');

class UsuarioApi {
    
    static endpoints() {
        return {
            login: '/login',
            protegidos: '/usuarios*',
            lista: '/usuarios',
            existe: '/usuarios/existe/:email',
            detalhe: '/usuarios/:id'
        }
    }
    
    constructor() {
        this._dao = new UsuarioDao(bd);
    }

    lista() {
        return (req, resp) => {
            this._dao.lista()
                .then(usuarios => resp.json(usuarios))
                .catch(erro => resp.status(500).json(
                    {
                        mensagem: `Falha ao listar usuários`,
                        causa: erro
                    }
                ));
        }
    }

    insere() {
        return (req, resp) => {
            let usuario = req.body;
            this._dao.insere(usuario)
                .then(() => resp.status(204).end())
                .catch(erro => resp.status(500).json(
                    {
                        mensagem: `Falha ao inserir usuário ${usuario}`,
                        causa: erro
                    }
                ));
        }
    }

    remove() {
        return (req, resp) => {
            let { id } = req.params;
            this._dao.removePorId(id)
                .then(() => resp.status(204).end())
                .catch(erro => resp.status(500).json(
                    {
                        mensagem: `Falha ao remover usuário ${id}`,
                        causa: erro
                    }
                ));
        }
    }

    autentica() {
        return (req, resp) => {
            let { email, senha } = req.body;
            this._dao.buscaPorCredenciais(email, senha)
                .then(usuario => {
                    if (usuario) {
                        let token = jwt.sign(usuario, req.app.get('secret'), {
                            expiresIn: 86400
                        });
                        resp.set('x-access-token', token);
                        return resp.json(usuario);
                    } else {
                        resp.status(401).json(
                            { 
                                mensagem: `Email ou senha inválidos!`,
                            }
                        )
                    }
                })
                .catch(erro => resp.status(500).json(
                    { 
                        mensagem: `Falha ao autenticar usuário ${email}`,
                        causa: erro
                    }
                ));
        }
    }

    autoriza() {
        return (req, resp, next) => {
            let token = req.headers['x-access-token'];
            if (token) {
                next();
            } else {
                resp.status(401).json(
                    {
                        mensagem: `Não Autorizado`
                    }
                );
            }
        }
    }

    existe() {
        return (req, resp) => {
            let { email } = req.params;
            this._dao.buscaPorEmail(email)
                .then(usuario => resp.json(!!usuario))
                .catch(erro => resp.status(500).json(
                    { 
                        mensagem: `Falha ao verificar email ${email}`,
                        causa: erro
                    }
                ));
        }
    }
}

module.exports = UsuarioApi;