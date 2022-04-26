import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./HomeStack";
import AuthStack from "./AuthStack";
import { AuthContext } from "./AuthProvider";

const Routes = () => {
  const { user, setUser } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
