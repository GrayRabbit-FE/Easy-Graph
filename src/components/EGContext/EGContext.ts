import React, { createContext, useState } from "react"
import { EGContextProps } from "../../typings/Components";
import { RegisterProps } from "../../typings/Custom";

const Register = createContext<RegisterProps>({});

const EGContext:React.FC<EGContextProps> = ({
    children,
    nodes,
    edges,
    options
})=>{
    const [registerItem,setRegisterItem] = useState<RegisterProps>({});
    return (
        <Register.Provider 
            value={{
                ...registerItem,
                setRegisterItem
            }}>
        </Register.Provider>
    )
}
export  { Register }
export default EGContext;