import { Router } from 'express';

import UserController from './app/controller/UserController';
import SessionController from './app/controller/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();


// Criar usuário
routes.post('/users', UserController.store)


// Logar
routes.post('/session', SessionController.store)

// Autenticação
routes.use(authMiddleware)

// Logar
routes.post('/dash', UserController.index)

export default routes;