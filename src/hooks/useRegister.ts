import { useMemo } from 'react';
import { CustomElement } from "../typings/Custom";

function useRegister(customElementName: string, customElement?: CustomElement) {
    const map = useMemo(()=>new Map,[]);
    if(customElement)
        map.set(customElementName,customElement);
    else
        return map.get(customElementName);
}

export default useRegister;

