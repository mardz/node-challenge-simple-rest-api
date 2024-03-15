
import {PetRecord} from './pet.model';

//https://sequelize.org/docs/v6/core-concepts/model-querying-basics/

export const addPet = async (petData: any) => {
    const pet = await PetRecord.create(petData);
    return pet;
};

export const getPets = async () => {
    const pets = await PetRecord.findAll();
    return pets;
};


// Add more service functions as needed