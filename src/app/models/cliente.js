const { check } = require('express-validator');

class Cliente {
    static validacoesFormulario() {
        return [
            check('cpf').isNumeric().withMessage('CPF deve conter apenas números'),
            check('cpf').isLength({ min:11, max:11 }).withMessage('CPF precisa conter exatamente 11 números'),
            check('nome').isLength({ min: 1}).withMessage('Nome não pode ser vazio'),
            check('aniversario').isISO8601('YYYY/mm/dd').withMessage('Data precisa ser informada no formato AAAA/MM/DD'),
            check('email').isEmail().withMessage('Email inválido')
        ];
    }
}

module.exports = Cliente;