# Node challenge: Pet Adoption RESTful API
Este repositorio pretende ser una plantilla rápida para ayudar a practicar conceptos sobre APIs con NodeJS.

## Requerimientos funcionales
Un Refugio de Animales local que quiere crear un sitio web para facilitar la adopción de mascotas. El proyecto en general busca crear una plataforma que conecte a los posibles adoptantes con las mascotas disponibles para adopción.
La plataforma debería permitir a los usuarios administradores ver, gestionar perfiles de mascotas, revisar solicitudes de adopción abiertas y aprobar/rechazarlas, mientras que en el lado publico del API debe permitir a los usuarios ver las mascodas disponibles para adoptar, así como enviar solicitudes de adopción.

La primera version del API (v1) se busca tener la siguiente funcionalidad:
* Operaciones CRUD sobre los perfiles de mascotas,
* Gestionar solicitudes y aprobaciones de adopción.
* Seguimiento del estado de adopción de cada mascota.

### Especificaciones generales
Cada perfil de mascota debe incluir la siguiente información:
* ID unico de mascota
* Nombre de mascota
* Especies (p. ej., "Dog" para perro, "Cat" para gato) 
* Raza (p. ej., dependiendo de la especie, "Labrador Retriever" para perro, "Persian" para gato, etcétera )
* Fecha Nacimiento
* Fecha Adopcion (solo si ya fue adoptado)
* Género ("Male" para macho, "Female" para hembra)
* Descripción 
* Imagen (formato URL, asume que la imagen estaria previamente guardada en un servicio externo)
* Estado de adopción ("Available" o disponible, "Pending" o pendiente, "Adopted" o adoptado)

Las solicitudes de adopcion deben contener la siguiente informacion:
* Nombre de solicitante
* Email de solicitante
* Telefono de solicitante
* Mascota que quiere adoptar
* Notas donde pueda explicar razones por que se aceptó o rechazó la peticion de adopcion (llenadas por usuarios administradores)
* Estado de solicitud de adopción (p. ej. "Received", "In Review", "Accepted", "Rejected")

#### Interacción del usuario:
**Usuarios Administradores**
* Implementar operaciones CRUD para la gestión de perfiles de mascotas.
    * Los usuarios deberían poder ver una lista de mascotas disponibles con detalles básicos.
    * Permita que los usuarios vean información detallada de cada mascota por Id
    * Editar informacion de una mascota
    * Borrar una mascota
* Revisar solicitudes de adopcion y cambiar estatus de las mismas.

**Usuarios externos**
* Ver lista de mascotas disponibles para adoptar
* Ver detalle de mascota
* Crear una solicitud de adopción para mascotas específicas
* Recibir un email cuando el status de la solicitud cambie

#### Proceso de Adopción:
Cuando un usuario envía una solicitud de adopción, actualice el estado de adopción de la mascota a "Pending" para que no se muestre hasta no resolver su situacion.
Permita que los administradores revisen y aprueben/rechacen solicitudes de adopción, actualizando el estado de la mascota en consecuencia. 

### Ideas de funciones adicionales (opcional):
* Implemente la función de búsqueda y filtrado para ayudar a los usuarios a encontrar mascotas según criterios (por ejemplo, especie, edad).
* Permitir registro de usuarios visitantes:
    * Permita a los usuarios marcar sus mascotas favoritas.
    * Vista de perfil de usuario con un historial de solicitudes enviadas y mascotas adoptadas.
* Puedes crear una pagina web con React o angular para demostrar el funcionamiento de tu API.

## Requisitos técnicos:
* Utilice TypeScript para el desarrollo del lado del servidor.
* Implemente Express.js para crear la API RESTful.
* Utilice SQLite u otra base de datos adecuada para almacenar datos de mascotas y usuarios.
* Aplique un manejo y validación de errores adecuados en toda la aplicación.
* Incluya pruebas unitarias para funciones y componentes críticos utilizando un marco de prueba (por ejemplo, Jest).

## Documentación esperada
* Incluya instrucciones claras para los puntos finales de API y las estructuras de datos.
* Documente cualquier característica o funcionalidad adicional implementada.

## Envío
Envíe su proyecto como un repositorio de GitHub a tu tutor, incluyendo un archivo README.md claro que explique su proyecto, sus características y cómo ejecutarlo.

## Criterios a evaluar
* Funcionalidad: ¿La aplicación cumple con los requisitos especificados?
* Calidad del código: ¿el código está bien estructurado, es legible y cumple con las mejores prácticas?
* Pruebas: ¿Existen pruebas unitarias para componentes críticos y pasan todas al 100%?
* Documentación: ¿Está el proyecto bien documentado y proporciona instrucciones claras para su configuración y uso?
 
# Pre-requisitos de ambiente
1. Instalar NVM
2. Instalar Node JS (LTS al momento v20.11.0) and set it as default
    ```
    nvm install 20.11.0
    nvm alias default 20.11.0
    ```
3. Instalar yarn globalmente para manejo de dependencias `npm install yarn -g`
4. Hacer un fork de este repositorio y descargarlo localmente
5. Entrar al directorio raíz del repositorio y correr el comando `yarn install` para descargar las dependencias iniciales
6. Correr el proyecto `yarn run dev`
7. Correr unit tests `yarn run test`

## Recursos de utilidad
* Repositorios Boilerplate donde se baso este ejercicio
    * https://github.com/mwolfhoffman/node-jwt-sqlite-typescript-starter
    * https://github.com/Chensokheng/rest-api/tree/master
* [Introducción a NodeJS](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs): 
* [Ethereal Email](https://ethereal.email/): Servicio SMTP falso para simular envio de email 
    * [Using nodemailer with ethereal example](https://dev.to/berviantoleo/email-testing-using-ethereal-inb)
* [Manual oficial Typescript](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
## Fuente de informacion semilla usada en este repo
* [Dog breeds](https://github.com/jfairbank/programming-elm.com/blob/master/dog-breeds.json)
* [Cat breeds](https://github.com/jfairbank/programming-elm.com/blob/master/cat-breeds.json)

__________
***TODO***
* seed data DB local
* linter, husky pre-commits hooks
* full example of folder structure by component 
/src
    /config
    /pet
        pet.controller.ts
        pet.route.ts
        pet.service.ts
        pet.model.ts
        pet.spec.ts
    /user
        ...
    /commons
        ... any common code
    server.ts