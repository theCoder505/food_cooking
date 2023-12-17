import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';
import { AuthSlice } from "./Auth/authSlice";
import { RecipeSlice } from "./recipe/recipeSlice";
import { RoleSlice } from "./role/roleSlice";
import { UserSlice } from "./user/userSlice";
import { DrinkSlice } from "./recipe/drinkSlice";
import { SeasoningSlice } from "./recipe/seasoningSlice";
import { SauceSlice } from "./recipe/sauceSlice";
import { FoodHackSlice } from "./recipe/foodhackSlice";
import { FeedSlice } from "./recipe/feedSlice";
import { MealSlice } from "./meal/mealSlice";
import { LabcareSlice } from "./recipe/labCareSlice";
 
const rootReducer = combineReducers({
  authSlice: AuthSlice,
  recipeSlice : RecipeSlice,
  drinkSlice : DrinkSlice,
  seasoningSlice : SeasoningSlice,
  sauceSlice : SauceSlice,
  roleSlice: RoleSlice,
  user: UserSlice,
  foodHack: FoodHackSlice,
  feed: FeedSlice,
  meal: MealSlice,
  labCare: LabcareSlice,
});

const store = configureStore({
  reducer: {
  authSlice: AuthSlice.reducer,
  recipeSlice: RecipeSlice.reducer,
  roleSlice: RoleSlice.reducer,
  user: UserSlice.reducer,
  drinkSlice : DrinkSlice.reducer,
  seasoningSlice : SeasoningSlice.reducer,
  sauceSlice : SauceSlice.reducer,
  foodHackSlice: FoodHackSlice.reducer,
  feed: FeedSlice.reducer,
  meal: MealSlice.reducer,
  labCare: LabcareSlice.reducer,
  }, 
});

export {
  store,
};

// You don't need to export these, as they are already imported from react-redux
// export const AppDispatch = store.dispatch;
// export const useDispatch = () => useAppDispatch();
// export const useSelector = useAppSelector;
