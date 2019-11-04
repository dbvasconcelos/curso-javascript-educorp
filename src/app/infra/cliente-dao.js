class ClienteDao {
    constructor(db) {
        this._db = db;
    }

    lista(callback) {
        var sql = `SELECT idClie, cpfClie, emailClie, nomeClie, DATE_FORMAT(dataNiverClie,"%d/%m/%Y") as dataNiverClie FROM CLIENTES`;
        this._db.query(
            sql,
            (erro, clientes) => {
                callback(erro, clientes);
            }
        );
    }
}

module.exports = ClienteDao