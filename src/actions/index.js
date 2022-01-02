import express from 'express';

import { HomePage } from '../services/users';

const routes = express.Router();

routes.get('/', HomePage);

export default routes;
