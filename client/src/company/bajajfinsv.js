import React from "react";
import { Link } from "react-router-dom";
import Interface from "../interface";
import Historical from "../historical_data";
import Summary from "../summary";
import Options from "../options";
import { useState } from "react";import Navbar from "../navbar";
import "./company.css"
function Bajajfinsv()
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
       <Link to="/BAJAJFINSV">    </Link>
        <Navbar/>
        <hr></hr>
        <div className="about">
            <h2 className="heading">Bajaj Finserv Ltd.</h2>
            <h4 className="ticker">TICKER:BAJAJFINSV.NS</h4>
            <p className="about_com">
            Bajaj Finserv Limited is an Indian non-banking financial services company headquartered in Pune. It is focused on lending,
             asset management, wealth management and insurance. The financial services and wind energy businesses were transferred to
              Bajaj Finserv Limited (BFS) as part of the concluded demerger from Bajaj Auto Limited, approved by the High Court of Judicature 
              at Bombay by its order dated 18 December 2007.


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
export default Bajajfinsv