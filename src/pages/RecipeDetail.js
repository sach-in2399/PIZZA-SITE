import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './RecipeDetail.css';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then(res => res.json())
      .then(setRecipe);
  }, [id]);

  if (!recipe) return <div className="detail-container">Loading...</div>;

  return (
    <div className="detail-container">
      <h1 className="recipe-title">{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins</p>
      <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins</p>
      <p><strong>Servings:</strong> {recipe.servings}</p>

      <h2 className="section-heading">Ingredients</h2>
      <ul className="ingredients-list">
        {recipe.ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
      </ul>

      <h2 className="section-heading">Instructions</h2>
      <ol className="instructions-list">
        {recipe.instructions.map((step, idx) => <li key={idx}>{step}</li>)}
      </ol>
    </div>
  );
};

export default RecipeDetail;
