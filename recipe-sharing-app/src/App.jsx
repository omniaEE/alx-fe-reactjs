import create from 'zustand'
import AddRecipeForm from './component/AddRecipeForm';
import RecipeList from './component/RecipeList';
const useRecipeStore = create(set => ({
  ["Router", "path", "react-router-dom", "Route", "Routes"]
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes })
}));
