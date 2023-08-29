// redux/reducers/countReducer.js
import * as actionTypes from '../action/actionTypes'
const initialState = {
    jobData: [],
  };
   
  export default (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.GET_JOB_LISTING_SUCCESS:
        console.log("action.joblistt", action?.payload);
        return {
          ...state,
          jobData: action?.payload?.data,
        };
      default:
        return state;
    }
  };