const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Base de datos en memoria
let tareas = [
  { id: 1, texto: "Aprender Node.js", completada: false, fecha: "2025-08-25" },
  { id: 2, texto: "Subir app a AWS", completada: true, fecha: "2025-08-26" }
];

// Obtener todas las tareas
app.get("/tareas", (req, res) => {
  res.json(tareas);
});

// Crear nueva tarea
app.post("/tareas", (req, res) => {
  const { texto, fecha } = req.body;
  const nueva = { 
    id: Date.now(), 
    texto, 
    completada: false, 
    fecha: fecha || new Date().toISOString().split("T")[0] // formato YYYY-MM-DD
  };
  tareas.push(nueva);
  res.json(nueva);
});

// Modificar tarea
app.put("/tareas/:id", (req, res) => {
  const { id } = req.params;
  const { texto, completada, fecha } = req.body;
  tareas = tareas.map(t =>
    t.id == id ? { 
      ...t, 
      texto: texto ?? t.texto, 
      completada: completada ?? t.completada, 
      fecha: fecha ?? t.fecha 
    } : t
  );
  res.json({ success: true });
});

// Eliminar tarea
app.delete("/tareas/:id", (req, res) => {
  const { id } = req.params;
  tareas = tareas.filter(t => t.id != id);
  res.json({ success: true });
});

// Arrancar servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
