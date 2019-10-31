/*
 * Clients database operations.
 */
class ClientsDAO {
    constructor(con) {
        this._con = con;
    }

    listClients(callback) {
        var sql = 'SELECT idClie, cpfClie, emailClie, nomeClie, DATE_FORMAT(dataNiverClie,"%d/%m/%Y") as dataNiverClie FROM CLIENTES';
        this._con.query(
            sql,
            (err,data) => {
                callback(err, data);
            }
        );
    }
}

module.exports = ClientsDAO