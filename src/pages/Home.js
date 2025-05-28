import { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import './Home.css';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    fetch('https://dummyjson.com/recipes?limit=100')
      .then(res => res.json())
      .then(data => setRecipes(data.recipes));
  }, []);

  const totalPages = Math.ceil(recipes.length / perPage);
  const currentRecipes = recipes.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="home-container">
      <h1 className="home-title">Recipes</h1>
      <div className="recipe-grid">
        {currentRecipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      <div className="pagination">
        {[...Array(totalPages).keys()].map(num => (
          <button
            key={num}
            onClick={() => setPage(num + 1)}
            className={`page-btn ${page === num + 1 ? 'active' : ''}`}
          >
            {num + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
