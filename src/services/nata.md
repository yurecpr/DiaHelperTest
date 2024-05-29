import Button from "components/Button/Button";
import { ButtonWrapper, InputButtonWrapper, ProductsContainer, ProductsForm } from "./styles";
import Input from "components/Input/Input";
import { useState } from "react";



function Products() {

    const [product, setProduct] = useState<string>('');

    // const APP_ID = 'c63e1cf8';
    //  const APP_KEY = 'e8c4b6181c7e3d306f3e87008ca63014';
    // const API_URL = 'https://api.edamam.com/api/food-database/v2/parser';
 

    // const getProductData = async () => {
    // const response = await fetch(API_URL);
    // const result = await response.json();
    // console.log(result)
    // }

const API_URL = 'https://api.edamam.com/search';
const APP_ID = 'YOUR_APP_ID'; // Замените на ваш APP ID
const APP_KEY = 'YOUR_APP_KEY'; // Замените на ваш APP KEY
export const fetchRecipes = async (query) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: query,
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


  return (
    <ProductsContainer>
      <ProductsForm>
        <InputButtonWrapper>
            <Input placeholder="Enter product name"  value={product} name="product"/>
        <ButtonWrapper>
            <Button name="search" onButtonClick={getProductData}/>
        </ButtonWrapper>
        </InputButtonWrapper>
      </ProductsForm>
    </ProductsContainer>
  );
}

export default Products;