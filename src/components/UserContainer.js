// UserContainer.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './User';


const UserContainer = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/recipes');
        console.log(response.data); 
        setRecipes(response.data.recipes || []); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []); 

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <User
          key={recipe.id}
          name={recipe.name}
          cuisine={recipe.cuisine}
          prepTimeMinutes={recipe.prepTimeMinutes}
          instructions={recipe.instructions}
        />
      ))}
    </div>
  );
};

export default UserContainer;
