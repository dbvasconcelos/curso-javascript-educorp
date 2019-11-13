const { check } = require('express-validator');

class Usuario {
    static validacoesFormulario() {
        return [
            check('nome').isLength({ min: 1}).withMessage('Nome não pode ser vazio'),
            check('login').isLength({ min: 1}).withMessage('Login não pode ser vazio')
        ];
    }
}

module.exports = Usuario;