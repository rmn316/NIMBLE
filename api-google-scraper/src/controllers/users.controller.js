import db from '../models/index';
import userAuthentication from '../service/user-authentication.service';

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
    if (!userAuthentication.isValidEmail(email)) {
      return response.status(400).send({ 'message': 'Please enter a valid email address' });
    }

    db.User.findOne({ where: { email: email }})
      .then(user => {
        if (!userAuthentication.comparePassword(user.password, password)) {
          return response.status(400).send({ 'message': 'The credentials you provided is incorrect' });
        }

        const token = userAuthentication.generateToken(user.id);
        return response.status(200).send({ token });
      })
      .catch(error => {
        return response.status(400).send({ 'message': 'The credentials you provided is incorrect' });
      });
  }
}

export default UsersController;
