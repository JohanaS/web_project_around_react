# Around React

Este proyecto es una aplicación web interactiva tipo red social que permite a los usuarios compartir imágenes de lugares, dar "me gusta" y gestionar su perfil.

Este es el **primer proyecto del bootcamp desarrollado utilizando React**, marcando la transición de JavaScript a un desarrollo basado en componentes y gestión de estado.

## Características

- **Gestión de Perfil**: Edición de nombre, descripción y avatar del usuario.
- **Gestión de Tarjetas**: Crear nuevas tarjetas con imágenes y títulos, y eliminar tarjetas propias.
- **Interacción**: Dar y quitar "me gusta" a las tarjetas.
- **Visualización**: Popup de imagen completa al hacer clic en una tarjeta.
- **Validación**: Formularios con validación integrada.

## Tecnologías Utilizadas

El proyecto fue desarrollado empleando las siguientes tecnologías y herramientas:

- **React**: Biblioteca principal para la construcción de la interfaz de usuario basada en componentes.
- **Vite**: Entorno de desarrollo rápido y herramienta de construcción.
- **JavaScript (ES6+)**: Lógica de la aplicación.
- **CSS3**: Estilizado de componentes (siguiendo metodología BEM adaptada a React).
- **Context API**: Para la gestión del estado global (usuario actual).
- **API Rest**: Comunicación con el servidor para persistencia de datos (tarjetas, usuario).

## Instalación y Ejecución

Para correr este proyecto localmente:

1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre tu navegador en la dirección que muestra la terminal (usualmente `http://localhost:5173`).
