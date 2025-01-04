# JSONPlaceholder API Automated Tests

## 📚 Descripción del Proyecto

Este proyecto tiene como objetivo automatizar las pruebas de la API pública de [JSONPlaceholder](https://jsonplaceholder.typicode.com/), que se utiliza ampliamente para probar REST APIs. El propósito es demostrar habilidades de automatización de pruebas usando **Node.js**, **Jest** y **Axios**, cumpliendo con los requisitos específicos de una prueba técnica.

### 🎯 Razón de Ser

El proyecto busca validar los principales métodos REST (`GET`, `POST`, `PUT`, `DELETE`) en la API de JSONPlaceholder. Cada prueba está diseñada para evaluar diferentes aspectos de las operaciones CRUD (Create, Read, Update, Delete), cumpliendo con los siguientes objetivos:

1. **GET /posts**: Validar que la lista de publicaciones se recupere correctamente.
2. **POST /posts**: Validar que un nuevo post pueda crearse exitosamente.
3. **PUT /posts/{id}**: Validar que un post existente pueda actualizarse.
4. **DELETE /posts/{id}**: Validar que un post pueda eliminarse (aunque JSONPlaceholder no elimina realmente los datos).

Este proyecto cumple con los requerimientos de la prueba al:

- Realizar validaciones exhaustivas de códigos de estado HTTP y estructuras de datos.
- Incluir logs detallados para rastrear cada paso de las pruebas.
- Automatizar las pruebas usando un enfoque claro y reproducible.

---

## 📋 Requisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** v14 o superior
- **npm** (se incluye con Node.js)

---

⚙️ Tecnologías Utilizadas
Node.js: Entorno de ejecución para JavaScript.
Jest: Framework de pruebas para JavaScript.
Axios: Cliente HTTP para enviar solicitudes a la API.

## 🛠️ Instalación

1. **Clona este repositorio**:
   ```bash
   git clone https://github.com/amarismariano/backend-tests.git
   cd backend-tests-mariano
   ```


2. Instala las dependencias:
npm install

3. Corre las pruebas:
npm test

