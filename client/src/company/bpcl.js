import React from "react";
import { Link } from "react-router-dom";
import Interface from "../interface";
import Historical from "../historical_data";
import Summary from "../summary";
import Options from "../options";
import { useState } from "react";import Navbar from "../navbar";
import "./company.css"
function Bpcl()
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
       <Link to="/BPCL">    </Link>
        <Navbar/>
        <hr></hr>
        <div className="about">
            <h2 className="heading">Bharat Petroleum Corporation Ltd.</h2>
            <h4 className="ticker">TICKER:BPCL.NS</h4>
            <p className="about_com">
            Bharat Petroleum Corporation Limited (BPCL) is an Indian central public sector undertaking under the ownership of Ministry of 
            Petroleum and Natural Gas, Government of India. It operates three refineries in Bina, Kochi and Mumbai. BPCL is India's second-largest
             government-owned downstream oil producer, whose operations are overseen by the Ministry of Petroleum and Natural Gas. It was ranked 
             309th on the 2020 Fortune list of the world's biggest public sector undertakings, and 792nd on Forbes's 2021 "Global 2000" list.



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
export default Bpcl