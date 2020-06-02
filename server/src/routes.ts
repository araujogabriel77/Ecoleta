import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();

const pointsControllers = new PointsController();
const itemsControllers = new ItemsController();

routes.get('/items', itemsControllers.index);

routes.post('/points', pointsControllers.create);
routes.get('/points', pointsControllers.index);
routes.get('/points/:id', pointsControllers.show);

export default routes;