import path from 'path';
import { Sequelize } from 'sequelize';

const database = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname,'..', 'db', 'database.sqlite')
});

export default database;