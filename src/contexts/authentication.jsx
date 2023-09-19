import { createContext, useContext } from "react";

const authCtx = createContext();

const AuthProvider = ({ children }) => {
  const value = {};

  return <authCtx.Provider value={value}>{children}</authCtx.Provider>;
};

const useAuth = () => {
  const context = useContext(authCtx);
  if (context === undefined)
    throw new Error("Context used outside of provider!");
  return context;
};

export { AuthProvider, useAuth };
