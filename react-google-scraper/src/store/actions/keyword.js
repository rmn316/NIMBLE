import * as actionTypes from './action-types';
import axios from '../../axios';

/**
 * @param keywords
 * @returns {{keywords: [], type: string}}
 */
export const fetchKeywordsSuccess = (keywords) => {
  return {
    type: actionTypes.FETCH_KEYWORDS_SUCCESS,
    keywords: keywords,
  };
};

/**
 * @param error
 * @returns {{type: string, error: *}}
 */
export const fetchKeywordsFail = (error) => {
  return {
    type: actionTypes.FETCH_KEYWORDS_FAIL,
    error: error,
  };
};

/**
 * @returns {{type: string}}
 */
export const fetchKeywordsStart = () => {
  return {
    type: actionTypes.FETCH_KEYWORDS_START,
  };
};

/**
 * @param token
 * @returns {Function}
 */
export const fetchKeywords = (token) => {
  return dispatch => {
    dispatch(fetchKeywordsStart());
    axios.get('/keywords', {
      headers: {
        'x-access-token': token,
      },
    })
      .then(response => {
        dispatch(fetchKeywordsSuccess(response));
      })
      .catch(error => {
        dispatch(fetchKeywordsFail(error));
      });
  };
};