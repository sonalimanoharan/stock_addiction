import { Button, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import Log from "./log.png"
import "./display.css"
function Display()
{
    return(
        <div className="gif">
        <Link to="/"></Link>
        <div className="main"> 
        <table className="button_table">
            <tr>
                <td><Button  sx={{color:"white",backgroundColor:"#32004f"}}  className="Button" startIcon={<LoginIcon />} href="/login">Login</Button>
                    
                </td>
                <td><Button sx={{color:"white",backgroundColor:"#32004f"}} className="Button" startIcon={<HowToRegIcon />}href="/signin">Sign Up</Button></td>
            </tr>
        </table>
        </div>
        
        </div>
    )
}
export default Display;