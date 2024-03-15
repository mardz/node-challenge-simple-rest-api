import express from 'express'; 
import petRoutes from './components/pets/pet.routes'

const baseRouter = express.Router();

baseRouter.use('/pets', petRoutes);
// .. add more paths as needed

// temp test http://localhost:3000/v1/test 
baseRouter.use('/', express.Router().get(
	'/test',
	(req, res) => {
        return res.status(200).json('test',);
    }
));

export default baseRouter;