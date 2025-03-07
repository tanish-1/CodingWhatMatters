import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


function useCurrencyinfo(currency) {
    const [data, setData] = useState({})
    
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
//     useEffect(()=>{
//         fetch(url)
//         .then((response)=>response.json())
//         .then((res)=>setData(res[currency]))
//         console.log(data)
//     },[currency])
//     console.log(data);
//     return data;
// }
useEffect(()=>{
    axios.get(url)
    .then((response)=>setData(response.data[currency]))
    console.log(data)
},[currency])
console.log(data);
return data;
}
export default useCurrencyinfo;