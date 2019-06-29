import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import "babel-polyfill"

const userAuthentication = {
  /**
   * Hash Password Method
   * @param {string} password
   * @returns {string} returns hashed password
   */
  async hashPassword (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  },

  /**;
   * compare password
   * @param {string} hashPassword
   * @param {string} password
   * @returns {Boolean} return true | false
   */
  async comparePassword (hashPassword, password) {
    return bcrypt.compare(password, hashPassword);
  },

  /**
   * validate email address for structure
   * @param {string} email
   * @returns {boolean} return true | false
   */
  async isValidEmail (email) {
    return /\S+@\S+\.\S+/.test(email);
  },

  /**
   * Generate new JWT token
   * @param {int} id
   * @returns {string} token
   */
  async generateToken (id) {
    return jwt.sign({user_id: id}, process.env.SECRET, {expiresIn: '1d'});
  }
}

export default userAuthentication;
