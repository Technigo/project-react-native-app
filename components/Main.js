import React from "react";
import { useSelector } from "react-redux";

// components
import Intro from "./Intro";
import Cards from "./Cards";
import Loading from "./Loading";

const Main = () => {
  const fan = useSelector((store) => store.potter.fan); // fan's value is false so it will render the Intro component first and the Intro component will change the state of the fan's value to true
  const loading = useSelector((store) => store.potter.loading); // loading's value is false but when the API is called in the Intro component, it changes to true and then back to false

  return (
    <>
      {fan ? <Cards /> : <Intro />}
      {loading && <Loading />}
    </>
  );
};
export default Main;
