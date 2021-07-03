"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

require('dotenv').config()
const PORT = process.env.PORT || 3000;
console.log(`Lauch server at ${PORT}`);
_app2.default.use(_cors2.default)
_app2.default.listen(PORT);