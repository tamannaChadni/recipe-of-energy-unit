import PropTypes from "prop-types";

const CurrentRecipe = ({ recipe, index }) => {
  const { name, prepTimeMinutes, caloriesPerServing } = recipe;

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
            <tr className="bg-base-200">
              <th>{index + 1}</th>
              <td>{name}</td>
              <td>{prepTimeMinutes}</td>
              <td>{caloriesPerServing}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
CurrentRecipe.propTypes = {
  recipe: PropTypes.object,
  index: PropTypes.number,
};

export default CurrentRecipe;
