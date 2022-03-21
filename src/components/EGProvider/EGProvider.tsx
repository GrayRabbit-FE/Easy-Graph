import { RegisterProps } from "../../typings/Custom";
import React, { createContext, useState } from "react";
const Register = createContext<RegisterProps>({});

const EGProvider:React.FC = ({
    children
}) => {
    const [registerItem, setRegisterItem] = useState<RegisterProps>({});
    return (
        <Register.Provider
            value={{
                ...registerItem,
                setRegisterItem
            }}>
        {
            children
        }
        </Register.Provider>
    )
}
export { Register };
export default EGProvider;