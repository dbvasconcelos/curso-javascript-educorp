const LaboratorioDao = require('../infra/laboratorio-dao');
const bd = require('../../config/database');

class LaboratorioApi {
    
    static endpoints() {
        return {
            protegidos: '/laboratorios*',
            lista: '/laboratorios',
            detalhe: '/laboratorios/:id'
        }
    }
    
    constructor() {
        this._dao = new LaboratorioDao(bd);
    }

    lista() {
        return (req, resp) => {
            this._dao.lista()
                .then(laboratorios => resp.json(laboratorios))
                .catch(erro => resp.status(500).json(
                    {
                        mensagem: `Falha ao listar laboratórios`,
                        causa: erro
                    }
                ));
        }
    }

    insere() {
        return (req, resp) => {
            let laboratorio = req.body;
            this._dao.insere(laboratorio)
                .then(() => resp.status(204).end())
                .catch(erro => resp.status(500).json(
                    {
                        mensagem: `Falha ao inserir laboratório ${laboratorio}`,
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

module.exports = LaboratorioApi;