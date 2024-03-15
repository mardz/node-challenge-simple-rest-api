import path from 'path';
import { Sequelize } from 'sequelize';

const testDatabase = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname,'..', 'db', 'test-database.sqlite')
});

export default testDatabase;