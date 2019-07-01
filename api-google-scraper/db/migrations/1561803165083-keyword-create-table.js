/**
 * Create user table migration
 * @param {object} queryInterface
 * @param {Sequelize} Sequelize
 * @returns {*}
 */
export const up = (queryInterface, Sequelize) => {
  return queryInterface.createTable('Keyword', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    adWords: {
      allowNull: false,
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    links: {
      allowNull: false,
      type: Sequelize.INTERGER,
      defaultValue: 0,
    },
    totalResults: {
      allowNull: false,
      type: Sequelize.BIGINT,
      defaultValue: 0,
    },
    source: {
      allowNull: false,
      type: Sequelize.TEXT,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    }
  });
};

/**
 * Rollback create user table migration
 * @param {object} queryInterface
 * @param {Sequelize} Sequelize
 * @returns {*}
 */
export const down = (queryInterface, Sequelize) => {
  return queryInterface.dropTable('Keyword');
};
