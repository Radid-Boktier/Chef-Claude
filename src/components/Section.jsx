import IngredientList from './IngredientList';
import ReadyForEcipe from './ReadyForRecipe';
export default function Section({ value }) {
  // console.log(value);
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <IngredientList newIngredientList={value} />
      {value.length > 3 ? <ReadyForEcipe /> : null}
    </section>
  );
}
