import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const App = () => {
  const [data,setData] = useState([]);
  const getData = async() =>{
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data);
    console.log(data)
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
      {data.map(function(elem,indx){
        return  <div key={indx}>
           <img src={elem.download_url} alt="image" />
        </div>
      })}
      </div>
    </div>
  )
}

export default App
