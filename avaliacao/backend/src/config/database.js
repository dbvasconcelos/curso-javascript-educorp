const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('data.db');
const criptografia = require('./encryption');

const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE, 
    senha TEXT NOT NULL,
    administrador INTEGER DEFAULT 0
)`;

const LABORATORIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS laboratorios (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    nome TEXT NOT NULL
)`;

const RESERVAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS reservas (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    data TEXT NOT NULL,
    inicio TEXT NOT NULL,
    fim TEXT NOT NULL,
    razao TEXT NOT NULL,
    usuario_id INTEGER NOT NULL,
    laboratorio_id INTEGER NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (laboratorio_id) REFERENCES laboratorios(id) ON DELETE CASCADE
)`;

const INSERCAO_ADMIN = `
INSERT INTO usuarios (
    nome,
    email,
    senha,
    administrador
) SELECT 'Administrador', 'admin@cursojs.educorp', '${criptografia.criptografa('admin')}', 1 WHERE NOT EXISTS (
    SELECT * FROM usuarios WHERE email = 'admin@cursojs.educorp'
)`;

const INSERCAO_USUARIO = `
INSERT INTO usuarios (
    nome,
    email,
    senha,
    administrador
) SELECT 'Usuário', 'usuario@cursojs.educorp', '${criptografia.criptografa('usuario')}', 0 WHERE NOT EXISTS (
    SELECT * FROM usuarios WHERE email = 'usuario@cursojs.educorp'
)`;

const INSERCAO_LAB1 = `
INSERT INTO laboratorios (
    nome
) SELECT 'LAB1' WHERE NOT EXISTS (
    SELECT * FROM laboratorios WHERE nome = 'LAB1'
)`;

const INSERCAO_LAB2 = `
INSERT INTO laboratorios (
    nome
) SELECT 'LAB2' WHERE NOT EXISTS (
    SELECT * FROM laboratorios WHERE nome = 'LAB2'
)`;

bd.serialize(() => {
    bd.run(`PRAGMA foreign_keys=ON`);
    bd.run(USUARIOS_SCHEMA);
    bd.run(LABORATORIOS_SCHEMA);
    bd.run(RESERVAS_SCHEMA);
    bd.run(INSERCAO_ADMIN);
    bd.run(INSERCAO_USUARIO);
    bd.run(INSERCAO_LAB1);
    bd.run(INSERCAO_LAB2);
});

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('Banco de dados desconectado');
        process.exit(0);
    })
);

module.exports = bd;