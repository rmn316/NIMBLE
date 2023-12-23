/**
 * Create user table migration
 * @param {object} queryInterface
 * @param {Sequelize} Sequelize
 * @returns {*}
 */
export const up = (queryInterface, Sequelize) => {
  return queryInterface.createTable('keywords', {
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
    ad_words: {
      allowNull: false,
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    links: {
      allowNull: false,
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    total_results: {
      allowNull: false,
      type: Sequelize.BIGINT,
      defaultValue: 0,
    },
    source: {
      allowNull: false,
      type: Sequelize.TEXT,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    created_at: {
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
  return queryInterface.dropTable('keywords');
};
