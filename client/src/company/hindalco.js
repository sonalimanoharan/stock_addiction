import React from "react";
import { Link } from "react-router-dom";
import Interface from "../interface";
import Historical from "../historical_data";
import Summary from "../summary";
import Options from "../options";
import { useState } from "react";
import Navbar from "../navbar";
import "./company.css"
function Hindalco()
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
       <Link to="/HINDALCO">    </Link>
        <Navbar/>
        <hr></hr>
        <div className="about">
            <h2 className="heading">Hindalco Industries Ltd. </h2>
            <h4 className="ticker">TICKER:HINDALCO.NS</h4>
            <p className="about_com">
            Hindalco Industries Limited an Indian aluminium and copper manufacturing company, is a subsidiary of the Aditya Birla Group. Its headquarters are at Mumbai, Maharashtra, India.
The company has annual sales of US$25 billion and employs around 20,000 people. It is listed in the Forbes Global 2000 at 895th rank. Its market capitalisation by the end of May 2013 was US$3.4 billion

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
export default Hindalco