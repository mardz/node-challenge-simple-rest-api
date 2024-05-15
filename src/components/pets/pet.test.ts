import request from "supertest";
import app from "../../app";
import testDatabase from "../../config/test.database.config";
import { PetRecord, IPet } from "./pet.model";

beforeAll(async () => {
  await testDatabase.sync({ force: true }); // Reset the database before each test run
  const seed: IPet[] = [
    {
      id: 1,
      name: "Bella",
      species: "Dog",
      gender: "Female",
      breed: "Labrador",
      dateOfBirth: new Date("2015-04-23"),
      dateOfAdoption: null,
      description: "Friendly and playful",
      profileImg: "img1.jpg",
      adoptionStatus: "Available",
    },
    {
      id: 2,
      name: "Milo",
      species: "Cat",
      gender: "Male",
      breed: "Siamese",
      dateOfBirth: new Date("2015-04-23"),
      dateOfAdoption: new Date("2023-08-15"),
      description: "Curious and lazy",
      profileImg: "img2.jpg",
      adoptionStatus: "Adopted",
    },
  ];
  await PetRecord.bulkCreate(seed);
});

afterAll(async () => {
  await testDatabase.close(); // Close the database connection after all tests
});

describe("Pet API", () => {
  describe("GET /v1/pets", () => {
    it("should return all available pets", async () => {
      const response = await request(app).get("/v1/pets");

      expect(response.status).toBe(200);
      expect(response.body.length).toEqual(1);
      expect(response.body[0].name).toBe("Bella");
    });
  });

  describe("GET /v1/pets/:id", () => {
    it("should return a pet by ID", async () => {
      const response = await request(app).get(`/v1/pets/1`);

      expect(response.status).toBe(200);
      expect(response.body.name).toBe("Bella");
    });

    it("should return 404 if pet not found", async () => {
      const response = await request(app).get("/v1/pets/999");

      expect(response.status).toBe(404);
    });
  });

  describe("POST /v1/pets", () => {
    it("should create a new pet", async () => {
      const petData = {
        name: "Spark",
        species: "Dog",
        gender: "Male",
        breed: "German Shepherd",
        dateOfBirth: "2018-11-03",
        dateOfAdoption: "2021-07-10",
        description: "Loyal and calm",
        profileImg: "spark.jpg",
        adoptionStatus: "Available",
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

  describe("PUT /v1/pets/:id", () => {
    it("should update an existing pet", async () => {
      const updatedPetData = {
        name: "Bella",
        species: "Dog",
        gender: "Female",
        breed: "Labrador",
        dateOfBirth: "2015-04-23",
        dateOfAdoption: "2023-08-15",
        description: "Very friendly and playful",
        profileImg: "bella_updated.jpg",
        adoptionStatus: "Available",
      };

      const response = await request(app)
        .put(`/v1/pets/1`)
        .send(updatedPetData);

      expect(response.status).toBe(200);
      expect(response.body.description).toBe(updatedPetData.description);
      expect(response.body.profileImg).toBe(updatedPetData.profileImg);
    });

    it("should return 404 if pet not found", async () => {
      const response = await request(app).put("/v1/pets/999").send({
        name: "Non-existent pet",
      });

      expect(response.status).toBe(404);
    });
  });

  describe("DELETE /v1/pets/:id", () => {
    it("should delete a pet by ID", async () => {
      const pet = await PetRecord.findOne({ where: { name: "Bella" } });
      const response = await request(app).delete(`/v1/pets/${pet!.id}`);

      expect(response.status).toBe(200);

      const deletedPet = await PetRecord.findByPk(pet!.id);
      expect(deletedPet).toBeNull();
    });

    it("should return 404 if pet not found", async () => {
      const response = await request(app).delete("/v1/pets/999");
      expect(response.status).toBe(404);
    });
  });
});
