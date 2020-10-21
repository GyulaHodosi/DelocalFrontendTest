import axios from "../Axios/axios";

export async function getPalettes() {
  let response = await axios.get("/http://www.colourlovers.com/api//palettes?numResults=10&format=json");
  return response.data;
}

export async function getNewPalettes(offSet) {
  let respones = await axios.get(`https://cors-anywhere.herokuapp.com/http://www.colourlovers.com/api/palettes?numResults=10&resultOffset=${offSet}&format=json`);
  return respones.data;
}

