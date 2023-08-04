import { useState, useEffect} from 'react'

const Fetch = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((data) => data.json())
      .then((json) => setData(json.quotes.slice(0,10)));
  },[]);

  console.log(data);
  return (
    <div>
        {data.map((element, index) => (
        <div key={index} style={{ backgroundColor: "lightcoral" }}>
          <h1>{element.quotes}</h1>
        </div>
      ))}
    </div>
  )
}

export default Fetch