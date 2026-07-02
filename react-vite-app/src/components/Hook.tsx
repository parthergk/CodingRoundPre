import useCounter from "../hooks/useCounter";
const Hook = () => {
    const {count, increment, decrement, reset} = useCounter(0);
    console.log("count in hook", count);
    
    return (
    <div>
        <h1>Hook</h1>
        <button onClick={increment}>Increase</button>
        
    </div>
)
}

export default Hook;