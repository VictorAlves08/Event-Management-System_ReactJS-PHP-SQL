import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

const AuthProvider = ({children})=>{
  const [userData, setUserData] = useState({
    name: null,
    email: null,
    passwaord: null
  });

  return(
    <AuthContext.Provider value={{userData}}>
      <>
        {children}
      </>
    </AuthContext.Provider>
  )
};

const useAuth = () =>{
  const context = useContext(AuthContext);
  return context;
}

export {AuthProvider, AuthContext, useAuth};
