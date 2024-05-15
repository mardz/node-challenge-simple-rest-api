import request from "supertest";
import app from "../../app";
import testDatabase from "../../config/test.database.config";
import { AdoptionRecord, IAdoption } from "./adoption.model";

beforeAll(async () => {
  await testDatabase.sync({ force: true }); // Reset the database before each test run
  const seed: IAdoption[] = [
    {
     // TODO:
    },
  ];
  await AdoptionRecord.bulkCreate(seed);
});

afterAll(async () => {
  await testDatabase.close(); // Close the database connection after all tests
});

// TODO
