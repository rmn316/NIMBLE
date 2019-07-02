import * as actionTypes from '../actions/action-types';
import { updateObject } from '../utility';

const initialState = {
  keywords: [],
  loading: false,
};

const keywordReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_KEYWORDS_START:
      return updateObject(state, { loading: true });
    case actionTypes.FETCH_KEYWORDS_SUCCESS:
      return updateObject(state, {
        orders: action.keywords,
        loading: false,
      });
    case actionTypes.FETCH_KEYWORDS_FAIL:
      return updateObject(state, { loading: false });
    default:
      return state;
  }
};

export default keywordReducer;
