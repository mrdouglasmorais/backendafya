import Sequelize, { Model } from 'sequelize';

class Info extends Model {
    static init(sequelize){
      super.init({
        city: Sequelize.STRING,
        address: Sequelize.STRING,
        user_id: Sequelize.INTEGER,
      },
      {
        sequelize
      })

      return this;
    }
}

export default Info;