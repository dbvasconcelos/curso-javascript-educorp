const crypto = require('crypto');

const algoritimo = 'aes-256-ctr';
const chave = 'curso-javascript-educorp-encrypt';
const encoding = 'utf8';
const digest = 'hex';

function criptografa(str) {
    let cipher = crypto.createCipher(algoritimo, chave);
    let criptografado = cipher.update(str, encoding, digest);
    return criptografado + cipher.final(digest);
}

function decriptografa(str) {
    let decipher = crypto.createDecipher(algoritimo, chave);
    let decriptografado = decipher.update(str, digest, encoding);
    return decriptografado + decipher.final(encoding);
}

module.exports = {criptografa, decriptografa}

