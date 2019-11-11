class UsuarioDao {
    
    constructor(bd) {
        this._bd = bd;
    }

    autentica(usuario, senha) {
        return new Promise((resolve, reject) => {
            this._bd.query(
                `SELECT * FROM usuarios WHERE loginUsr = ? AND senhaUsr = ?`,
                [usuario, senha],
                (erro, usuario) => {
                    if (erro) {
                        return reject('Não foi possível fazer login!');
                    }
                    return resolve(usuario.length > 0);
                }
            );
        });
    }
}

module.exports = UsuarioDao