import * as actionTypes from './action-types'
import axios from '../../axios';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const auth = (username, password) => {
  return dispatch => {
    dispatch(authStart());

    axios.post('/users/login', {
      email: username,
      password: password
    })
      .then((response) => {
        const expiry = new Date(new Date().getTime() + response.data.expiresIn * 1000);
        localStorage.setItem('token', response.token);
        localStorage.setItem('userId', response.user_id);
        localStorage.setItem('expirationDate', expiry);
        dispatch(authSuccess(response.data.token, response.user_id));
        dispatch(checkAuthTimeout(response.expiresIn));
      })
      .catch((error) => {
        dispatch(authFail(error.message));
      })
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('expirationDate');
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000)
  }
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const expires = new Date(localStorage.getItem('expirationDate'));
      if (expires <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem('userId');
        dispatch(authSuccess(token, userId));
        dispatch(checkAuthTimeout((expires.getTime() - new Date().getTime() / 1000)))
      }
    }
  };
};
