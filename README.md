# Node challenge: Pet Adoption RESTful API

## Overview

This repository is intended to be a quick template to help practice API concepts with NodeJS.

A local animal shelter wants to create a website to facilitate pet adoption. The overall project seeks to create a platform that connects potential adopters with pets available for adoption.
The platform should allow admin users to view and manage pet profiles, review, and approve or reject open adoption requests. 
The public side of the API it should allow users to view pets available for adoption as well as submit adoption requests.

## Environment Prerequisites

1. Install NVM.
	[Windows](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)
2. Install Node JS (LTS) and set it as default
    ```
    nvm install 20.11.0
    nvm alias default 20.11.0
    ```
## Build Instructions

1. Install yarn globally for dependency management.
    `npm install yarn -g`
2. Fork this repository and download it locally.
3. Go to the root directory of the repository and run this command to download the initial dependencies.
    `yarn install` 
4. After installing the project you can run this command to configure the database.
    `yarn run db:seed` 
5. Run the project.
    `yarn run dev`
6. Run unit tests
    `yarn run test`

## Instructions

### [Functional Requirements](./functional_requirements.md)
### [Business Rules](./specifications.md)

## [Technical Requirements](./technical_requirements.md)

## Testing and Validation Requisites - TBD

## Acceptance Criteria

### [Evaluation criteria](./evaluation.md)
### [Expected documentation and deliverables](./documentation.md)

## Resources

* Boilerplate repositories where this exercise was based
    * https://github.com/mwolfhoffman/node-jwt-sqlite-typescript-starter
    * https://github.com/Chensokheng/rest-api/tree/master
* [Introducción a NodeJS](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs) 
* [Ethereal Email](https://ethereal.email/): Fake SMTP service to simulate email sending.
    * [Using nodemailer with ethereal example](https://dev.to/berviantoleo/email-testing-using-ethereal-inb)
* [Manual oficial Typescript](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
### Source of seed information used in this repo
* [Dog breeds](https://github.com/jfairbank/programming-elm.com/blob/master/dog-breeds.json)
* [Cat breeds](https://github.com/jfairbank/programming-elm.com/blob/master/cat-breeds.json)
