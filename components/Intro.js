import React from "react";
import { useDispatch, useSelector } from "react-redux";
// Reducer potter
import { potter } from "../reducers/potter";
// Core components
// import { View, Text, TextInput } from 'react-native';
import { renderCards } from "../reducers/potter"


const Intro = () => {
    const dispatch = useDispatch();
    const intro = useSelector((store) => store.potter.intro);


  const handleSubmit = (event) => {
      console.log("AaAA");
    event.preventDefault();
    dispatch(renderCards());
    dispatch(potter.actions.setIntro(false));

  };

  const handleInputChange = (event) => {
      dispatch(potter.actions.setUsername(event.target.value));
  };

  return (
    <>
      <h1>Welcome to HarryPotter</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="type your name..."
          onChange={handleInputChange}
        />
        <button type="submit">submit</button>
      </form>
    
    </>
  );
};
export default Intro;
