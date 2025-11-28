require('dotenv').config();
const express = require("express");
const cors = require("cors");
const { Pool } = require('pg');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public3')));

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  }
});


// Crear tabla
pool.query(`
  CREATE TABLE IF NOT EXISTS tareas (
    id SERIAL PRIMARY KEY,
    texto VARCHAR(255) NOT NULL,
    fecha DATE NOT NULL,
    completada BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT NOW()
  )
`).then(() => console.log('✅ Tabla creada'));

// GET
app.get("/tareas", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tareas ORDER BY created_at DESC");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error' });
  }
});

// POST
app.post("/tareas", async (req, res) => {
  try {
    const { texto, fecha } = req.body;
    const result = await pool.query(
      "INSERT INTO tareas (texto, fecha) VALUES ($1, $2) RETURNING *",
      [texto, fecha]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error' });
  }
});

// PUT
app.put("/tareas/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { texto, completada, fecha } = req.body;
    if (texto !== undefined || fecha !== undefined) {
      await pool.query("UPDATE tareas SET texto = COALESCE($1, texto), fecha = COALESCE($2, fecha) WHERE id = $3", [texto, fecha, id]);
    }
    if (completada !== undefined) {
      await pool.query("UPDATE tareas SET completada = $1 WHERE id = $2", [completada, id]);
    }
    const result = await pool.query("SELECT * FROM tareas WHERE id = $1", [id]);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error' });
  }
});

// DELETE
app.delete("/tareas/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM tareas WHERE id = $1", [id]);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error' });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public3', 'front.html'));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 http://localhost:${PORT}`);
});


