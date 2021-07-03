import { Router } from 'express';

import UserController from './app/controller/UserController';
import SessionController from './app/controller/SessionController';
import NotificationsController from './app/controller/NotificationsController';
import InfoController from './app/controller/InfoController';

import authMiddleware from './app/middlewares/auth';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger';

const routes = new Router();

routes.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

routes.get('/', (req, res) => {
  res.json({ message: 'Okay' })
})

// Criar usuário
routes.post('/users', UserController.store)

// Logar
routes.post('/session', SessionController.store)

// Autenticação
routes.use(authMiddleware)

// Logar
routes.post('/dash', authMiddleware, UserController.index)

// Notifications
routes.get('/notifications', NotificationsController.index)
routes.put('/notifications/:id', NotificationsController.update)

// Relacionamento de tabelas
routes.post('/info', InfoController.store)

export default routes;