import axios from "axios";
export default function ApiCaller(endpoint,method = "GET",body,){   
    return axios({
        method:method,
        url:`${'https://petsla-api.herokuapp.com'}${endpoint}`,
        data:body,
    })
}