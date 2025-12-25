export default function IngredientList({ newIngredientList }) {
  // console.log(newIngredientList);
  return (
    <ul className="ingredient-list">
      {newIngredientList.map((item) => {
        return (
          <li id="ingredient-item" key={item}>
            {item}
          </li>
        );
      })}
    </ul>
  );
}
