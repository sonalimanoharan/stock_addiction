import React from "react";
import { Link } from "react-router-dom";
import Interface from "../interface";
import Historical from "../historical_data";
import Summary from "../summary";
import Options from "../options";
import { useState } from "react";
import Navbar from "../navbar";
import "./company.css"
function Hcl()
{
    const[show,setshow]=useState(false)
    const[showh,setshowh]=useState(false)
    const [shows,setshows]=useState(false)
    const [showo,setshowo]=useState(false)
    const on_predict=()=>
    {
        setshow(current=>!current)
    }
    const on_history=()=>
    {
        setshowh(current=>!current)
    }
    const on_Summary=()=>
    {
        setshows(current=>!current)
    }
    const on_option=()=>
    {
        setshowo(current=>!current)
    }
    return(
       <>
       <Link to="/HCLTECH">    </Link>
        <Navbar/>
        <hr></hr>
        <div className="about">
            <h2 className="heading">HCL Technologies Ltd. </h2>
            <h4 className="ticker">TICKER:HCLTECH.NS</h4>
            <p className="about_com">
            HCL Technologies Limited, d/b/a HCLTech (formerly Hindustan Computers Limited), is an Indian multinational information technology 
            (IT) services and consulting company headquartered in Noida. It emerged as an independent company in 1991 when HCL entered into the 
            software services business.The company has offices in 52 countries and over 210,966 employees.

            </p>
        </div>
        <div>
            <button  onClick={on_predict} className="extra">  prediction</button>
            <button  onClick={on_history} className="extra">Historical Data</button>
            <button  onClick={on_Summary} className="extra">Summary</button>
            <button  onClick={on_option} className="extra">Options</button>

        </div>
        {show&&(<div><Interface/></div>)}
        {showh&&(<div><Historical/></div>)}
        {shows&&(<div><Summary/></div>)}
        {showo&&(<div><Options/></div>)}
       </>
    )
}
export default Hcl