import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);
export const AuthSetterContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={user}>
      <AuthSetterContext.Provider value={setUser}>
        {children}
      </AuthSetterContext.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
