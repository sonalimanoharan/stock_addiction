import React from "react";
import { Link } from "react-router-dom";
import Interface from "../interface";
import Historical from "../historical_data";
import Summary from "../summary";
import Options from "../options";
import { useState } from "react";
import Navbar from "../navbar";
import "./company.css"
function Tcs()
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
       <Link to="/TCS">    </Link>
        <Navbar/>
        <hr></hr>
        <div className="about">
            <h2 className="heading">Tata Consultancy Services Ltd. </h2>
            <h4 className="ticker">TICKER:TCS.NS</h4>
            <p className="about_com">
            Tata Consultancy Services (TCS) is an Indian multinational information technology (IT) services and consulting company with its headquarters in Mumbai. It is a part of the Tata Group and operates in 150 locations across 46 countries. In July 2022, it was reported that TCS had over 600,000 employees worldwide.


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
export default Tcs