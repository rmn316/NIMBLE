import { expect } from 'chai';
import sinon from 'sinon';
import UserAuthentication from '../../src/service/user-authentication.service';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

describe ('User Authentication Service', () => {

  const sandbox = sinon.createSandbox();

  beforeEach (() => {
    sandbox.restore();
  })

  describe ('hashPassword', () => {
    it ('should generate a valid password hash', () => {
      sandbox.stub(bcrypt, 'hashSync').returns('aGeneratedHash');
      UserAuthentication.hashPassword('test').then((result) => {
        expect(result).to.equal('aGeneratedHash');
      });
    })
  });

  describe ('comparePassword', () => {
    it ('should return true when passwords match', () => {
      sandbox.stub(bcrypt, 'compare').callsFake(() => Promise.resolve(true));

      UserAuthentication.comparePassword('aGeneratedHash', 'test').then((result) => {
        expect(result).to.equal(true);
      });
    });

    it ('should return false when passwords do not match', () => {
      sandbox.stub(bcrypt, 'compare').callsFake(() => Promise.resolve(false));

      UserAuthentication.comparePassword('aGeneratedHash', 'junk').then((result) => {
        expect(result).to.equal(false);
      });
    });

  });

  describe ('isValidEmail', () => {
    it ('should return true when a valid email is provided', () => {
      UserAuthentication.isValidEmail('test@test.com').then((result) => {
        expect(result).to.equal(true);
      });
    });

    it ('should return false when a invalid email is provided', () => {
      UserAuthentication.isValidEmail('invalid.com').then((result) => {
        expect(result).to.equal(false);
      });
    })
  });

  describe ('generateToken', () => {
    it ('should return a new jwt token string', () => {
      sandbox.stub(jwt, 'sign').callsFake(() => Promise.resolve('A Random String'));

      UserAuthentication.generateToken(1).then((result) => {
        expect(result).to.equal('A Random String');
      })
    })
  })
});
