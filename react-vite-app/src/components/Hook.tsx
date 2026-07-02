// import useCounter from "../hooks/useCounter";
import useLocalStorage from "../hooks/useLocalStorage";
const Hook = () => {
    // const {count, increment, decrement, reset} = useCounter(0);
    const {value, setValue} = useLocalStorage("them", "light") 
    console.log("value", value);
       
    return (
    <div>
        <h1>Hook</h1>
        {/* <button onClick={increment}>Increase</{value}button> */}
        <button onClick={()=>setValue("light")}>mode</button>
    </div>
)
}

export default Hook;