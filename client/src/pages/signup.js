import "./logsig.css"
import Img from "../Capture.PNG"
import NavBar from "../navbar";
import {React,useState} from "react"
import Axios from 'axios';
import { Link ,useNavigate} from "react-router-dom";

function Signin()
{

    const [uname,setuname]=useState("")
    const [uemail,setuemail]=useState("")
    const [upass,setupass]=useState("")
    
    const navigate=useNavigate()
    const handleSubmit=(e)=>
    {
        e.preventDefault()
        if(!uname)
        {
            alert("Please enter your name")
        }
        else if(!uemail)
        {
            alert("Please enter your email id")
        }
        else if(!upass)
        {
            alert("Please enter the Password")
        }
        else if(upass.length<8)
        {
            alert("Password field requires a minimum of 8 characters and a maximum of 16 characters")
        }
        else if(upass.length>16)
        {
            alert("Password field requires a minimum of 8 characters and a maximum of 16 characters")
        }
        
else{
    Axios.post("http://localhost:3005/register",{
        username:uname,
        useremail:uemail,
        userpassword:upass
    }).then(response=>{
       if(response.data.message)
       {
        if(response.data.message=="Account have been created successfully")
        {
            alert(response.data.message)
            navigate("/home")
        }
        else{
            alert(response.data.message)
        }
                
       }
        
    });
}
       
        
    };

    return(
        <><div className="hidden"><NavBar/></div>
      <hr></hr>
        <div className="logcontainer">
           
            <form className="content" >
            <h1 className="formtitle">Sign In</h1>
            
            <div className="form" >
                <div className="forngrp">
                <label className="log_label" htmlFor="uname">Name</label>
                <br></br>
                
                <input type="text"  name="uname" id="uname"  onChange={(e)=>{setuname(e.target.value)}} required></input>
                
                </div>
                <div className="forngrp">
                <label className="log_label" htmlFor="uemail">Email</label>
                <br></br>
                <input type="email" name="uemail" id="uemail"  onChange={(e)=>{setuemail(e.target.value)}} required></input>
                
                </div>
                <div className="forngrp">
                <label className="log_label" htmlFor="pass">Password</label>
                <br></br>
                <input type="password"  name="pass" id="pass"  minLength={8} maxLength={16} onChange={(e)=>{setupass(e.target.value)}} required ></input>
                </div>
            </div>
            <div className="footer">
                
                <button onClick={handleSubmit} >Sign In</button>
               
            </div>
            <p className="shift">Already have an account <Link to="/login" className="log_link">Login</Link></p>
            </form>
           
        </div>
        </>
    );
}
export default Signin;
