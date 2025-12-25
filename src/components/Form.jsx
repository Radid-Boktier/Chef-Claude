import { useState } from 'react';
import ingredients from '../data/Ingredient';
import Section from './Section';

export default function Form() {
  const [value, setValue] = useState(ingredients);
  function handleAction(formData) {
    let newIngre = formData.get('ingredient');
    setValue((prvIngredient) => [...prvIngredient, newIngre]);
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
      {value.length > 0 ? <Section value={value} /> : null}
    </>
  );
}
