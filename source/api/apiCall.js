import Constants from "./endPoints";
import axios from 'axios';



export const getMethod = async (endPoints,params, accessToken) =>{
  //console.log("get method req:::", endPoints, params);
  var FinalResponse = null
   await axios.get(`${Constants.BASE_URL + endPoints}`,{params}, {
          headers: {
            //Header Defination 
            'Content-Type': 
              'application/x-www-form-urlencoded;charset=UTF-8',
              'Authorization': `token ${accessToken}`
  
          },
        })
          //If response is in json then in success
          .then((response) => {
            FinalResponse = response
          })
          .catch((error) => {
            console.log("erroroooo",error);
          });
          return FinalResponse;    
}

export const postMethod = async (endPoints, formBody, accessToken) =>{
    console.log("psooooo", endPoints, formBody, accessToken);
    var FinalResponse = null
     await axios.post(`${Constants.BASE_URL + endPoints}`,formBody, {
            headers: {
              //Header Defination 
              "accept": "application/json, text/plain, */*",
              'Content-Type': 
                'application/x-www-form-urlencoded;charset=UTF-8'
    
            },
          })
            //If response is in json then in success
            .then((response) => {
             // console.log("response json sagas", response);
              FinalResponse = response
            })
            //If response is not in json then in error
            .catch((error) => {
              //alert(JSON.stringify(error));
              console.log("erroroooo",error);
            });
            return FinalResponse;
    }
    