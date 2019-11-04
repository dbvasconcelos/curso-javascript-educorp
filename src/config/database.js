const mysql = require('mysql');

const host = 'localhost';
const usuario = 'root';
const senha = '';
const schema = 'turma5';

const db = mysql.createConnection({
    host: host,
    user: usuario,
    password: senha,
    database: schema
});

db.connect((erro) => {
    if (erro) {
        console.log('Erro conectando ao banco de dados');
    } else {
        console.log('MySQL conectado')
    }
});

module.exports = db;