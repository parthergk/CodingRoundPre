import { useCallback, useMemo, useState } from 'react'
import Child from './components/Child'
import Hook from './components/Hook';

function App() {
  const [count, setCount] = useState(0)

  const hanleChild = useCallback(() => {
    console.log("hi child i am parent");
  }, [])

  const user = useMemo(()=>{
    return {name:"gaurav"}
  },[])
  return (
    <div className="dark">
      <button onClick={() => {setCount(count+1)}}>Increment</button>
      <div>count: {count}</div>
      <Child name={hanleChild}/>
      <Hook/>
    </div>
  )
}

export default App