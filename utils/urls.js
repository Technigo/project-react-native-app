export const API_URL = (dish, cuisine, diet) => `https://api.spoonacular.com/recipes/complexSearch?apiKey=91dcb053f00c411691c398e694c12762&query=${dish}&number=2&cuisine=${cuisine}&diet=${diet}`

export const DETAILS_URL = (id) => `https://api.spoonacular.com/recipes/${id}/information?apiKey=91dcb053f00c411691c398e694c12762&includeNutrition=false`