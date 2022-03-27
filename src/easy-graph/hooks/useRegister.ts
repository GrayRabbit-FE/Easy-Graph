import { useContext, useMemo, useState } from 'react';
import { CustomElement } from "../typings/Custom";
import { Register } from '../components/EGProvider/EGProvider';

function useRegister(customElementName: string|{
    [props:string]:CustomElement,
}) {

    
    const registerContext = useContext( Register );
    if(typeof customElementName !== 'string'){
        for(const key in customElementName){
            registerContext[key] = customElementName[key];
        }
        console.log(registerContext);
    }
    else
        return registerContext[customElementName];
}

export default useRegister;

