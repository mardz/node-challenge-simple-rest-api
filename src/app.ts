import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();


// Middlewares
app.use(express.json()); // Convert json payload into js objects for easier manipulation in code
app.use(helmet()); // Enhance http headers security
app.use(cors());// enabling CORS for all requests
app.use(morgan('combined'));// enhanced logs - TODO: add a common logger class

// Routes definition
// TODO: move to each router file as needed
// temp test http://localhost:3000/v1/test 
const router = express.Router();
router.get(
	'/test',
	(req, res) => {
        return res.json('test');
    }
);

app.use('/v1',  router);

export default app;