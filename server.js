const hostname = '127.0.0.1';
const port = 3000;

const app = require('./src/config/custom-express');

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
