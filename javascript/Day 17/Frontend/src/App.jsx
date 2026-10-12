import { useState, useEffect } from 'react';
import axios from "axios";
import "./App.css"
import Cards from './Components/Cards';
const App = () => {
  const [data, setData] = useState([]);
  async function getData() {
    const res = await axios.get("https://fakestoreapi.com/products/");
    console.log(res.data)
    // useEffect(() => {
    //   getData();
    // }, []);
  }
  // getData()
  return (<>
    <button className='btn' onClick={getData}>Get Data</button>
    <div className="card-div">
      {data.map((item) => {
        return <Cards key={item.id} data={item} />;
      })}
    </div>

  </>)
}

export default App
