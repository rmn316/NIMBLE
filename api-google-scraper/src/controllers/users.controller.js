import db from '../models/index';
import UserAuthentication from '../service/user-authentication.service';

class UsersController {
  /**
   * @param request
   * @param response
   * @returns {JSON} Response as json object.
   */
  static login = (request, response)  => {
    const { email, password} = request.body;

    if (!email || !password) {
      return response.status(400).send({'message': 'Some values are missing'});
    }
    if (!UserAuthentication.isValidEmail(email)) {
      return response.status(400).send({ 'message': 'Please enter a valid email address' });
    }

    db.User.findOne({ where: { email: email }})
      .then(user => {
        if (!UserAuthentication.comparePassword(user.password, password)) {
          return response.status(400).send({ 'message': 'The credentials you provided is incorrect' });
        }

        UserAuthentication.generateToken(user.id).then(result => {
          return response.status(200).send({ token: result });
        });
      })
      .catch(() => {
        return response.status(400).send({ 'message': 'The credentials you provided is incorrect' });
      });
  }
}

export default UsersController;
