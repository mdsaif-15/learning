import { useState } from 'react';
import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);
  async function getData() {
    const res = await axios.get("https://fakestoreapi.com/products/");
    console.log(res.data)
    
  }
  // getData()
  return (<>
    <button onClick={getData}></button>

  </>)
}

export default App
