import { Register } from "../components/EGProvider/EGProvider";
import { useContext, useMemo } from 'react';
import { CustomElement } from "../typings/Custom";

function useRegister(customElementName?: string, customElement?: CustomElement) {
    const map = useMemo(()=>new Map,[]);
    if(customElementName)
        map.set(customElementName,customElement);
    return (customElementName:string)=>{
        return map.get(customElementName);
    }
    
}

export default useRegister;

