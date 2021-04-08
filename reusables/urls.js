export const SEARCH_URL = (searchWord, filter) => {
  if(filter){
    return `https://api.edamam.com/search?app_key=49322bb17c2cc17cc38519c150fae5bd&app_id=87fc4ce0&from=0&to=30&q=${searchWord}&ingr=5`
  } else{ 
    return `https://api.edamam.com/search?app_key=49322bb17c2cc17cc38519c150fae5bd&app_id=87fc4ce0&from=0&to=30&q=${searchWord}`}
  
}


export const SEARCH_RECIPE = (recipeID) => {
 const encodedURI = encodeURIComponent(recipeID)
  return `https://api.edamam.com/search?app_key=49322bb17c2cc17cc38519c150fae5bd&app_id=87fc4ce0&from=0&to=30&r=${encodedURI}`
}