import React from "react";
import { Link } from "react-router-dom";
import Interface from "../interface";
import Historical from "../historical_data";
import Summary from "../summary";
import Options from "../options";
import { useState } from "react";
import Navbar from "../navbar";
import "./company.css"
function Asianpaint()
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
       <Link to="/ASIANPAINT">    </Link>
        <Navbar/>
        <hr></hr>
        <div className="about">
            <h2 className="heading">Asian Paints Ltd.</h2>
            <h4 className="ticker">TICKER:ASIANPAINT.NS</h4>
            <p className="about_com">
            Asian Paints Ltd is an Indian multinational paint company, headquartered in Mumbai, Maharashtra, India.
            The company is engaged in the business of manufacturing, selling and distribution of paints, coatings, products related to home décor,
             bath fittings and providing of related services.
            Asian Paints is India's largest paints company by market share.It is the holding company of Berger International.

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
export default Asianpaint