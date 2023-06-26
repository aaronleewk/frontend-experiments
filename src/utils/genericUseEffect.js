import { useEffect } from "react";
import axios from "axios";

export function genericUseEffect(func, setState, cleanUp, dependencies){

    useEffect(() => {

        try{

            (async () => { 

                const x = await func();

                setState(x.data);
                
            })();

        } catch (error) {
            console.log(error)
        }
    
        return () => {cleanUp};
    
    },dependencies);

    return cleanUp
}