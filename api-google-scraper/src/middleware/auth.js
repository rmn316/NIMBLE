import jwt from 'jsonwebtoken';
import models from '../models/index';

const auth = {
  async verifyToken (request, response, next) {
    const token = request.headers['x-access-token'];
    if (!token) {
      return response.status(400).send({
        message: "Token not provided"
      });
    }

    try {
      const decoded = await jwt.verify(token, process.env.SECRET);

      const user = await models.User.findByPk(decoded.user_id);

      if(!user) {
        return response.status(400).send({ 'message': 'The token you provided is invalid' });
      }
      request.user = { id: decoded.user_id };
      next();
    } catch(error) {
      return response.status(400).send(error);
    }
  }
}

export default auth;
