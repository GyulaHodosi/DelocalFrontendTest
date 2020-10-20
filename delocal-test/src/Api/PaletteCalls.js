import axios from "../Axios/axios";

export async function getPalettes() {
  let response = await axios.get("/palettes/new?format=json", {
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
  });
  return response.data;
}