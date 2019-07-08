/**
 * Create user table migration
 * @param {object} queryInterface
 * @param {Sequelize} Sequelize
 * @returns {*}
 */
export const up = (queryInterface, Sequelize) => {
  return queryInterface.createTable('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    email: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  });
};

/**
 * Rollback create user table migration
 * @param {object} queryInterface
 * @param {Sequelize} Sequelize
 * @returns {*}
 */
export const down = (queryInterface, Sequelize) => {
  return queryInterface.dropTable('users');
};
