const ReservaDao = require('../infra/reserva-dao');
const bd = require('../../config/database');

class ReservaApi {
    
    static endpoints() {
        return {
            protegidos: '/reservas*',
            lista: '/reservas',
            lista_por_usuario: '/reservas/usuario/:idUsuario',
            detalhe: '/reservas/:id'
        }
    }
    
    constructor() {
        this._dao = new ReservaDao(bd);
    }

    lista() {
        return (req, resp) => {
            this._dao.lista()
                .then(reservas => resp.json(reservas))
                .catch(erro => resp.status(500).json(
                    {
                        mensagem: `Falha ao listar reservas`,
                        causa: erro
                    }
                ));
        }
    }

    listaPorUsuario() {
        return (req, resp) => {
            let { idUsuario } = req.params;
            this._dao.listaPorUsuario(idUsuario)
                .then(reservas => resp.json(reservas))
                .catch(erro => resp.status(500).json(
                    {
                        mensagem: `Falha ao listar reservas do usuario ${idUsuario}`,
                        causa: erro
                    }
                ));
        }
    }

    insere() {
        return (req, resp) => {
            let reserva = req.body;
            this._dao.insere(reserva)
                .then(() => resp.status(204).end())
                .catch(erro => resp.status(500).json(
                    {
                        mensagem: `Falha ao inserir reserva ${reserva}`,
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
                        mensagem: `Falha ao remover laboratório ${id}`,
                        causa: erro
                    }
                ));
        }
    }
}

module.exports = ReservaApi;