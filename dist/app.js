"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

var _swaggeruiexpress = require('swagger-ui-express'); var _swaggeruiexpress2 = _interopRequireDefault(_swaggeruiexpress);
var _swagger = require('../swagger'); var swaggerDocument = _interopRequireWildcard(_swagger);

require('./database');

class App{
  constructor(){
    this.server = _express2.default.call(void 0, );
    this.middleware();
    this.routes(); 
  }

  middleware(){
    this.server.use(_express2.default.json())
  }

  routes(){
    this.server.use(_routes2.default)
  }
}

exports. default = new App().server;