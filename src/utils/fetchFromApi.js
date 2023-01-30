import axios from "axios";
const Base_Url = "https://youtube-v3-alternative.p.rapidapi.com";

// const options = {
//   headers: {
//     "X-RapidAPI-Key": "a24a36beecmshe4496d515331a8fp1e91b1jsncd72d20def5e",
//     "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
//   },
// };

const options = {
  headers: {
    'X-RapidAPI-Key': 'c5d599bbc7msh8cf969e91c2ce0ap1c6de9jsn8407b75eb18c',
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  }
};


export const fetchFromApi = async (url) => {
  // const {data} = await axios.get(`${Base_Url}/${url}`, options)
  const data = await fetch(`${Base_Url}/${url}`,options).then(res=>res.json())
  return data;
};
