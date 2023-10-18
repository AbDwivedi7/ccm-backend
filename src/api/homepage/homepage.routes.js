import { Router as expressRouter } from 'express';
import homepageHandlers  from './homepage.handlers'

const usersRoutes = expressRouter();

usersRoutes.get('/hello', homepageHandlers.hello);

export default usersRoutes