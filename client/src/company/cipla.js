import React from "react";
import { Link } from "react-router-dom";
import Interface from "../interface";
import Historical from "../historical_data";
import Summary from "../summary";
import Options from "../options";
import { useState } from "react";
import Navbar from "../navbar";
import "./company.css"
function Cipla()
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
       <Link to="/CIPLA">    </Link>
        <Navbar/>
        <hr></hr>
        <div className="about">
            <h2 className="heading">Cipla Ltd.</h2>
            <h4 className="ticker">TICKER:CIPLA.NS</h4>
            <p className="about_com">
            Cipla, as an organisation has been built brick-by-brick on the foundation of care. Caring For Life has always been and continues 
            to remain, our guiding purpose. Driven by the same purpose, we have extended our presence to 80+ countries providing over 1,500
             products across various therapeutic categories in 50+ dosage forms. To make healthcare more affordable globally, we are deepening 
             our presence in the key markets of India, South Africa, the U.S. among other economies of the emerging world.


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
export default Cipla