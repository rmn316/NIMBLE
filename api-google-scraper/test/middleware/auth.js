import { expect } from 'chai';
import http from 'node-mocks-http';
import sinon from 'sinon';
import jwt from 'jsonwebtoken';
import auth from '../../src/middleware/auth';
import db from '../../src/models/index';
import '@babel/polyfill'

describe ('User Authentication Service', () => {

  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.restore();
  });

  describe ('verifyToken', () => {
    it ('should return an error code when not token is passed', () => {

      const request = http.createRequest();
      const response = http.createResponse();
      const next = () => {};

      sandbox.spy(response, 'status');
      sandbox.spy(response, 'json');
      sandbox.spy(next);

      auth.verifyToken(request, response, next => {}).then(() => {
        expect(response.status.calledOnce).to.equal(true);
        expect(response.statusCode).to.equal(400);
        expect(response._getData().message).to.equal('Token not provided');
      })
        .catch(e => {
          console.error(e);
        });
    });

    it ('should return an error when invalid token is passed', () => {

      const request = http.createRequest({
        headers: {
          'x-access-token': 'bad_token'
        }
      });
      const response = http.createResponse();
      const next = () => {};

      sandbox.spy(response, 'status');
      sandbox.spy(response, 'json');
      sandbox.stub(jwt, 'verify').callsFake(() => { return { user_id: 1 } } );
      sandbox.stub(db.User, 'findByPk').callsFake(() => { return false });
      // sandbox.stub(db, 'User', () => {});

      sandbox.spy(next);

      auth.verifyToken(request, response, next => {}).then(() => {
        expect(response.status.calledOnce).to.equal(true);
        expect(response.statusCode).to.equal(400);
        expect(response._getData().message).to.equal('The token you provided is invalid');
      })
        .catch(e => {
          console.error(e);
        });
    });

    it ('should call next when valid token is provided', () => {

      const request = http.createRequest({
        headers: {
          'x-access-token': 'good_token'
        }
      });
      const response = http.createResponse();
      const next = () => {};

      sandbox.spy(response, 'status');
      sandbox.spy(response, 'json');
      sandbox.stub(jwt, 'verify').callsFake(() => { return { user_id: 1 } } );
      sandbox.stub(db.User, 'findByPk').callsFake(() => { return {id: 1 } });
      // sandbox.stub(db, 'User', () => {});

      sandbox.spy(next);

      auth.verifyToken(request, response, next => {}).then(() => {
        expect(request.user.id).to.equal(1);
      })
        .catch(e => {
          console.error(e);
        });
    });
  });
});