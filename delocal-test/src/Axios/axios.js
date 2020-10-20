import Axios from "axios";

const API_URL = "http://www.colourlovers.com/api/";
const TIMEOUT = 5000;

export default Axios.create({
  baseURL: API_URL,
  timeout: TIMEOUT,
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
});