import React,{useEffect, useRef, useState} from "react"
import NavBar from "../navbar"
import SearchBar from "../components/Searchbox"
import NiftyData from "../data.json"
import ReactPlayer from "react-player"
import "./Home.css"
//import { height } from "@mui/system";
const VIDEO_PATH = 'https://neptune.ai/wp-content/uploads/2023/02/HOLO_SOLO_X2_06.webm'
function Home()
{
    const playerRef = useRef(null);
    const [stats,setstats]=useState("closed")
    useEffect(()=>
    {
        fetch('http://localhost:5000/status',{
                    'methods':'GET',
                    headers : {
                      'Content-Type':'application/json'
                    }
                  }).then(response=>response.json()).then(DATA=>{
                    setstats(DATA.status)
                  }).catch(error=>console.log(error))
    })
    return(
        <>
        <NavBar/>
        <hr></hr>
       <h3 className="status">Market Status : {stats}</h3>
        <div >
        
            <h1 className="webtitle">StockAddiction</h1>
        <SearchBar placeholder="company or ticker" data={NiftyData}/>
        </div>
        <br></br>
        <br></br>
        <div className="video">
            <ReactPlayer ref={playerRef}  playing={true} loop={true} url={VIDEO_PATH} ></ReactPlayer>
        </div>
        
        </>
    );
}
export default Home;