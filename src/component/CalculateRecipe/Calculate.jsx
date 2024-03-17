import PropTypes from "prop-types";

const Calculate = ({
  recipe,
  index,
  wantedRecipes,
  setWantedRecipes,
  removedRecipes,
  setRemovedRecipes,
  cookingTime,
  setCookingTime,
  calories,
  setCalories,
}) => {
  const { name, prepTimeMinutes, caloriesPerServing } = recipe;

  const handleToPreparedRecipe = (recipe) => {
    const currentlyCook = wantedRecipes.filter((item) => item.id !== recipe.id);
    setWantedRecipes(currentlyCook);
    setRemovedRecipes([...removedRecipes, recipe]);

    setCookingTime(cookingTime + recipe.prepTimeMinutes);
    setCalories(calories + recipe.caloriesPerServing);
  };

  return (
    <div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-base-200 rounded-xl">
              <th>{index + 1}</th>
              <td>{name}</td>
              <td>{prepTimeMinutes}</td>
              <td>{caloriesPerServing}</td>
            </tr>
          </tbody>
        </table>
        <button
          onClick={() =>
            handleToPreparedRecipe(recipe, prepTimeMinutes, caloriesPerServing)
          }
          className=" btn bg-red-300 mt-2"
        >
          prepared
        </button>
      </div>
    </div>
  );
};

Calculate.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleToCook: PropTypes.func,
  setWantedRecipes: PropTypes.func,
  wantedRecipes: PropTypes.array,
  removedRecipes: PropTypes.array,
  index: PropTypes.number,
  handleToPreparedRecipe: PropTypes.func,
  setRemovedRecipes: PropTypes.func,
  cookingTime: PropTypes.number,
  setCookingTime: PropTypes.func,
  setCalories: PropTypes.func,
  calories: PropTypes.number,
};

export default Calculate;
