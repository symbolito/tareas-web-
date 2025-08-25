📋 Gestor de Tareas con Node.js + Frontend

Esta aplicación web permite gestionar tareas de forma sencilla con un **backend en Node.js/Express** y un **frontend en HTML, CSS y JavaScript**.  

## ✨ Funcionalidades
- ➕ **Agregar tareas** con descripción y fecha.  
- 📋 **Listar todas las tareas** en una interfaz amigable.  
- 🗑️ **Eliminar tareas** fácilmente.  
- 🔄 Comunicación en tiempo real entre frontend y backend vía API REST.  

Ideal para: proyectos académicos o práctica en integración **backend + frontend**.

---

## 📋 Requisitos Previos
- Tener **Node.js** instalado (v18+ recomendado).  
- Un editor de código (ej. **Visual Studio Code**).  
- Navegador web (Chrome, Edge, Firefox).  

---

# 🚀 Ejecución en Local

## Paso 1: Clonar el Repositorio
```bash
git clone https://github.com/tu-usuario/gestor-tareas.git
cd gestor-tareas
````

## Paso 2: Instalar Dependencias

```bash
npm install
```

## Paso 3: Ejecutar el Backend

```bash
node back.js
```

Si todo funciona bien, deberías ver:

```
🚀 Servidor corriendo en puerto 3000
```

## Paso 4: Acceder al Frontend

1. Abre el archivo `index.html` en tu navegador.
2. El frontend se conectará automáticamente al backend en `http://localhost:3000/tareas`.

## Paso 5: Detener el Servidor

En la terminal donde corre el backend, presiona:

```
Ctrl + C
```

---

# 🌐 Despliegue en AWS EC2

## 📋 Requisitos Previos

* Instancia **EC2 Ubuntu** creada y corriendo.
* **Security Group** configurado con:

  * Puerto **22** (SSH)
  * Puerto **3000** (para Node.js backend)
* Acceso SSH a la instancia.

---

## 🚀 Paso 1: Conectarse a la Instancia EC2

Opción A: **EC2 Instance Connect (Recomendado)**

1. Ve a AWS Console → EC2 → Instances.
2. Selecciona tu instancia.
3. Haz clic en **Connect** → **EC2 Instance Connect**.

Opción B: **SSH desde tu PC**

```bash
ssh -i "tu-clave.pem" ubuntu@IP_PUBLICA_EC2
```

---

## 🔧 Paso 2: Preparar el Entorno

Actualizar sistema e instalar Node.js + npm:

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install -y nodejs npm
```

Verificar instalación:

```bash
node -v
npm -v
```

---

## 📥 Paso 3: Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/gestor-tareas.git
cd gestor-tareas
```

---

## 📦 Paso 4: Instalar Dependencias

```bash
npm install
```

---

## 🚀 Paso 5: Ejecutar el Servidor

```bash
node back.js
```

El servidor correrá en:

```
http://IP_PUBLICA_EC2:3000/tareas
```

---

## 🌐 Paso 6: Acceder desde tu Navegador

En tu PC, abre el `index.html` y edita la línea del **API**:

```javascript
const API = "http://IP_PUBLICA_EC2:3000/tareas";
```

Guarda y abre `index.html` en tu navegador.

---

## 🛡️ Configuración del Security Group

Asegúrate de que tu Security Group tenga estas reglas:

| Tipo              | Puerto | Origen    | Descripción       |
| ----------------- | ------ | --------- | ----------------- |
| SSH               | 22     | Tu IP     | Acceso SSH        |
| TCP Personalizado | 3000   | 0.0.0.0/0 | Acceso al backend |

---

## ⚠️ Notas Importantes

⚠️ Errores comunes y cómo solucionarlos
1. Error: Cannot find module 'express'

👉 Causa: No se instalaron las dependencias.
✅ Solución: Ejecuta:

npm install

2. Error: listen EADDRINUSE: address already in use 3000

👉 Causa: Ya hay otro proceso usando el puerto 3000.
✅ Solución:

Busca y detén el proceso:

lsof -i :3000
kill -9 <PID>


O cambia el puerto en server.js.

3. Error: Cannot GET /

👉 Causa: Estás intentando abrir la raíz del servidor (/), pero el backend solo responde en /tareas.
✅ Solución: Usa la ruta correcta en el frontend (http://<IP>:3000/tareas).

4. El navegador no carga el frontend

👉 Causa: Estás abriendo la IP pública de AWS pero el puerto no está abierto en Security Groups.
✅ Solución:

Ve a la consola de AWS EC2 → Security Groups → abre el puerto 3000 (o el que uses).

Vuelve a probar http://<tu-ip>:3000.

5. CORS policy: No 'Access-Control-Allow-Origin' header

👉 Causa: El backend no permite peticiones desde el navegador.
✅ Solución:

Asegúrate de que server.js tenga cors() activado:

const cors = require("cors");
app.use(cors());

6. SyntaxError: Unexpected token ... in JSON

👉 Causa: Se está enviando/recibiendo un JSON malformado.
✅ Solución:

Revisa que el frontend use:

headers: { "Content-Type": "application/json" }


Y que el backend tenga:

app.use(express.json());

7. Cambios en el código no se ven reflejados

👉 Causa: El servidor no se reinicia automáticamente.
✅ Solución: Instala nodemon:

npm install -g nodemon
nodemon server.js


```

---

¿Quieres que también te agregue una **versión persistente con base de datos (ej. SQLite o MongoDB)** para que en AWS no se borren las tareas al reiniciar?
```
