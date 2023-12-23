import auth from '../../src/service/user-authentication.service';

/**
 * Create user sample data creation
 * @param {object} queryInterface
 * @param {Sequelize} Sequelize
 * @returns {*}
 */
export const up = (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('users', [{
    'email': 'test@test.com',
    'password': auth.hashPassword('test')
  }], {});
};

/**
 * Create user sample data rollback
 * @param {object} queryInterface
 * @param {Sequelize} Sequelize
 * @returns {*}
 */
export const down = (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('users', null, {});
};
