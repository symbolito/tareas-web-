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
git clone https://github.com/symbolito/tareas-web-.git
cd tareas-web-
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
🚀 Servidor corriendo en puerto 8000
```

## Paso 4: Acceder al Frontend

1. En el navegador abre el http://localhost:8000

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
  * Puerto **8000** (para Node.js backend)
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
git clone https://github.com/symbolito/tareas-web-.git
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
http://IP_PUBLICA_EC2:8000/tareas
```

---

## 🌐 Paso 6: Acceder desde tu Navegador

En tu PC, abre el `index.html` y edita la línea del **API**:

```javascript
const API = "http://IP_PUBLICA_EC2:8000/tareas";
```

Guarda y abre `index.html` en tu navegador.

---

## 🛡️ Configuración del Security Group

Asegúrate de que tu Security Group tenga estas reglas:

| Tipo              | Puerto | Origen    | Descripción       |
| ----------------- | ------ | --------- | ----------------- |
| SSH               | 22     | Tu IP     | Acceso SSH        |
| TCP Personalizado | 8000   | 0.0.0.0/0 | Acceso al backend |

---

## ⚠️ Notas Importantes

⚠️ Errores comunes y cómo solucionarlos
1. Error: Cannot find module 'express'

👉 Causa: No se instalaron las dependencias.
✅ Solución: Ejecuta:
```bash
npm install

```

2. Error: Cannot GET /

👉 Causa: Estás intentando abrir la raíz del servidor (/), pero el backend solo responde en /tareas.
✅ Solución: Usa la ruta correcta en el frontend (http://<IP>:8000/tareas).

3. El navegador no carga el frontend

👉 Causa: Estás abriendo la IP pública de AWS pero el puerto no está abierto en Security Groups.
✅ Solución:

Ve a la consola de AWS EC2 → Security Groups → abre el puerto 8000 .

Vuelve a probar http://<tu-ip>:8000.



4. Cambios en el código no se ven reflejados

👉 Causa: El servidor no se reinicia automáticamente.
✅ Solución: Actualiza los cambios de github

```bash
git pull origin main
node back.js
```


⚙️ GitHub Actions (CI/CD)

Este proyecto usa GitHub Actions para validar el código automáticamente cada vez que se hace un push o pull request a la rama main.

El workflow está definido en .github/workflows/main.yml

Actualmente valida la sintaxis de back.js usando el comando:

node --check back.js

✅ Beneficios del Workflow

Detectar errores de sintaxis antes de integrar cambios.

Automatizar verificaciones en cada cambio de código.

Asegurar mayor estabilidad en el proyecto.

📊 Estado del Workflow

👉 Solo cambia TU_USUARIO por tu nombre de usuario en GitHub para que el badge muestre si el workflow está pasando o fallando.


Creacion de Docker

 📝 Aplicación de Tareas con Node.js + Docker

Aplicación sencilla de lista de tareas (To-Do App) construida con **Node.js**, **Express** y desplegada en un contenedor **Docker**.  
Permite **crear, listar, actualizar y eliminar tareas**, además de servir un frontend simple en `front.html`.
2. Requisitos previos
markdown
Copiar código
## 🚀 Requisitos

- Tener instalado [Docker](https://www.docker.com/) en tu máquina
- Node.js (opcional, si deseas correr la app sin Docker)
  
3. Estructura del proyecto
markdown
Copiar código
## 📂 Estructura del proyecto

Aplicacion de tareas/
│── Dockerfile
│── package.json
│── back.js
│── front.html

4. Ejecutar con Docker

## 🐳 Ejecutar con Docker

1. Clonar este repositorio:
   ```bash
   git clone https://github.com/usuario/aplicacion-tareas.git
   cd aplicacion-tareas
Construir la imagen:

```bash
Copiar código
docker build -t aplicacion-tareas .
```
Ejecutar el contenedor:
```
docker run -p 8000:8000 aplicacion-tareas
```
Abrir en el navegador:

```
http://localhost:8000
```
