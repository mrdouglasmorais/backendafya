"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Info extends _sequelize.Model {
    static init(sequelize){
      super.init({
        city: _sequelize2.default.STRING,
        address: _sequelize2.default.STRING,
        user_id: _sequelize2.default.INTEGER,
      },
      {
        sequelize
      })

      return this;
    }
}

exports. default = Info;