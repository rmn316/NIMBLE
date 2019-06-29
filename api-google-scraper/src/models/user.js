import Sequelize, { Model} from 'sequelize'

class User extends Model {
}

User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    modelName: 'user',
    tableName: 'users',
  });

export default User;
