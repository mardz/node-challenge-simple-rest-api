import fs from 'fs';
import { PetRecord } from './../components/pets/pet.model';
import database from './database.config';
import path from 'path';

const seedData = async () => {
  await database.sync({ force: true }); // Reset the database
  const data = fs.readFileSync(path.join(__dirname, 'seeds', 'pets.json'), 'utf8');
  const petSeeds = JSON.parse(data);
  await PetRecord.bulkCreate(petSeeds);
  const items = await PetRecord.findAll();
  console.log('Pets created: ', items.length)
  console.log('Database seeded!');
};

seedData()
  .then(() => {
    console.log('Seeding completed successfully.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error seeding the database:', error);
    process.exit(1);
  });
