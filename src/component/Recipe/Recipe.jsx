import { useState } from "react";
import Calculate from "../CalculateRecipe/Calculate";
import Details from "../DetailsRecipes/Details";
import { useEffect } from "react";
import PropTypes from "prop-types";

const Recipe = ({ handleToCook, wantedRecipes,cookingTime }) => {


  const [recipes, setRecipes] = useState([]);
   
  





  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  console.log(recipes);

  return (
    <div className="container mt-5">
      {/* heading */}
      <h1 className="text-3xl font-semibold">Our Recipes</h1>
      <p className="mt-2">
        Search and filter through our entire library of delicious recipes.
        <br /> Cherish your loved ones and feed them well.
      </p>
      {/* heading */}
      <div className="grid grid-cols-6 lg:grid-cols-12 gap-4 mt-4">
        {/* left side start */}
        <div className=" col-span-6 lg:col-span-8">
          <div className="grid grid-cols-2 gap-3">
            {recipes.map((recipe) => (
              <Details
                key={recipe.id}
                recipe={recipe}
                handleToCook={handleToCook}
              ></Details>
            ))}
          </div>
        </div>

        {/* left side end */}
        {/* right side start */}

        <div className="col-span-4">
          {/* <Calculate></Calculate> */}
          <div>
            <div className="card  bg-base-100 shadow-xl rounded-xl">
              <div className="card-body ">
                <h2 className="card-title border-b-2 text-center">
                  Want to cook:{cookingTime} <span></span>
                </h2>
                {wantedRecipes.map((recipe) => (
                  <Calculate
                    key={recipe.id}
                    recipe={recipe}
                    handleToCook={handleToCook}
                  ></Calculate>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* right side end */}
      </div>
    </div>
  );
};
Recipe.propTypes = {
  handleToCook: PropTypes.func,
  wantedRecipes: PropTypes.array,
  cookingTime:PropTypes.number
};

export default Recipe;
