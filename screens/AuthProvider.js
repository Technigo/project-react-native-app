import React, { createContext, useState } from "react";

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
