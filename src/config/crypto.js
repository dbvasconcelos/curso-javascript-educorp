const criptografia = require('crypto');

function criptografar(str) {
    const cipher = criptografia.createCipher('aes-256-ctr', 'abcdabcd');
    return cipher.update(str, 'utf8', 'hex');
}

function decriptografar(str) {
    const decipher = criptografia.createDecipher('aes-256-ctr', 'abcdabcd');
    return decipher.update(str, 'hex', 'utf8');
}

