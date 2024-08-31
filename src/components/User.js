
import React from 'react';

const User = ({ name, instructions, cuisine, prepTimeMinutes }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-header">
        <h2 className="recipe-name">{name}</h2>
        <p className="recipe-cuisine">{cuisine}</p>
      </div>
      <div className="recipe-details">
        <p className="recipe-prep-time">Prep Time: {prepTimeMinutes} mins</p>
        <div className="recipe-instructions">
          <h3>Instructions</h3>
          <p>{instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
