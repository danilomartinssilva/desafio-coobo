import { Router } from 'express';
import documentRouter from './document.routes';

const routes = Router();

routes.use('/documents', documentRouter);

export default routes;
