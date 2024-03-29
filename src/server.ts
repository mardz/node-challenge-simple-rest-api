import dotenv from 'dotenv';
dotenv.config({ path: __dirname+'/config/.env' });

import database from './config/database.config';
import app from './app';

database.sync().then(() => {
	console.log('connect to db');
});

const port = process.env.PORT;

app.listen(port, () => {
	console.log('server is running on port ' + port);
});