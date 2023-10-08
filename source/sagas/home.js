import {all, put, takeEvery, delay} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {getMethod, postMethod } from '../api/apiCall';
import Constants from '../api/endPoints';
import { HomeModel } from '../models';
 
function* getData(action)  {
  try {
    const response = yield getMethod(Constants.LIST_DATA);
   if (response) {
    const homeData = new HomeModel(response?.data);
     yield put({type: actionTypes.GET_LIST_DATA_SUCCESS, data: homeData});
     action.callback?.(response);
    }
  } catch (error) {
    action.callback?.(error.response ?? error.message);
  }
}

function* addTags(action)  {
    try {
      const response = yield postMethod(Constants.ADD_TAG, action.params);
      action.callback?.(response);
      
    } catch (error) {
      action.callback?.(error.response ?? error.message);
    }
  }


function* watchGetData() {
  yield takeEvery(actionTypes.GET_LIST_DATA, getData);
}

function* watchAddTag() {
    yield takeEvery(actionTypes.ADD_TAG, addTags);
}

export default function* homeSagas() {
  yield all([watchGetData(), watchAddTag()]);
}
