import * as actionTypes from '../actions/actionTypes';
const initialState = {
  listData: null,

};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.GET_LIST_DATA_SUCCESS:
      return {
        ...state,
        listData: action.data,
      };
    default:
      return state;
  }
};
