export default function(sequelize, DataType) {
  return sequelize.define('User', {
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
