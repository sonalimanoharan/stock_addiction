import React from "react";
import { Link } from "react-router-dom";
import Interface from "../interface";
import Historical from "../historical_data";
import Summary from "../summary";
import Options from "../options";
import { useState } from "react";
import Navbar from "../navbar";
import "./company.css"
function Unilever()
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
       <Link to="/HINDUNILVR">    </Link>
        <Navbar/>
        <hr></hr>
        <div className="about">
            <h2 className="heading">Hindustan Unilever Ltd.</h2>
            <h4 className="ticker">TICKER:HINDUNILVR.NS</h4>
            <p className="about_com">
            Hindustan Unilever Limited (HUL) is a British-owned Indian consumer goods company headquartered in Mumbai. It is a subsidiary of the British company Unilever. Its products include foods, beverages, cleaning agents, personal care products, water purifiers and other fast-moving consumer goods (FMCGs).
HUL was established in 1931 as Hindustan Vanaspati Manufacturing Co. Following a merger of constituent groups in 1956, it was renamed Hindustan Lever Limited. The company was renamed again in June 2007 as Hindustan Unilever Limited.

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
export default Unilever