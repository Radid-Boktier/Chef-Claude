import { useState } from 'react';
import getRecipeFromMistral from '../ai';
import Recipecode from './RecipeCode';

export default function ReadyForEcipe({ IngredientList }) {
  const [recipe, setRecipe] = useState(false);
  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(IngredientList);
    // console.log(recipeMarkdown);
    setRecipe(recipeMarkdown);
  }
  return (
    <>
      <div className="get-recipe-container">
        <div>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button onClick={getRecipe}>Get a recipe</button>
      </div>
      {recipe && <Recipecode recipe={recipe} />}
    </>
  );
}
