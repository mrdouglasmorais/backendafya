"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);

_app2.default.use(_express2.default.json())
_app2.default.listen(8888);