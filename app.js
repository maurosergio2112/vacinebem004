// app.js
const { Pool } = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./bancodedados/dbConfig');
const app = express();
const port = 3000;

const pool = new Pool(dbConfig);

app.use(bodyParser.json());

// Endpoint para obter todas as vacinas
app.get('/vacinas', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM vacinas');
    const vacinas = result.rows;
    client.release();
    res.json(vacinas);
  } catch (err) {
    console.error('Erro ao buscar vacinas', err);
    res.status(500).send('Erro ao buscar vacinas');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
