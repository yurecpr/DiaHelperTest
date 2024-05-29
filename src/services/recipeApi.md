import axios from 'axios';


const API_URL = 'https://api.edamam.com/api/food-database/v2/parser';
const APP_ID = 'c63e1cf8'; 
const APP_KEY = 'e8c4b6181c7e3d306f3e87008ca63014';


export const fetchFoodData = async (query) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          ingr: query,
          app_id: APP_ID,
          app_key: APP_KEY,
        },
      });
     return response.data; 
     } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
      } else if (error.request) {
        console.error('Error request:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
      console.error('Error config:', error.config);
      return null;
    }
  };