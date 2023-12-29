import React from "react";
import { Link } from "react-router-dom";
import Interface from "../interface";
import Historical from "../historical_data";
import Summary from "../summary";
import Options from "../options";
import { useState } from "react";
import Navbar from "../navbar";

import "./company.css"
function Adanient()
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
       <Link to="/ADANIENT">    </Link>
        <Navbar/>
        <hr></hr>
        <div className="about">
            <h2 className="heading">Adani Enterprises</h2>
            <h4 className="ticker">TICKER:ADANIENT.NS</h4>
            <p className="about_com">
            Adani Enterprises Limited is an Indian multinational publicly listed holding company and a part of Adani Group. 
            It is headquartered in Ahmedabad and primarily involved in mining and trading of coal and iron ore. Through its various subsidiaries, 
            it also has business interests in airport operations, edible oils, road, rail and water infrastructure, data centers,
             and solar manufacturing, among others.
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
export default Adanient