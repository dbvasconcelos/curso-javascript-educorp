class UsuarioDao {
    
    constructor(bd) {
        this._bd = bd;
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._bd.query(
                `SELECT idUsr, nomeUsr, loginUsr FROM USUARIOS`,
                (erro, usuarios) => {
                    if (erro) {
                        console.log(erro);
                        return reject('Não foi possível listar usuários');
                    }
                    resolve(usuarios);
                }
            );
        });
    }

    buscaPorId(id) {
        return new Promise((resolve, reject) => {
            this._bd.query(
                `SELECT * FROM USUARIOS WHERE idUsr = ?`,
                [id],
                (erro, usuario) => {
                    if (erro) {
                        console.log(erro);
                        return reject('Não foi possível encontrar usuário por id');
                    }
                    resolve(usuario);
                }
            );
        });
    }

    insere(usuario) {
        return new Promise((resolve, reject) => {
            this._bd.query(
                `INSERT INTO USUARIOS (nomeUsr, loginUsr, senhaUsr) VALUES (?, ?, ?) `, 
                [usuario.nome, usuario.login, usuario.senha],
                (erro) => {
                    if (erro) {
                        console.log(erro);
                        return reject('Não foi possível inserir usuário');
                    }
                    resolve();
                }
            ); 
        });
    }

    atualiza(usuario) {
        return new Promise((resolve, reject) => {
            this._bd.query(
                `UPDATE USUARIOS SET nomeUsr = ?, loginUsr = ?, senhaUsr = ? WHERE idUsr = ?`, 
                [usuario.nome, usuario.login, usuario.senha, usuario.id],
                (erro) => {
                    if (erro) {
                        console.log(erro);
                        return reject('Não foi possível atualizar usuário');
                    }
                    resolve();
                }
            ); 
        });
    }

    removePorId(id) {
        return new Promise((resolve, reject) => {
            this._bd.query(
                `DELETE FROM USUARIOS WHERE idUsr = ?`,
                [id],
                (erro) => {
                    if (erro) {
                        return reject('Não foi possível remover usuário!');
                    }
                    return resolve();
                }
            );
        });
    }

    autentica(usuario, senha) {
        return new Promise((resolve, reject) => {
            this._bd.query(
                `SELECT * FROM USUARIOS WHERE loginUsr = ? AND senhaUsr = ?`,
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

    buscaPorLogin(login) {
        return new Promise((resolve, reject) => {
            this._bd.query(
                `SELECT * FROM USUARIOS WHERE loginUsr = ?`,
                [login],
                (erro, resultado) => {
                    if (erro) {
                        return reject('Não foi possível encontrar usuário!');
                    }
                    return resolve(resultado[0]);
                }
            );
        });
    }
}

module.exports = UsuarioDao