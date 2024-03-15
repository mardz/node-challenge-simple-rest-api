import { DataTypes, Model } from 'sequelize';
import database from '../../config/database.config'

// Custom types
export type petSpecies = 'Dog'| 'Cat';
export type petGender = 'Male'| 'Female';
export type petAdoptionStatus = "Available" | "Pending" | "Adopted"

// Pet DB model
export class PetRecord extends Model {
  declare id: number;
  declare name: string;
  declare species: petSpecies;
  declare gender: petGender;
  declare breed: string;
  declare dateOfBirth: Date;
  declare dateOfAdoption: Date;
  declare description: string;
  declare profileImg: string;
  declare adoptionStatus: boolean;
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
