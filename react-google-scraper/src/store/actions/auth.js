import * as actionTypes from './action-types'
import axios from '../../axios';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
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
        localStorage.setItem('token', response.data.token);
        dispatch(authSuccess(response.data.token));
      })
      .catch((error) => {
        dispatch(authFail(error.message));
      })
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      dispatch(authSuccess(token));
    }
  };
};
