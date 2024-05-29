import React from 'react';
import FoodItem from './FoodItem';


const FoodList = ({ foods }) => (
  <div>
    {foods.map((food, index) => (
      <FoodItem key={index} food={food} />
    ))}
  </div>
);

export default FoodList;
