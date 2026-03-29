# Habit Tracker - Backend (Semana 1)

## 📌 Descripción
Aplicación backend desarrollada con Express.js y MongoDB Atlas para la gestión de hábitos.  
Permite crear, consultar, actualizar y eliminar hábitos.

## 🚀 Tecnologías utilizadas
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Dotenv
- CORS

## 📂 Estructura del proyecto
models/
routes/
server.js
package.json
README.md

## ⚙️ Instalación y ejecución

1. Clonar el repositorio:

git clone URL_DEL_REPOSITORIO

2. Entrar a la carpeta del proyecto:

cd Habit-tracker-w1

3. Instalar dependencias:

npm install

4. Crear archivo `.env` en la raíz del proyecto con el siguiente contenido:

MONGO_URI=tu_cadena_de_mongodb_atlas
PORT=5000

5. Ejecutar el servidor:

node server.js

El servidor correrá en:
http://localhost:5000

## 📡 Endpoints disponibles

### Crear hábito
POST /api/habits

### Obtener hábitos
GET /api/habits

### Actualizar hábito
PUT /api/habits/:id

### Eliminar hábito
DELETE /api/habits/:id

## 🗄 Base de datos
Base de datos alojada en MongoDB Atlas con nombre:
habitsdb