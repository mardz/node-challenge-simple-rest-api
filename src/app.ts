import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import baseRouter from './routes';

const app = express();

// Middlewares
app.use(express.json()); // Convert json payload into js objects for easier manipulation in code
app.use(helmet()); // Enhance http headers security
app.use(cors());// enabling CORS for all requests
app.use(morgan('combined'));// enhanced logs - TODO: add a common logger class

// Routes definition
app.use('/v1',  baseRouter);

export default app;