class LaboratorioDao {
    
    constructor(bd) {
        this._bd = bd;
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._bd.all(
                `SELECT * FROM laboratorios`,
                (erro, laboratorios) => {
                    if (erro) {
                        return reject(erro);
                    }
                    resolve(laboratorios);
                }
            );
        });
    }

    buscaPorId(id) {
        return new Promise((resolve, reject) => {
            this._bd.get(
                `SELECT * FROM laboratorios WHERE id = ?`,
                [id],
                (erro, laboratorio) => {
                    if (erro) {
                        return reject(erro);
                    }
                    resolve(laboratorio);
                }
            );
        });
    }

    insere(laboratorio) {
        return new Promise((resolve, reject) => {
            this._bd.run(
                `INSERT INTO laboratorios (nome) VALUES (?) `, 
                [laboratorio.nome],
                (erro) => {
                    if (erro) {
                        return reject(erro);
                    }
                    resolve();
                }
            ); 
        });
    }

    atualiza(laboratorio) {
        return new Promise((resolve, reject) => {
            this._bd.run(
                `UPDATE laboratorios SET nome = ? WHERE id = ?`, 
                [laboratorio.nome],
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
                `DELETE FROM laboratorios WHERE id = ?`,
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

}

module.exports = LaboratorioDao