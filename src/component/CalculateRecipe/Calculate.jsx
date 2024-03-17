import PropTypes from "prop-types";

const Calculate = ({ recipe }) => {
  const { id, name, prepTimeMinutes, caloriesPerServing } = recipe;

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl rounded-xl">
        <div className="card-body ">
          <h2 className="card-title border-b-2 text-center">
            Want to cook: <span></span>
          </h2>
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
                {/* row 1 */}

                <tr className="bg-base-200">

                      <th>{id}</th>
                      <td>{name}</td>
                      <td>{prepTimeMinutes}</td>
                      <td>{caloriesPerServing}</td>
                 

                  {/* <td>Preparing</td> */}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <h2 className="card-title border-b-2 text-center">
              Currently cooking: 02 <span></span>
            </h2>
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="bg-base-200">
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* 2nd table */}
    </div>
  );
};

Calculate.propTypes = {
    recipe: PropTypes.object.isRequired,
  handleToCook: PropTypes.func,
};

export default Calculate;
