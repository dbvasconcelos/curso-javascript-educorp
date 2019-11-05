class ClienteDao {
    constructor(bd) {
        this._bd = bd;
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._bd.query(
                `SELECT idClie, cpfClie, emailClie, nomeClie, DATE_FORMAT(dataNiverClie,"%d/%m/%Y") as dataNiverClie FROM CLIENTES`,
                (erro, clientes) => {
                    if (erro) {
                        console.log(erro);
                        return reject('Não foi possível listar clientes');
                    }
                    resolve(clientes);
                }
            );
        });
    }

    buscaPorId(id) {
        return new Promise((resolve, reject) => {
            this._bd.query(
                `SELECT idClie, cpfClie, emailClie, nomeClie, DATE_FORMAT(dataNiverClie,"%d/%m/%Y") as dataNiverClie FROM CLIENTES WHERE idClie = ?`,
                [id],
                (erro, cliente) => {
                    if (erro) {
                        console.log(erro);
                        return reject('Não foi possível encontrar cliente por id');
                    }
                    resolve(cliente);
                }
            );
        });
    }

    insere(cliente) {
        return new Promise((resolve, reject) => {
            this._bd.query(
                `INSERT INTO clientes (cpfClie, emailClie, nomeClie, dataNiverClie) VALUES (?, ?, ?, ?) `, 
                [cliente.cpf, cliente.email, cliente.nome, cliente.aniversario],
                (erro, clientes) => {
                    if (erro) {
                        console.log(erro);
                        return reject('Não foi possível inserir cliente');
                    }
                    resolve();
                }
            ); 
        });
    }

    atualiza(cliente) {
        return new Promise((resolve, reject) => {
            this._bd.query(
                `UPDATE clientes SET cpfClie = ?, emailClie = ?, nomeClie = ?, dataNiverClie = ? WHERE idClie = ?`, 
                [cliente.cpf, cliente.email, cliente.nome, cliente.aniversario, cliente.id],
                (erro, clientes) => {
                    if (erro) {
                        console.log(erro);
                        return reject('Não foi possível atualizar cliente');
                    }
                    resolve();
                }
            ); 
        });
    }
}

module.exports = ClienteDao