"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _UserController = require('./app/controller/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _SessionController = require('./app/controller/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);
var _NotificationsController = require('./app/controller/NotificationsController'); var _NotificationsController2 = _interopRequireDefault(_NotificationsController);
var _InfoController = require('./app/controller/InfoController'); var _InfoController2 = _interopRequireDefault(_InfoController);

var _auth = require('./app/middlewares/auth'); var _auth2 = _interopRequireDefault(_auth);

var _swaggeruiexpress = require('swagger-ui-express'); var _swaggeruiexpress2 = _interopRequireDefault(_swaggeruiexpress);
var _swagger = require('../swagger'); var _swagger2 = _interopRequireDefault(_swagger);

const routes = new (0, _express.Router)();

routes.use('/api-documents', _swaggeruiexpress2.default.serve, _swaggeruiexpress2.default.setup(_swagger2.default))

routes.get('/', (req, res) => {
  res.json({ message: 'Okay' })
})

// Criar usuário
routes.post('/users', _UserController2.default.store)

// Logar
routes.post('/session', _SessionController2.default.store)

// Autenticação
routes.use(_auth2.default)

// Logar
routes.post('/dash', _auth2.default, _UserController2.default.index)

// Notifications
routes.get('/notifications', _NotificationsController2.default.index)
routes.put('/notifications/:id', _NotificationsController2.default.update)

// Relacionamento de tabelas
routes.post('/info', _InfoController2.default.store)

exports. default = routes;