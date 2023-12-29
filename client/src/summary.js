import React, { useEffect, useState } from "react";
import "./summary.css"
function Summary()
{
    const [att,setatt]=useState([])
    const[val,setval]=useState([])
   const res=att.map((y,i)=>(
   {
    Attributes:y,
    Value:val[i]
   }))
   useEffect(()=>
   {
    fetch('http://localhost:5000/summary',{
                    'methods':'GET',
                    headers : {
                      'Content-Type':'application/json'
                    }
                  }).then(response=>response.json()).then(DATA=>{
                    setatt(DATA.attribute)
                    setval(DATA.value)
                  }).catch(error=>console.log(error))
   })
   /* const get_sum=()=>
    {
        fetch('http://localhost:5000/summary',{
                    'methods':'GET',
                    headers : {
                      'Content-Type':'application/json'
                    }
                  }).then(response=>response.json()).then(DATA=>{
                    setatt(DATA.)
                    setval(DATA.value)
                  }).catch(error=>console.log(error))
    }*/
    return(
        < div className="display">
            <br></br><br></br>
        <table className="stable_display">
            {res.map((value,i)=>(<tr key={i}>
                <td className="heading">{value.Attributes}</td>
                <td>{value.Value}</td>
            </tr>))}
        </table>
        </div>
    )
}
export default Summary