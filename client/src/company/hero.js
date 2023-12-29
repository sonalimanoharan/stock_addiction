import React from "react";
import { Link } from "react-router-dom";
import Interface from "../interface";
import Historical from "../historical_data";
import Summary from "../summary";
import Options from "../options";
import { useState } from "react";
import Navbar from "../navbar";
import "./company.css"
function Hero()
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
       <Link to="/HEROMOTOCO">    </Link>
        <Navbar/>
        <hr></hr>
        <div className="about">
            <h2 className="heading">Hero MotoCorp Ltd. </h2>
            <h4 className="ticker">TICKER:HEROMOTOCO.NS</h4>
            <p className="about_com">
            Hero MotoCorp Limited (formerly Hero Honda) is an Indian multinational motorcycle and scooter manufacturer headquartered
             in New Delhi. The company is one of the largest two-wheeler manufacturers in the world,as well as in India, where it has 
             a market share of about 37.1% in the two-wheeler industry. As of 27 May 2021, the market capitalization of the company was
              ₹59,600 crore (US$7.5 billion).


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
export default Hero