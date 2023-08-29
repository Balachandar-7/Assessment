import { combineReducers } from "redux";
import getJobs from "./getJobs";



export default combineReducers({
	getJobList: getJobs,

});