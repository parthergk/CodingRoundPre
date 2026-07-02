import { useState } from "react"

function useCounter  (value: number) {
    const [count, setCount] = useState(value);
    const allOp = {
        count: count,
        increment: () => setCount(count + 1),
        decrement: () => setCount(count - 1),
        reset: () => setCount(0)
    }
    return {...allOp}
}

export default useCounter   