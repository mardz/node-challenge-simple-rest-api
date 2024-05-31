# Node challenge: Pet Adoption RESTful API
Este repositorio pretende ser una plantilla rápida para ayudar a practicar conceptos sobre APIs con NodeJS.

## Requerimientos funcionales
Un Refugio de Animales local que quiere crear un sitio web para facilitar la adopción de mascotas. El proyecto en general busca crear una plataforma que conecte a los posibles adoptantes con las mascotas disponibles para adopción.
La plataforma debería permitir a los usuarios administradores ver, gestionar perfiles de mascotas, revisar solicitudes de adopción abiertas y aprobar/rechazarlas, mientras que en el lado público de la API debe permitir a los usuarios ver las mascotas disponibles para adoptar, así como enviar solicitudes de adopción. No es un requisito crear usuarios.

La primera versión de la API (v1) se busca tener la siguiente funcionalidad:
* Operaciones CRUD sobre los perfiles de mascotas
    * GET /v1/pets?species=:value&breed=:value&lifeStage=:value
    * GET /v1/pets/:id
    * POST /v1/pets
    * PUT /v1/pets
    * DELETE /v1/pets
* Enviar solicitud de adopción
    * POST /v1/adoptions
* Seguimiento del estado de solicitudes de adopción buscando por email
    * GET /v1/adoptions?email=:value
* Lista de solicitudes de adopción filtrable por status
    * POST /v1/adoptions?status=:value
* Resolver status de petición de adopción
    * POST /v1/adoptions/:id/resolve

### Especificaciones generales
Cada perfil de mascota debe incluir la siguiente información:
* ID único de mascota
* Nombre de mascota
* Especies (p. ej., "Dog" para perro, "Cat" para gato) 
* Raza (p. ej., dependiendo de la especie, "Labrador Retriever" para perro, "Persian" para gato, etcétera )
* Fecha Nacimiento
* Fecha Adopcion (solo si ya fue adoptado)
* Género ("Male" para macho, "Female" para hembra)
* Descripción 
* Imagen (formato URL, asume que la imagen estaría previamente guardada en un servicio externo)
* Estado de adopción ("Available" o disponible, "Pending" o pendiente, "Adopted" o adoptado)

Las solicitudes de adopción deben contener la siguiente informacion:
* Nombre de solicitante
* Email de solicitante
* Telefono de solicitante
* Mascota que quiere adoptar
* Notas donde pueda explicar razones por que se aceptó o rechazó la petición de adopción (llenadas por usuarios administradores)
* Estado de solicitud de adopción (p. ej. "Received", "In Review", "Accepted", "Rejected")

#### Reglas adicionales a considerar
* Ver lista de mascotas disponibles para adoptar
    * Permitir filtros por especie, raza, género, edad/lifeStage (puppy < 1 año, adult 1 a 7 años, senior > 7 años)
* Ver detalle de mascota
* Crear una solicitud de adopción para mascotas específicas
* Solo permitir 1 solicitud de adopción activa por mascota

#### Proceso de Adopción:
Cuando un usuario envía una solicitud de adopción, actualice el estado de adopción de la mascota a "Pending" para que no se muestre hasta no resolver su situación.
Permita que los administradores revisen y aprueben/rechacen solicitudes de adopción, actualizando el estado de la mascota en consecuencia. 

### Ideas de funciones adicionales (opcional):
* Permitir registro de usuarios visitantes:
    * Permita a los usuarios marcar sus mascotas favoritas.
    * Vista de perfil de usuario con un historial de solicitudes enviadas y mascotas adoptadas.
* Puedes crear una página web con React o Angular para demostrar el funcionamiento de tu API.
* Enviar correo electrónico confirmando que se ha creado la solicitud de adopción.

## Requisitos técnicos:
* Utilice TypeScript para el desarrollo del lado del servidor.
* Implemente Express.js para crear la API RESTful.
* Utilice SQLite u otra base de datos adecuada para almacenar datos de mascotas y usuarios.
* Aplique un manejo y validación de errores adecuados en toda la aplicación.
* Incluya pruebas unitarias para funciones y componentes críticos utilizando un marco de prueba (por ejemplo, Jest).
* Incluye seeds

## Documentación esperada
* Incluya instrucciones claras para los puntos finales de API y las estructuras de datos.
* Documente cualquier característica o funcionalidad adicional implementada.

## Envío
Envíe su proyecto como un repositorio de GitHub a tu tutor, incluyendo un archivo README.md claro que explique su proyecto, sus características y cómo ejecutarlo.

De preferencia incluir colección de postman para facilitar la revisión.

## Criterios a evaluar
* Funcionalidad: ¿La aplicación cumple con los requisitos especificados?
* Calidad del código: ¿el código está bien estructurado, es legible y cumple con las mejores prácticas?
* Pruebas: ¿Existen pruebas unitarias para componentes críticos y pasan todas al 100%?
* Documentación: ¿Está el proyecto bien documentado y proporciona instrucciones claras para su configuración y uso?
 
# Pre-requisitos de ambiente
1. Instalar NVM.
    - [Windows](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)
2. Instalar Node JS (LTS al momento v20.11.0) and set it as default
    ```
    nvm install 20.11.0
    nvm alias default 20.11.0
    ```
3. Instalar yarn globalmente para manejo de dependencias `npm install yarn -g`
4. Hacer un fork de este repositorio y descargarlo localmente
5. Entrar al directorio raíz del repositorio y correr el comando `yarn install` para descargar las dependencias iniciales
6. Despues de instalar el proyecto puedes correr el comando `yarn run db:seed` para configurar la base de datos
7. Correr el proyecto `yarn run dev`
8. Correr unit tests `yarn run test`

## Recursos de utilidad
* Repositorios Boilerplate donde se baso este ejercicio
    * https://github.com/mwolfhoffman/node-jwt-sqlite-typescript-starter
    * https://github.com/Chensokheng/rest-api/tree/master
* [Introducción a NodeJS](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs) 
* [Ethereal Email](https://ethereal.email/): Servicio SMTP falso para simular envío de email 
    * [Using nodemailer with ethereal example](https://dev.to/berviantoleo/email-testing-using-ethereal-inb)
* [Manual oficial Typescript](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
## Fuente de informacion semilla usada en este repo
* [Dog breeds](https://github.com/jfairbank/programming-elm.com/blob/master/dog-breeds.json)
* [Cat breeds](https://github.com/jfairbank/programming-elm.com/blob/master/cat-breeds.json)
