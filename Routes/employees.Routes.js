import { Router } from 'express';
import { addUser, delUser, getUser, updateUser } from '../Controllers/employees.Controllers.js';
// import all controllers
// import SessionController from './app/controllers/SessionController';

const employeesRoutes = new Router();

// Add routes
employeesRoutes.get('/:firstName', getUser);
employeesRoutes.post('/', addUser);
employeesRoutes.patch('/:firstName', updateUser);
employeesRoutes.delete('/:firstName', delUser);

export default employeesRoutes;

