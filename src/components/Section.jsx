import IngredientList from './IngredientList';
import ReadyForRecipe from './ReadyForRecipe';
export default function Section({ ingredients, ref, recipe, getRecipe }) {
  // console.log(value);
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <IngredientList newIngredientList={ingredients} />
      {ingredients.length > 3 ? (
        <ReadyForRecipe ref={ref} recipe={recipe} getRecipe={getRecipe} />
      ) : null}
    </section>
  );
}
