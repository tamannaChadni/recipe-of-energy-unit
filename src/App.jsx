import { useState } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Recipe from "./component/Recipe/Recipe";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [wantedRecipes, setWantedRecipes] = useState([]);

  const handleToCook = (recipe) => {
    const isExist = wantedRecipes.find((item) => item.id === recipe.id);
    if (!isExist) {
      const prepRecipe = [...wantedRecipes, recipe];
      setWantedRecipes(prepRecipe);
    } else {
      toast.warning("Already added !");
    }
  };

  return (
    <>
      <Header></Header>
      <Recipe
        wantedRecipes={wantedRecipes}
        setWantedRecipes={setWantedRecipes}
        handleToCook={handleToCook}
      ></Recipe>
      <ToastContainer />
    </>
  );
}

export default App;
