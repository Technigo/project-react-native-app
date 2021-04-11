import React, { useEffect } from "react";

import { initStorage } from "./utils/helper";
import Quote from "./components/Quote/Quote.component";

const App = () => {
  useEffect(() => {
    initStorage();
  });
  return <Quote />;
};

export default App;
