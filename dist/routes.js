"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _UserController = require('./app/controller/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _SessionController = require('./app/controller/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);

var _auth = require('./app/middlewares/auth'); var _auth2 = _interopRequireDefault(_auth);

const routes = new (0, _express.Router)();


// Criar usuário
routes.post('/users', _UserController2.default.store)


// Logar
routes.post('/session', _SessionController2.default.store)

// Autenticação
routes.use(_auth2.default)

// Logar
routes.post('/dash', _UserController2.default.index)

exports. default = routes;