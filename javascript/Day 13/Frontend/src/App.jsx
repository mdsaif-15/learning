import { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0);

  const students = [12, 34, 20, 40, 23];

  const increment = () => {
    setCount(count + 1);
    //console.log(count)
  }
  return (
    <>
      <h1>{count}</h1>
      <button className="btn" onClick={increment}>Increment </button>
    </>
  )
}
export default App;
