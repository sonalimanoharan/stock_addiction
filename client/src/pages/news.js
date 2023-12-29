import { Button } from "@mui/material";
import NavBar from "../navbar";
import Axios from "axios";
import { useState } from "react";
import {Carousel} from "react-responsive-carousel"
import "./news.css"
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function News()
{
   const [data,setdata]=useState()
    const fetch_news=()=>
    {
        Axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=42a0f3e51f0c4b2b84968a21d0ac8f9e").then((response)=>
        {
            setdata(response.data.articles)
        })
    }
   
    return(
        <>
        <NavBar/>
        <hr></hr>
        <div><Button onClick={fetch_news} sx={{color:"white",backgroundColor:"#32004f"}}  className="news_button">Fetch the latest use</Button></div>
        <Carousel>
        
            {data?.map((value,i)=>{
                return(
                   
                        
                    <div key={i} className="card" >
        <img src={value.urlToImage} className="card-img-top" alt="pic" width={800} height={400}/>
  <div className="card-body">
    <h5 className="card-title">{value.title}</h5>
    <p className="card-text">{value.description}</p>
    <a href={value.url} className="link">Open</a>
  </div>
        </div>
                )
                })}
       </Carousel>
        </>
    ) 
}