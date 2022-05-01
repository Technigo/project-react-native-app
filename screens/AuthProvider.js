import React, { createContext, useState } from "react";

// AuthContext is to allow accessing user and userid from any child components
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userid, setUserid] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        userid,
        setUserid,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
