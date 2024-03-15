import { DataTypes, Model } from 'sequelize';
import database from '../../config/database.config'

// Custom types
export type PetSpecies = 'Dog'| 'Cat';
export type PetGender = 'Male'| 'Female';
export type PetAdoptionStatus = "Available" | "Pending" | "Adopted"

// Interface
export interface IPet {
  id?: number;
  name: string;
  species: PetSpecies;
  gender: PetGender;
  breed: string;
  dateOfBirth: Date;
  dateOfAdoption?: Date | null; // Assuming dateOfAdoption can be null
  description?: string | null; // Assuming description can be null
  profileImg?: string | null; // Assuming profileImg can be null
  adoptionStatus: PetAdoptionStatus;
}

// Pet DB model
export class PetRecord extends Model<IPet> implements IPet {
  declare id: number;
  declare name: string;
  declare species: PetSpecies;
  declare gender: PetGender;
  declare breed: string;
  declare dateOfBirth: Date;
  declare dateOfAdoption: Date;
  declare description: string;
  declare profileImg: string;
  declare adoptionStatus: PetAdoptionStatus;
}

PetRecord.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  species: {
    type: DataTypes.STRING,
    allowNull: false
  },
  breed: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  dateOfAdoption: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  profileImg: {
    type: DataTypes.STRING,
    allowNull: true
  },
  adoptionStatus: {
    type: DataTypes.STRING,
    defaultValue: 'Available'
  }
}, {
  sequelize: database,
  modelName: 'Pet'
});
