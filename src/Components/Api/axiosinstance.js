import axios from "axios"
const axoisinstance = axios.create({
    withCredentials: false,
    baseURL : "https://petsla-api.herokuapp.com",
    timeout : 5000,
    headers : {'Content-Type': 'application/json',},
})
export default axoisinstance;