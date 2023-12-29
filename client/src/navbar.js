import {Link,useMatch,useResolvedPath} from "react-router-dom";
import "./navbar.css";
import img from "./bull.png"


function Navbar(props)
{
   
    return(
        <nav className="navigation">
<img src={img} className="img"></img>
            <ul>
            
            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/news">News</CustomLink>
            </ul>
            <ul>
            <CustomLink to="/">Logout</CustomLink>
            </ul>
        </nav>
        
         
    );
}
export default Navbar;
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
   const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
        {children}
        </Link>
      </li>
   )
  }