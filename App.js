import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
// component
import Main from "./components/Main";

// Reducer
import { potter } from "./reducers/potter";

//Redux setup to combine all reducers
const reducer = combineReducers({
  potter: potter.reducer,
});
const store = configureStore({ reducer });


// Function
const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;



// we must import Core components to be able to use them and styled-components/native
