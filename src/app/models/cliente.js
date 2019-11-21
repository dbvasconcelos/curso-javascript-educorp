const { check } = require('express-validator');

class Cliente {
    static validacoesFormulario() {
        return [
            check('cpf').trim().isNumeric().withMessage('CPF deve conter apenas números')
                .isLength({ min:11, max:11 }).withMessage('CPF precisa conter exatamente 11 números'),
            check('nome').trim().isLength({ min: 1}).withMessage('Nome não pode ser vazio').escape(),
            check('aniversario').isISO8601().withMessage('Data precisa ser informada no formato dd/mm/aaaa'),
            check('email').isEmail().withMessage('Email inválido')
        ];
    }
}

module.exports = Cliente;