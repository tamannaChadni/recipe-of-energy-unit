import PropTypes from "prop-types";

const Calculate = ({ recipe }) => {
  const { id, name, prepTimeMinutes, caloriesPerServing } = recipe;

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
                      <th>{id}</th>
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

Calculate.propTypes = {
    recipe: PropTypes.object.isRequired,
  handleToCook: PropTypes.func,
};

export default Calculate;
