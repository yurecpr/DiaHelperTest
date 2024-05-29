import React from 'react';
import '../../src/styles.css';

const FoodItem = ({ food }) => (
  <div className="food-item">
    <h2>{food.name}</h2>
    <p>Calories: {food.calories}</p>
    <p>Quantity: {food.quantity}</p>
  </div>
);

export default FoodItem;
