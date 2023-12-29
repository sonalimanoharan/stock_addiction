import { data } from "@tensorflow/tfjs";
import React, { useEffect, useState, } from "react";

import Plot from 'react-plotly.js'
import "./interface.css"

function Interface()
{
   const [ticker,setticker]=useState("")
   const [day,setday]=useState(1)
   
   /*const [data,setdata]=useState({
    date:"",
    prediction:""
   })*/

   const [date,setDate]=useState([])
   const [predict,setpredict]=useState([])
   
   const [plot, setPlot] = useState(0);
   const [isShown,setIsShown]=useState(false)
   
  const res=date.map((x,i)=>({
        Date:x,
        prediction:predict[i]
  }))
   const handle=()=>
   {
    if(!ticker)
    {
        alert("Please Enter the Ticker Symbol .Ticker is mentioned below the company name")
    }
        const data={ticker,day}
        fetch("http://localhost:5000/post",{
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
const getresult=()=>
{
    fetch('http://localhost:5000/predict',{
                    'methods':'GET',
                    headers : {
                      'Content-Type':'application/json'
                    }
                  }).then(response=>response.json()).then(DATA=>{
                    setDate(DATA.Date)
                    setpredict(DATA.prediction)
                  }).catch(error=>console.log(error))
}

const getgraph=()=>
{
    setIsShown(current=>!current)
}
useEffect(()=>
{
    fetch("http://localhost:5000/graph",{"method":"GET"}).then(res=>res.json()).then(data=>{setPlot(data)}).catch(err=>
    {
        console.log(err)
    })
})

    return(
       
        <div className="big_div">
            <br></br>
        <input  className="pred_input" type="text" required placeholder="enter the ticker" value={ticker} onChange={(e)=>{setticker(e.target.value)}}></input>
        <input  className="pred_input" type="text" required placeholder="enter the number of days" value={day} onChange={(e)=>{setday(e.target.value)}}></input>
        <button className="pred_button" type="button" onClick={handle} >enter</button>
        <button className="pred_button" type="button" onClick={getresult} >show</button>
        <button className="pred_button" type="button" onClick={getgraph} >graph</button>
        <div className="value">
       <table className="table_display">
        <tr>
            <th>Date</th>
            <th>Prediction</th>
        </tr>
        {res.map((item,index)=> (<tr key={index}>
            <td>{item.Date}</td>
            <td>{item.prediction}</td>
        </tr>))}
       </table>
            </div>
            <br></br>
            <br></br>
            {isShown&&(<div className="plot"><Plot  className="graph" data={plot.data} layout={plot.layout}/></div>)}
          <br></br>
          <br></br>
        
        </div>
    );
}
export default Interface;
