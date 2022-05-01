import React from "react";
import { AuthProvider } from "./screens/AuthProvider";
import Routes from "./screens/Routes";

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
