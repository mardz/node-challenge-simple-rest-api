
import {PetRecord} from './pet.model';

//https://sequelize.org/docs/v6/core-concepts/model-querying-basics/

export const addPet = async (petData: any) => {
    const pet = await PetRecord.create(petData);
    return pet;
};

// TODO: allow filters
export const getPets = async () => {
    const pets = await PetRecord.findAll();
    return pets;
};


// Add more service for CRUD functions as needed