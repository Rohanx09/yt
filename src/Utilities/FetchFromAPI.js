
import axios from "axios";

const BASE_URL='https://youtube-v31.p.rapidapi.com';

const options = {
    // No get methode cuz doing that with axios 
    url: BASE_URL,
    params: {
        
        maxResults: '50'
      
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const FetchFromAPI = async ( url ) =>{
    const { data } = await axios.get(`${BASE_URL}/${url}` , options); // making params
    
    return data;
  }

  /*
  try {
      const response = await axios.request(options);
      console.log(response.data);
  } catch (error) {
      console.error(error);
  }*/