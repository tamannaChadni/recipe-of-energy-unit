import { useState } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Recipe from "./component/Recipe/Recipe";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [wantedRecipes, setWantedRecipes] = useState([]);

  const[cookingTime,setCookingTime] = useState(0);

  const handleToCook = (recipe,time) => {

    const isExist = wantedRecipes.find(item => item.id === recipe.id);
    if (!isExist) {
      const prepRecipe = [...wantedRecipes, recipe];
        setWantedRecipes(prepRecipe);
    } else{
      toast.warning("Already added !");
    }
    
    
    setCookingTime(cookingTime+time)
  };

  // const handleToPreparedRecipe =(recipe) =>{
  //   const currentlyCook =wantedRecipes.filter(item =>item.id !== recipe.id);
  //   setWantedRecipes(currentlyCook);
  //   console.log(currentlyCook);
  // }

  return (
    <>
      <Header></Header>
      <Recipe
      wantedRecipes={wantedRecipes}
      setWantedRecipes={setWantedRecipes}
      cookingTime={cookingTime}
      handleToCook={handleToCook}
      ></Recipe>
      <ToastContainer />
    </>
  );
}

export default App;
