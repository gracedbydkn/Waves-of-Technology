const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // <- usuário do seu MySQL
  password: '1977Mary@',        // <- coloque sua senha aqui, ou deixe em branco se não tiver
  database: 'projeto_sustentavel'  // <- esse banco precisa já estar criado no MySQL
});
