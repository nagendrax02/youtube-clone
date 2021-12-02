import { createContext,  useState } from "react";

export const Context = createContext({})

function ContextProvider({children}){

    const [hamburgerChange,setHamburgerChange] = useState(false)

    const handlecheckLogin=()=>{
        setHamburgerChange(!hamburgerChange)
    }

    return(
        <Context.Provider value={{hamburgerChange,handlecheckLogin}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;