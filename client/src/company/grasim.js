import React from "react";
import { Link } from "react-router-dom";
import Interface from "../interface";
import Historical from "../historical_data";
import Summary from "../summary";
import Options from "../options";
import { useState } from "react";
import Navbar from "../navbar";
import "./company.css"
function Grasim()
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
       <Link to="/GRASIM">    </Link>
        <Navbar/>
        <hr></hr>
        <div className="about">
            <h2 className="heading">Grasim Industries Ltd.</h2>
            <h4 className="ticker">TICKER:GRASIM.NS</h4>
            <p className="about_com">
            Grasim Industries Limited, a flagship company of UD $ 60 billion Aditya Birla Group, was established as a textiles manufacturer
             in India in 1947. Today, it is a leading global player in VSF and a prominent producer of Chlor-Alkali, Advanced Material, Linen 
             Yarn and Fabrics in India. Grasim recently ventured into the paints business and also setting up a B2B online market place for 
             building materials. It is also the largest cement producer and a prominent diversified financial services player in India through 
             its subsidiaries UltraTech Cement and Aditya Birla Capital.


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
export default Grasim