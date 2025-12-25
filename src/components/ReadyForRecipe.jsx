import { useState } from 'react';
import Recipecode from './RecipeCode';

export default function ReadyForEcipe() {
  const [recipeShown, setRecipeShown] = useState(false);
  function handleGetRecipe() {
    setRecipeShown((prevRecipeShown) => !prevRecipeShown);
  }
  return (
    <>
      <div className="get-recipe-container">
        <div>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button onClick={handleGetRecipe}>Get a recipe</button>
      </div>
      {recipeShown && <Recipecode />}
    </>
  );
}
