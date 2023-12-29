import React from "react";
import { Link } from "react-router-dom";
import Interface from "../interface";
import Historical from "../historical_data";
import Summary from "../summary";
import Options from "../options";
import { useState } from "react";
import Navbar from "../navbar";
import "./company.css"
function Hdfc()
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
       <Link to="/HDFCBANK">    </Link>
        <Navbar/>
        <hr></hr>
        <div className="about">
            <h2 className="heading">HDFC Bank Ltd.</h2>
            <h4 className="ticker">TICKER:HDFCBANK.NS</h4>
            <p className="about_com">
            HDFC Bank Limited (also known as HDB) is an Indian banking and financial services company headquartered in Mumbai. 
            It is India's largest private sector bank by assets and world's 10th largest bank by market capitalisation as of April 2021.
             It is the third largest company by market capitalisation of $127.16 billion on the Indian stock exchanges. 20It is also the
              fifteenth largest employer in India with nearly 150,000 employees.


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
export default Hdfc