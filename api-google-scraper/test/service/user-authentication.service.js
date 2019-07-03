import { expect } from 'chai';
import sinon from 'sinon';
import UserAuthentication from '../../src/service/user-authentication.service';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

describe ('User Authentication Service', () => {

  const sandbox = sinon.createSandbox();

  beforeEach (() => {
    sandbox.restore();
  });

  describe ('hashPassword', () => {
    it ('should generate a valid password hash', () => {
      sandbox.stub(bcrypt, 'hashSync').returns('aGeneratedHash');
      expect(UserAuthentication.hashPassword('test')).to.equal('aGeneratedHash');
    })
  });

  describe ('comparePassword', () => {
    it ('should return true when passwords match', () => {
      sandbox.stub(bcrypt, 'compare').callsFake(() => true);
      expect(UserAuthentication.comparePassword('aGeneratedHash', 'test')).to.equal(true);
    });

    it ('should return false when passwords do not match', () => {
      sandbox.stub(bcrypt, 'compare').callsFake(() => false);
      expect(UserAuthentication.comparePassword('aGeneratedHash', 'junk')).to.equal(false);
    });

  });

  describe ('isValidEmail', () => {
    it ('should return true when a valid email is provided', () => {
      expect(UserAuthentication.isValidEmail('test@test.com')).to.equal(true);
    });

    it ('should return false when a invalid email is provided', () => {
        expect(UserAuthentication.isValidEmail('invalid.com')).to.equal(false);
    });
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
