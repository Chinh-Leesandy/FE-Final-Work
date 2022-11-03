import axios from "axios"
const axoisinstance = axios.create({
    baseURL : "https://petsla-api.herokuapp.com",
    timeout : 5000,
    headers : {"X-Cumtor-Header" : "foobar"},
})
export default axoisinstance