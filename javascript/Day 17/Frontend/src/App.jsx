import { useState } from 'react';
import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);
  async function getData() {
    const res = await axios.get("https://fakestoreapi.com/products/");
    console.log(res.data)
    useEffect(() => {
      getData();
    }, []);
  }
  // getData()
  return (<>
    <button onClick={getData}></button>
    <div className="card-div">
      {data.map((item) => {
        return <Cards key={item.id} data={item} />;
      })}
    </div>

  </>)
}

export default App
