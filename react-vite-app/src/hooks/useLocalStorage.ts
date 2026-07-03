import { useEffect, useState } from "react"

function useLocalStorage  (key: string, mode:string) {
    
    const [value, setValue] = useState(() => {
        const stored = localStorage.getItem(key)
        return stored || mode
    });

    useEffect(()=>{
        localStorage.setItem(key, value);
    },[key, value])
   
    return {value, setValue}
}

export default useLocalStorage   