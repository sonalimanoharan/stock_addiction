import React, { useEffect } from "react";
import { useState } from "react";
//import Plot from "react-plotly.js";
import "./historical.css"
function Historical()
{
    const options=["1d","5d","1mo","3mo","6mo","1y","2y","5y","10y","max"]
    
    const [ht,setht]=useState("")
    const[open,setopen]=useState([])
    console.log(open)
    const[close,setclose]=useState([])
    const[high,sethigh]=useState([])
    const[low,setlow]=useState([])
    const[vol,setvol]=useState([])
    const [selected, setSelected] = useState(options[0]);
   
    const res=open.map((x,i)=>(
    {
        Open:x,
        Close:close[i],
        High:high[i],
        Low:low[i],
        Volume:vol[i]
    }))
    
    const history=()=>
    {
        if(!ht)
        {
            alert("Please Enter the Ticker Symbol .Ticker is mentioned below the company name")
        }
        const data={ht,selected}
        fetch("http://localhost:5000/hist",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },body:JSON.stringify(data)
        }).then(response=>
            {
                console.log(response)
            }).catch(error=>
                {
                    console.log(error)
                })
    }
    const get_val=()=>
    {
        fetch('http://localhost:5000/hist_get',{
                    'methods':'GET',
                    headers : {
                      'Content-Type':'application/json'
                    }
                  }).then(response=>response.json()).then(DATA=>{
                    setclose(DATA.Close)
                    setopen(DATA.Open)
                    sethigh(DATA.High)
                    setlow(DATA.Low)
                    setvol(DATA.Volume)
                  }).catch(error=>console.log(error))
    }
  
    
    return(
        <div className="hist_div">
            <br></br>
            <br></br>
        <input type="text" placeholder="enter the ticker" onChange={(e)=>{setht(e.target.value)}} pattern="[A-Z]" />
        <select className="hpred_button" value={selected} 
       onChange={e => setSelected(e.target.value)} required>
        {options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
       </select>
       <button onClick={history} className="hpred_button">enter</button>
        <button onClick={get_val} className="hpred_button">Get historical data</button>
        <br></br>
    <table className="htable_display">
    <tr>
            <th>Open</th>
            <th>Close</th>
            <th>High</th>
            <th>Low</th>
            <th>Volume</th>
        </tr>
        {res.map((value,i)=>(
            <tr key={i}>
                <td>{value.Open}</td>
                <td>{value.Close}</td>
                <td>{value.High}</td>
                <td>{value.Low}</td>
                <td>{value.Volume}</td>
            </tr>
        ))}
    </table>
        </div>
    )
}
export default Historical