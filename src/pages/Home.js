import React from 'react';
import CalorieCalculator from '../components/CalorieCalculator';
import '../../src/styles.css';
import FoodList from '../components/FoodList';
import AddFoodForm from '../components/AddFoodForm';
import FoodSearch from '../components/FoodSearch';


const Home = () => {
  const [foods, setFoods] = React.useState([
    { name: 'Apple', calories: 52, quantity: 2 },
    { name: 'Banana', calories: 96, quantity: 1 }
  ]);

  const addFood = (food) => {
    setFoods([...foods, food]);
  };

  return (
    <div className="container">
      <FoodSearch onAdd={addFood} />
      <AddFoodForm onAdd={addFood} />
      <FoodList foods={foods} />
      <CalorieCalculator foods={foods} />
    </div>
  );
};

export default Home;
