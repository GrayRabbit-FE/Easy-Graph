import { Register } from "../components/EGProvider/EGProvider";
import { useContext } from 'react';
import { CustomElement } from "../typings/Custom";

function useRegister() {
    const register = (customElementName: string, customElement: CustomElement) => {
        const rigisterContext = useContext(Register);
        const { setRegisterItem } = rigisterContext;
        setRegisterItem!({
            ...rigisterContext,
            [customElementName]: customElement
        });
    }
    return {
        register
    }
}

export default useRegister;