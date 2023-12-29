import React from "react";
import { Link } from "react-router-dom";
import Interface from "../interface";
import Historical from "../historical_data";
import Summary from "../summary";
import Options from "../options";
import { useState } from "react";
import Navbar from "../navbar";
import "./company.css"
function Britannia()
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
       <Link to="/BRITANNIA">    </Link>
        <Navbar/>
        <hr></hr>
        <div className="about">
            <h2 className="heading">Britannia Industries Ltd.</h2>
            <h4 className="ticker">TICKER:BRITANNIA.NS</h4>
            <p className="about_com">
            Britannia Industries Limited is an Indian company specialised in food industry, part of the Wadia Group headed by Nusli Wadia.
             Founded in 1892 and headquartered in Kolkata, it is one of India's oldest existing companies and best known for its biscuit products.
              The company sells its Britannia and Tiger brands of biscuits, breads and dairy products throughout India and abroad. Beginning with 
              the circumstances of its takeover by the Wadia Group in the early 1990s, the company has been mired in several controversies 
              connected to its management.


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
export default Britannia