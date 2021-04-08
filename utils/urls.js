export const API_URL = (dish, ingredients, diet) => `https://api.spoonacular.com/recipes/complexSearch?apiKey=eb703393a6de49e4a55c0cea474ca24c&query=${dish}&number=2&includeIngredients=${ingredients}&diet=${diet}`

export const DETAILS_URL = (id) => `https://api.spoonacular.com/recipes/${id}/information?apiKey=eb703393a6de49e4a55c0cea474ca24c&includeNutrition=false`