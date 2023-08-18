import { Router } from 'express';
import { getCredentials } from '../Controllers/login.Controllers.js';
import { validateLogin } from '../Middlewares/validator.Middlewares.js';
// import all controllers
// import SessionController from './app/controllers/SessionController';

const loginRoutes = new Router();

// Add routes
loginRoutes.post('/', validateLogin, getCredentials);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

export default loginRoutes;