import React, { useState } from "react";
import { Link } from "react-router-dom";
import Interface from "../interface";
import Historical from "../historical_data";
import Navbar from "../navbar";
import "./company.css"
import { Button } from "@mui/material";
import Summary from "../summary";
import Options from "../options";
function Infy()
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
       <Link to="/INFY">    </Link>
        <Navbar/>
        <hr></hr>
        <div className="about">
            <h2 className="heading">Infosys</h2>
            <h4 className="ticker">TICKER:INFY</h4>
            <p className="about_com">
            Infosys Limited is an Indian multinational information technology company that provides business consulting,
             information technology and outsourcing services. The company was founded in Pune and is headquartered in Bangalore.
             Infosys is the second-largest Indian IT company, after Tata Consultancy
             Services, by 2020 revenue figures, and the 602nd largest public company in the world, according to the Forbes Global 2000 ranking.
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
export default Infy