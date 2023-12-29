import React from "react";
import { Link } from "react-router-dom";
import Interface from "../interface";
import Historical from "../historical_data";
import Summary from "../summary";
import Options from "../options";
import { useState } from "react";import Navbar from "../navbar";
import "./company.css"
function Bajfinance()
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
       <Link to="/BAJFINANCE">    </Link>
        <Navbar/>
        <hr></hr>
        <div className="about">
            <h2 className="heading">Bajaj Finance Ltd.</h2>
            <h4 className="ticker">TICKER:BAJFINANCE.NS</h4>
            <p className="about_com">
            Bajaj Finance Limited (BFL), a subsidiary of Bajaj Finserv, is an Indian non-banking financial company headquartered in Pune. 
            Originally incorporated as Bajaj Auto Finance Limited on March 25, 1987, as a non-banking financial company, primarily focused 
            on providing two and three-wheeler finance.After 11 years in the auto finance market, Bajaj Auto Finance Ltd launched its initial 
            public issue of equity share and was listed on the Bombay Stock Exchange and National Stock Exchange of India.
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
export default Bajfinance