import { useEffect, useRef, useState } from 'react';
import getRecipeFromMistral from '../ai';
import Section from './Section';
export default function Form() {
  const [ingredients, setingrediens] = useState([]);
  const [recipe, setRecipe] = useState(false);
  const recipeSection = useRef(null);
  // console.log(recipeSection);

  useEffect(() => {
    console.log('ok');
    if (recipe !== '' && recipeSection.current != null) {
      recipeSection.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [recipe]);

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    // console.log(recipeMarkdown);
    setRecipe(recipeMarkdown);
  }

  function handleAction(formData) {
    let newIngre = formData.get('ingredient');
    setingrediens((prvIngredient) => [...prvIngredient, newIngre]);
  }
  return (
    <>
      <form className="add-ingredient-form" action={handleAction}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
          id="input"
        />
        <button id="button">Add ingredient</button>
      </form>
      {ingredients.length > 0 ? (
        <Section
          ingredients={ingredients}
          ref={recipeSection}
          recipe={recipe}
          getRecipe={getRecipe}
        />
      ) : null}
    </>
  );
}
