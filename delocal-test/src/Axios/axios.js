import axios from "axios";

const API_URL = "https://cors-anywhere.herokuapp.com/";
const TIMEOUT = 5000;

export default axios.create({
  baseURL: API_URL,
  timeout: TIMEOUT,
  withCredentials: false,
});