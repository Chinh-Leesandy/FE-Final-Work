import axios from "axios";
import * as Config from "../constants/ConfigApi";



export default function ApiCaller(endpoint,method = "GET",body,){
    
    return axios({
        method:method,
        url:`${Config.API_URL}${endpoint}`,
        // url:`${"http://petsla-api.herokuapp.com"}${endpoint}`,
        data:body,
        // withCredentials: true
    })
}
