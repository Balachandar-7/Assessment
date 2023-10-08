import * as actionTypes from './actionTypes';

export const getListData = (callback = () => {}) => {
  return {
    type: actionTypes.GET_LIST_DATA,
    callback,
  };
};

export const addTags = (params,callback = () => {}) => {
    return {
      type: actionTypes.ADD_TAG,
      params,
      callback,
    };
  };
  

