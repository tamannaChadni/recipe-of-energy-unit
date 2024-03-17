import { CiClock2 } from "react-icons/ci";
import { FaFireAlt } from "react-icons/fa";
import PropTypes from "prop-types";
const Details = ({ recipe,handleToCook }) => {
  const {
    
    name,
    ingredients,
    description,
    prepTimeMinutes,
    caloriesPerServing,
    image,
  } = recipe;

  return (
    <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-xl font-bold">{name}</h2>
        <p className=" border-b-2 ">{description}</p>
        <hr />
        <p className="text-xl font-bold">Ingredients: {ingredients.length}</p>

        <ul className=" border-b-2">
          {ingredients.map((ingredient, idx) => (
            <li className="list-disc" key={idx}>
              {ingredient}
            </li>
          ))}
        </ul>
        <hr />
        <div className="flex  justify-around gap-10 ">
          <div className="flex gap-2 justify-center items-center">
            <CiClock2 />
            <p>
              <span>{prepTimeMinutes}</span>minutes
            </p>
          </div>
          <div className="flex justify-between gap-2 items-center">
            <FaFireAlt />
            <p>
              <span>{caloriesPerServing}</span>calories
            </p>
          </div>
        </div>

        <div className="card-actions">
          <button onClick={()=>handleToCook(recipe)} className="btn bg-green-500">Want to Cook</button>
        </div>
      </div>
    </div>
  );
};
Details.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleToCook:PropTypes.func
};

export default Details;
