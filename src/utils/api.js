import axios from "axios";
const BY_PASS = "https://corsanywhere.herokuapp.com";
const BASE_URL = "https://www.swiggy.com/dapi/restaurants/list";

const options = {
  params: { hl: "en", gl: "IN" },
  headers: {
    "X-RapidAPI-Key": "197f2a7ae9mshddf80f39bdc12d5p100edcjsn75e7ca47fa4c",
    // "5cd2abdd35msheba91cf99362cfbp1cfbb9jsn6b79f840e82d" ||
    // "4902351b37msh1f3b2f72569b3a9p1fe51cjsnbbde08e1d334" ||
    // "4596dbf03emsh3aeb8527c864ba3p1334bbjsn91fa17943875", ||
    // "197f2a7ae9mshddf80f39bdc12d5p100edcjsn75e7ca47fa4c"
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BY_PASS}/${BASE_URL}/${url}`);
  return data;
};
