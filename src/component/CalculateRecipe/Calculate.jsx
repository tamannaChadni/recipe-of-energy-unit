import PropTypes from "prop-types";

const Calculate = ({ recipe, index, wantedRecipes, setWantedRecipes }) => {
  const { name, prepTimeMinutes, caloriesPerServing } = recipe;
//   const [wantedRecipes, setWantedRecipes] = useState([]);
  const handleToPreparedRecipe =(recipe) =>{
    const currentlyCook =wantedRecipes.filter(item =>item.id !== recipe.id);
    setWantedRecipes(currentlyCook);
    console.log(currentlyCook);
  }

  return (
    <div>
      <div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              {/* <th></th> */}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-base-200">
              <th>{index + 1}</th>
              <td>{name}</td>
              <td>{prepTimeMinutes}</td>
              <td>{caloriesPerServing}</td>
            </tr>
          </tbody>
        </table>
        <button
          onClick={() => handleToPreparedRecipe(recipe)}
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
  index: PropTypes.number,
  handleToPreparedRecipe: PropTypes.func,
};

export default Calculate;
