import { createContext,useState } from "react";

export const authContext=createContext()
function AuthProvider({children}) {
    const [auth, setAuth] = useState('login');
    return(
        <authContext.Provider value={{auth,setAuth}}>
        {children}
        </authContext.Provider>
    )
}
export default AuthProvider;