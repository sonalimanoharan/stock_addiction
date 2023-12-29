import React,{useState} from "react";
import "./Searchbox.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
function SearchBar({placeholder,data})
{
    const[filteredData,setfilteredData]=useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
          return value.CompanyName.toLowerCase().includes(searchWord.toLowerCase());
        });
        
    
        if (searchWord === "") {
          setfilteredData([]);
        } else {
          setfilteredData(newFilter);
        }
      };
    
      const clearInput = () => {
        setfilteredData([]);
        setWordEntered("");
      };
    
    return(
        <div className="search">
           
        <div className="searchInput">
        
            <input type="text" placeholder={placeholder}  value={wordEntered} onChange={handleFilter}/>
            <div className="searchIcons">{filteredData.length === 0 ? (
            <SearchIcon style={{ color: "white" }} />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} style={{ color: "white" }}/>
          )}</div>
          
        </div>
        {filteredData.length != 0 && (
        <div className="dataResult">

            {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.LINK} >
                <p>{value.CompanyName} </p>
              </a>
            );
          })}
        </div>
        )}
    </div>
    );
}
export default SearchBar;