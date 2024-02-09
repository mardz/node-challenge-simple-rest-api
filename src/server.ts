import dotenv from 'dotenv';
dotenv.config({ path: __dirname+'/config/.env' });

import db from './config/database.config';
import app from './app';

db.sync().then(() => {
	console.log('connect to db');
    // TODO seeds for default catalogs 
});

const port = process.env.PORT;

app.listen(port, () => {
	console.log('server is running on port ' + port);
});