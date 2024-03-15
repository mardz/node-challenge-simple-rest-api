import request from "supertest";
import app from "../../app";
import testDatabase from "../../config/test.database.config";
import { PetRecord, IPet } from "./pet.model";

beforeAll(async () => {
  await testDatabase.sync({ force: true }); // Reset the database before each test run
  const seed: IPet[] = [
    {
      name: "Bella",
      species: "Dog",
      gender: "Female",
      breed: "Labrador",
      dateOfBirth: new Date("2015-04-23"),
      dateOfAdoption: new Date("2023-08-15"),
      description: "Friendly and playful",
      profileImg: "img1.jpg",
      adoptionStatus: "Available",
    },
  ];
  await PetRecord.bulkCreate(seed);
});

afterAll(async () => {
  await testDatabase.close(); // Close the database connection after all tests
});

describe("Pet API", () => {
  describe("POST /v1/pets", () => {
    it("should create a new pet", async () => {
      const petData = {
        name: "Bella",
        species: "Dog",
        gender: "Female",
        breed: "Labrador",
        dateOfBirth: "2018-11-03",
        dateOfAdoption: "2021-07-10",
        description: "Loyal and gentle",
        profileImg: "bella.jpg",
        adoptionStatus: "Adopted",
      };

      const response = await request(app).post("/v1/pets").send(petData);

      expect(response.status).toBe(200);
      expect(response.body.name).toBe(petData.name);
      expect(response.body.breed).toBe(petData.breed);
      expect(response.body.gender).toBe(petData.gender);
      expect(response.body.dateOfAdoption).toBe(petData.dateOfAdoption);
      expect(response.body.adoptionStatus).toBe(petData.adoptionStatus);
    });
  });

  // Add more tests for other endpoints and scenarios
});
