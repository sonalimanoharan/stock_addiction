
import NavBar from "../navbar";
import "./reg.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import about_image from "../lli.png"
export default function About()
{
    return( 
        <>
    <NavBar/>
   <hr></hr>
   <h1 className="webtitle1">StockAddiction</h1>
   <br></br>
   <p className="about1">StockAddiction ,the purpose is to predict the future value of the financial stocks of a company.The recent trend in stock market prediction technologies is the machine learning to predict stock values. 
   Here, in stock market consist of many numbers of company shares along with prices in stock market every minute stock price will changes depending on the company environment and country economic structure decisions.
   The sharp edges indicate technology, precision and efficiency. The shape also amplifies StockAddiction's tradition of collaboration. The internal vectors depict StockAddiction's DNA of continuously pushing boundaries.
   Our robust state-of-the-art technology platform offers high levels of robustness, safety and resilience for trading and investment opportunities across all asset classes and for all categories of investors. StockAddiction
    is focused on investor protection and disciplined development of the Indian capital market landscape.
   </p>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <div className="ab_img"><img src={about_image} width={300}></img></div>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <footer className="footer1">
    <table className="contact">
        <tr>
            <td>Contact us</td>
            <td>+91 9859564563<br></br>+91 8654356547</td>
            <td>Terms of Use</td>
        </tr>
        <tr>
            <td>Address</td>
            <td>3, Dr Thomas road,1st cross street,<br></br>Info city global park, <br></br>Perungudi,Chennai</td>
            <td>Disclaimer</td>
        </tr>
        <tr>
        <td>Follow Us</td>
        <td><InstagramIcon className="h"/>  <FacebookIcon className="h"/>  <TwitterIcon className="h"/> <TelegramIcon className="h"/></td>
        <td>Copyrights</td>
        </tr>
    </table>
   </footer>
    </>)
}