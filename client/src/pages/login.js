import "./logsig.css"
import Img from "../Capture.PNG"
import NavBar from "../navbar";
import { useState,useEffect } from "react";
import Axios from "axios";
import { Link,useNavigate } from "react-router-dom";


function Login()
{
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const[loginStatus,setloginStatus]=useState(
        {
            username:""
        }
    );
    const navigate=useNavigate()
    
    Axios.defaults.withCredentials=true
    const login=(e)=>
    {
        e.preventDefault()
        if(!email)
        {
            alert("Email field cannot be empty")
        }
        else if(!password)
        {
            alert("Password field cannot be empty")
        }
       
        else{
            Axios.post("http://localhost:3005/login",{
            
            useremail:email,
            userpassword:password
        }).then((response)=>
        {
            
            if(response.data.message)
            {
                
                
                if(response.data.message=="You have logged in successfully")
                {
                    alert(response.data.message)
                    
                    navigate("/home")
                }
                else{
                    alert(response.data.message)
                }
               
               
            }
            /*else{
                console.log(response.data[0].useremail);
            }*/
        });
        }
    };
    useEffect(()=>
        {
            Axios.get("http://localhost:3005/login").then((response=>
            {
                if(response.data.loggedIn==true)
                {
                    setloginStatus(response.data.user[0].user_name)
                    
                }
            }))
            
        })
        
   const display_name=JSON.stringify(loginStatus)
   console.log(display_name)
    return(
        <>
        <div className="hidden"><NavBar display_name={display_name} /></div>
        
        <hr></hr>
        <div className="logcontainer">
            
           
            <form className="content" onSubmit={login}>
            <h1 className="formtitle">Login</h1>
           
            <div className="form">
                
                <div className="forngrp">
                <label className="log_label" htmlFor="uemail">Email</label>
                <br></br>
                <input type="email" id="uemail"  onChange={(e)=>{setemail(e.target.value)}}></input>
                
                </div>
                <div className="forngrp">
                <label  className="log_label" htmlFor="pass">Password</label>
                <br></br>
                <input type="password" id="pass"  minLength={8} maxLength={16} onChange={(e)=>{setpassword(e.target.value)}}></input>
                </div>
            </div>
            <div className="footer">
                <button type ="submit" >Login</button>
             
            </div>
            <div> 
            <p className="shift">Don't have an account? <Link to="/signin" className="log_link">Sign Up</Link></p>
            </div>
            </form>
           
        </div>
        </>
    );
}
export default Login;