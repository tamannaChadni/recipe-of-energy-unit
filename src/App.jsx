import { useState } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Recipe from "./component/Recipe/Recipe";

function App() {
  const [wantedRecipes, setWantedRecipes] = useState([]);

  const handleToCook = (recipe) => {
    // console.log('added');
    const prepRecipe = [...wantedRecipes, recipe];
    setWantedRecipes(prepRecipe);
  };

  return (
    <>
      <Header></Header>
      <Recipe
      wantedRecipes={wantedRecipes}
      handleToCook={handleToCook}></Recipe>
    </>
  );
}

export default App;
