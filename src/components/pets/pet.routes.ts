// src/components/pets/pet.routes.ts
import express from 'express';
import * as petController from './pet.controller';

const petRoutes = express.Router();

petRoutes.get('/', petController.getPets);
petRoutes.post('/', petController.addPet);

// Add more routes as needed
export default petRoutes;
