// src/components/pets/pet.controller.ts
import { Request, Response } from 'express';
import * as petService from './pet.service';

export const getPets = async (req: Request, res: Response) => {
    const pets = await petService.getPets();
    console.log(pets)
    res.status(200).json(pets);
};

export const addPet = async (req: Request, res: Response) => {
  try {
    const pet = await petService.addPet(req.body);
    res.status(200).json(pet);
  } catch (e: any) {
    res.status(400).json({ message: e.message });
  }
};

// Add more controller functions as needed
