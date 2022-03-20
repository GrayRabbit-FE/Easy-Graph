import { RegisterProps } from "../../typings/Custom";
import React, { createContext, useState } from "react";
const Register = createContext<RegisterProps>({});

const EGProvider = () => {
    const [registerItem, setRegisterItem] = useState<RegisterProps>({});
    return (
        <Register.Provider 
            value= {{
                ...registerItem,
                setRegisterItem
            }}>
        </Register.Provider>
    )
}
export { Register };
export default EGProvider;