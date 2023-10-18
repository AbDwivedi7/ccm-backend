import { Router as expressRouter } from 'express';
import usersRoutes from './api/homepage'
const routes = expressRouter()

// V1 Users Routes
routes.use('/v1/homepage', usersRoutes);

export default routes;