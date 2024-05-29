import React, { useState } from 'react';
import { fetchFoodData } from '../services/api';
import '../../src/styles.css';

const FoodSearch = ({ onAdd }) => {
  const [query, setQuery] = useState('');
  const [food, setFood] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await fetchFoodData(query);
    if (data && data.hints.length > 0) {
      const firstHint = data.hints[0].food;
      const newFood = {
        name: firstHint.label,
        calories: firstHint.nutrients.ENERC_KCAL,
        fat: firstHint.nutrients.FAT,
                quantity: 1, // Можно изменить это значение по умолчанию
      };
      setFood(newFood);
    } else {
      setFood(null);
    }
  };

  const handleAdd = () => {
    if (food) {
      onAdd(food);
      setQuery('');
      setFood(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for food"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>
      {food && (
        <div className="food-item">
          <h2>{food.name}</h2>
          <p>Calories: {food.calories}</p>
          <p>Fat: {food.fat}</p>

          <button onClick={handleAdd}>Add Food</button>
        </div>
      )}
    </div>
  );
};

export default FoodSearch;

