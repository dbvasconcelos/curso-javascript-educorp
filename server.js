const app = require('./src/config/custom-express');

const host = '127.0.0.1';
const porta = 3000;

app.listen(porta, host, () => {
  console.log('Servidor rodando em http://' + host + ':' + porta + '/');
});
