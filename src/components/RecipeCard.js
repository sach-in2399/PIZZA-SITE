import { Link } from 'react-router-dom';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => (
  <div className="recipe-card">
    <img src={recipe.image} alt={recipe.name} className="recipe-image" />
    <h3 className="recipe-title">{recipe.name}</h3>
    <p className="recipe-time">Prep Time: {recipe.prepTimeMinutes} mins</p>
    <Link to={`/recipe/${recipe.id}`} className="recipe-link">View Details</Link>
  </div>
);

export default RecipeCard;
