import { useState } from "react"

function useLocalStorage  (key: string, mode:string) {
    const [value, setValue] = useState(mode);
    localStorage.setItem(key, value);
   
    return {value, setValue}
}

export default useLocalStorage   