import axios from "axios";
const Base_Url = "https://youtube-v3-alternative.p.rapidapi.com";


const options = {
  headers: {
    'X-RapidAPI-Key': import.meta.process.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  }
};


export const fetchFromApi = async (url) => {
  // const {data} = await axios.get(`${Base_Url}/${url}`, options)
  const data = await fetch(`${Base_Url}/${url}`,options).then(res=>res.json())
  return data;
};
