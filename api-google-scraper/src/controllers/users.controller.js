import models from '../models/index';
import userAuth from '../service/user-authentication.service';

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
    if (!userAuth.isValidEmail(email)) {
      return response.status(400).send({ 'message': 'Please enter a valid email address' });
    }

    models.User.find({where: { email: email }})
      .then(user => {
        if (!userAuth.comparePassword(user.password, password)) {
          return response.status(400).send({ 'message': 'The credentials you provided is incorrect' });
        }

        const token = userAuth.generateToken(user.id);
        return response.status(200).send({ token });
      })
      .catch(() => {
        return response.status(400).send({ 'message': 'The credentials you provided is incorrect' });
      });
  }
}

export default UsersController;
