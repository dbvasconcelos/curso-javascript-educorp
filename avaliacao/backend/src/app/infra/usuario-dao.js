const criptografia = require('../../config/encryption');

const CAMPOS_USUARIO = 'nome, email, administrador';

class UsuarioDao {
    
    constructor(bd) {
        this._bd = bd;
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._bd.all(
                `SELECT id, ${CAMPOS_USUARIO} FROM usuarios`,
                (erro, usuarios) => {
                    if (erro) {
                        return reject(erro);
                    }
                    resolve(usuarios);
                }
            );
        });
    }

    buscaPorId(id) {
        return new Promise((resolve, reject) => {
            this._bd.get(
                `SELECT id, ${CAMPOS_USUARIO} FROM usuarios WHERE id = ?`,
                [id],
                (erro, usuario) => {
                    if (erro) {
                        return reject(erro);
                    }
                    resolve(usuario);
                }
            );
        });
    }

    insere(usuario) {
        return new Promise((resolve, reject) => {
            this._bd.run(
                `INSERT INTO usuarios (${CAMPOS_USUARIO}, senha) VALUES (?, ?, ?, ?)`, 
                [usuario.nome, usuario.email, usuario.administrador, criptografia.criptografa(usuario.senha)],
                (erro) => {
                    if (erro) {
                        return reject(erro);
                    }
                    resolve();
                }
            ); 
        });
    }

    atualiza(usuario) {
        return new Promise((resolve, reject) => {
            this._bd.run(
                `UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?`, 
                [usuario.nome, usuario.email, usuario.senha],
                (erro) => {
                    if (erro) {
                        return reject(erro);
                    }
                    resolve();
                }
            ); 
        });
    }

    removePorId(id) {
        return new Promise((resolve, reject) => {
            this._bd.run(
                `DELETE FROM usuarios WHERE id = ?`,
                [id],
                (erro) => {
                    if (erro) {
                        return reject(erro);
                    }
                    return resolve();
                }
            );
        });
    }

    buscaPorCredenciais(email, senha) {
        return new Promise((resolve, reject) => {
            this._bd.get(
                `SELECT id, ${CAMPOS_USUARIO} FROM USUARIOS WHERE email = ? AND senha = ?`,
                [email, criptografia.criptografa(senha)],
                (erro, resultado) => {
                    if (erro) {
                        return reject(erro);
                    }
                    return resolve(resultado);
                }
            );
        });
    }

    buscaPorEmail(email) {
        return new Promise((resolve, reject) => {
            this._bd.get(
                `SELECT id, ${CAMPOS_USUARIO} FROM USUARIOS WHERE email = ?`,
                [email],
                (erro, resultado) => {
                    if (erro) {
                        return reject(erro);
                    }
                    return resolve(resultado);
                }
            );
        });
    }
}

module.exports = UsuarioDao