import "@/styles/globals.css";
import AppContext, {
  ContextProvider,
  contextDefaultValues,
} from "../context/AppContext";
import { useContext, useState } from "react";
import { SessionProvider } from "next-auth/react";

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from "./../context/Store"
// import contextData from '@/context/contextData';
export default function App({ Component, pageProps }) {
  const [recipe, setRecipe] = useState({
    recipeBy: "",
    sources: "",
    recipe_drink_type: [],
    ingredients: "",
    steps: "",
    substitues: "",
    about: "",
    nutrition: "",
    tag: [],
    notes: "",
    video: "",
    prep_time: "25min",
    cooking_time: "25min",
    serves: "2",
    difficulity: "Easy",
    title: "",
    media: {},
  });

  const [foodHack, setFoodHack] = useState({
    ingredients: "",
    steps: "",
    substitues: "",
    about: "",
    nutrition: "",
    tag: "",
    notes: "",
    video: "",
    recipe_drink_type: [],
    hackBy: "",
    title: "",
    sources: "",
  });

  const [drink, setDrink] = useState({
    title: "",
    recipe_drink_type: [],
    direction: "",
    ingredients: "",
    media: "",
    substitues: "",
    sources: "",
    tag: [],
    notes: "",
    about: "",
    recipe_by: "",
  });

  const [show, setShow] = useState(false);
  const [showIng, setShowIng] = useState(false);
  const [showDir, setShowDir] = useState(false);
  const [showSources, setShowSources] = useState(false);

  const [sauceData, setSauceData] = useState({
    direction: "",
    ingredients: "",
    video: "",
    substitute: "",
    sources: "",
    tag: [],
    notes: "",
    about: "",
    recipe_sauce_type: [],
    substitues: "",
    title: "",
  });

  const [seasoningData, setSeasoningData] = useState({
    direction: "",
    ingredients: "",
    video: "",
    substitute: "",
    sources: "",
    tag: [],
    notes: "",
    recipe_seasoning_type: [],
    about: "",
    title: "",
  });
  const [searchApiData, setSearchApiData] = useState([])
  const [getAllRecipeData, setGetAllRecipeData] = useState([])
  const [searchRecipe, setSearchRecipe] = useState("")
  const [categories, setCategories] = useState([])
  const [selecteddate, setSelecteddate] = useState("")
  const [selectedTime, setSelectedTime] = useState(null);
  const contextProps = {
    recipe,
    setRecipe,
    drink,
    setDrink,
    sauceData,
    setSauceData,
    foodHack,
    setFoodHack,
    show,
    setShow,
    showIng,
    setShowIng,
    showDir,
    setShowDir,
    showSources,
    setShowSources,
    setSeasoningData,
    seasoningData,
    searchApiData,
    setSearchApiData,
    getAllRecipeData,
    setGetAllRecipeData,
    setCategories,
    searchRecipe,
    setSearchRecipe,
    categories,
    selecteddate,
    setSelecteddate,
    selectedTime,
    setSelectedTime
  };


  return (
    <>
          <Provider store={store}>
      <AppContext.Provider value={contextProps}>
        <SessionProvider>
            <Component {...pageProps} />
        </SessionProvider>
      </AppContext.Provider>
          </Provider>
    </>
  );
}
