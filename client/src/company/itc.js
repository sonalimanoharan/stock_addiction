import React from "react";
import { Link } from "react-router-dom";
import Interface from "../interface";
import Historical from "../historical_data";
import Summary from "../summary";
import Options from "../options";
import { useState } from "react";
import Navbar from "../navbar";
import "./company.css"
function Itc()
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
       <Link to="/ITC">    </Link>
        <Navbar/>
        <hr></hr>
        <div className="about">
            <h2 className="heading">ITC Ltd</h2>
            <h4 className="ticker">TICKER:ITC.NS</h4>
            <p className="about_com">
            TC Limited is an Indian conglomerate company headquartered in Kolkata. ITC has a diversified presence across industries such as FMCG, hotels, software, packaging, paperboards, specialty papers and agribusiness. The company has 13 businesses in 5 segments. It exports its products in 90 countries. Its products are available in 6 million retail outlets.
As of 2019–20, ITC had an annual turnover of US$10.74 billion and a market capitalisation of US$35 billion.

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
export default Itc