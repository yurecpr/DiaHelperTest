import React from 'react';

const CalorieCalculator = ({ foods }) => {
  const calculateCalories = () => {
    return foods.reduce((total, food) => total + food.calories * food.quantity, 0);
  };

  return (
    <div>
      <h2>Total Calories: {calculateCalories()}</h2>
    </div>
  );
};

export default CalorieCalculator;
