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

* Los datos se guardan en **memoria**, se borran al reiniciar el servidor.
* Si detienes/inicias la instancia EC2, cambia la **IP pública**.
* Solo HTTP, no HTTPS. No recomendado para producción.

---

👨‍💻 Desarrollado como ejemplo educativo de integración **Node.js + Frontend + AWS**.

```

---

¿Quieres que también te agregue una **versión persistente con base de datos (ej. SQLite o MongoDB)** para que en AWS no se borren las tareas al reiniciar?
```
