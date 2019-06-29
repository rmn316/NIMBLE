export default function(sequelize, DataType) {
  return sequelize.define('User', {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataType.STRING,
      allowNull: false
    },
    password: {
      type: DataType.STRING,
      allowNull: false
    }
  }, {
    tableName: 'users',
    timestamps: false,
  });
}
