const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();

app.use(cors());
app.use(express.json());

// Rota de cadastro
app.post('/api/usuarios', (req, res) => {
  const { nome, email, senha } = req.body;
  db.query(
    'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
    [nome, email, senha],
    (err, result) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.status(201).json({ id: result.insertId });
    }
  );
});

app.listen(3001, () => {
  console.log('🚀 Servidor rodando em http://localhost:3001');
});
