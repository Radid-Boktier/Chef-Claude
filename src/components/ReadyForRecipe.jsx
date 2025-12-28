import Recipecode from './RecipeCode';

export default function ReadyForRecipe({ ref, recipe, getRecipe }) {
  return (
    <>
      <div className="get-recipe-container">
        <div ref={ref}>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button onClick={getRecipe}>Get a recipe</button>
      </div>
      {recipe && <Recipecode recipe={recipe} />}
    </>
  );
}
