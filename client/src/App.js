import './App.css';
//import NavBar from "./navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/about"
import News from "./pages/news"
import Login from "./pages/login"
import Signin from "./pages/signup"
//import { useState } from 'react';
import Infy from './company/infy';
import Adanient from './company/adanient';
import Adaniports from './company/adaniports';
import Asianpaint from './company/asianpaint';
import Apollohosp from './company/apollohosp';
import Axisbank from './company/axisbank';
import Bajaj_auto from './company/bajaj_auto';
import Bajfinance from './company/bajfinance';
import Bajajfinsv from './company/bajajfinsv';
import Bpcl from './company/bpcl';
import Bhartiartl from './company/bhartiartl';
import Display from "./display"
import Britannia from './company/britannia';
import Cipla from './company/cipla';
import Coal from './company/coal';
import Divi from './company/divi';
import Drreddy from './company/dr_reddy';
import Eicher from './company/eicher';
import Grasim from './company/grasim';
import Hcl from './company/hcl';
import Hdfc from './company/hdfc';
import Hlife from './company/hlife';
import Hero from './company/hero';
import Hindalco from './company/hindalco';
import Unilever from './company/unilever';
import Itc from './company/itc';
import Tcs from './company/tcs';
import Wipro from './company/wipro';
function App() {
  
  return (
    
    <>
    
    <div className='container'>
        <Routes >
          <Route path="/" element={<Display/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signin" element={<Signin/>}/>

          <Route path="/INFY" element={<Infy/>}/>
          <Route path="/ADANIENT" element={<Adanient/>}/>
          <Route path="/ADANIPORTS" element={<Adaniports/>}/>
          <Route path="/ASIANPAINT" element={<Asianpaint/>}/>
          <Route path="/APOLLOHOSP" element={<Apollohosp/>}/>
          <Route path="/AXISBANK" element={<Axisbank/>}/>
          <Route path="/BAJAJ-AUTO" element={<Bajaj_auto/>}/>
          <Route path="/BAJFINANCE" element={<Bajfinance/>}/>
          <Route path="/BAJAJFINSV" element={<Bajajfinsv/>}/>
          <Route path="/BPCL" element={<Bpcl/>}/>
          <Route path="/BHARTIARTL" element={<Bhartiartl/>}/>
          <Route path="/BRITANNIA" element={<Britannia/>}/>
          <Route path="/CIPLA" element={<Cipla/>}/>
          <Route path="/COALINDIA" element={<Coal/>}/>
          <Route path="/DIVISLAB" element={<Divi/>}/>
          <Route path="/DRREDDY" element={<Drreddy/>}/>
          <Route path="/EICHERMOT" element={<Eicher/>}/>
          <Route path="/GRASIM" element={<Grasim/>}/>
          <Route path="/HCLTECH" element={<Hcl/>}/>
          <Route path="/HDFCBANK" element={<Hdfc/>}/>
          <Route path="/HDFCLIFE" element={<Hlife/>}/>
          <Route path="/HEROMOTOCO" element={<Hero/>}/>
          <Route path="/HINDALCO" element={<Hindalco/>}/>
          <Route path="/HINDUNILVR" element={<Unilever/>}/>
          <Route path="/ITC" element={<Itc/>}/>
          <Route path="/TCS" element={<Tcs/>}/>
          <Route path="/WIPRO" element={<Wipro/>}/>










        </Routes>
    </div>
    </>
      
     
    
  );
}

export default App;
