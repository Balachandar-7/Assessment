import * as actionTypes from './actionTypes';
import axios from 'axios';
export const onGetJob = () => {
    return {
        type: actionTypes.GET_JOB_LISTING,
    }
}

export const getJoblistApiCall = () =>{
    console.log("getJoblistApiCall response");

    return async dispatch =>{
        dispatch(onGetJob());
        console.log(" getJoblistApiCall response fff");

    try {
       const res =  await axios.get("https://reqres.in/api/users?page=2")
        console.log("getJoblistApiCall response 11111", res.data);
        dispatch({
            type: actionTypes.GET_JOB_LISTING_SUCCESS,
            payload: res.data,
          });
        
    } catch (error) {
        console.log('getJoblistApiCall errorlogin', error);
    }
    
    }

}