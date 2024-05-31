# Node challenge: Pet Adoption RESTful API
Este repositorio pretende ser una plantilla rápida para ayudar a practicar conceptos sobre APIs con NodeJS.

Un Refugio de Animales local que quiere crear un sitio web para facilitar la adopción de mascotas. El proyecto en general busca crear una plataforma que conecte a los posibles adoptantes con las mascotas disponibles para adopción.
La plataforma debería permitir a los usuarios administradores ver, gestionar perfiles de mascotas, revisar solicitudes de adopción abiertas y aprobar/rechazarlas, mientras que en el lado público de la API debe permitir a los usuarios ver las mascotas disponibles para adoptar, así como enviar solicitudes de adopción.

## Pre-requisitos de ambiente
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

## [Requerimientos funcionales](./functional_requirements.md)
1. ### [Especificaciones generales](./specifications.md)

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

## [Criterios a evaluar](./evaluation.md)

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
