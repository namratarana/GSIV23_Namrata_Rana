import {useState} from 'react';
import '../Components/Navbar1.css';
import Home from '../Images/home.png';
import Search from '../Images/search.png';
import Cancel from '../Images/cancel.png';

function Navbar1(props)
{
    const [localInput, setLocalInput] = useState("");

    const handleInput = (e)=>
    {
        // console.log(e.target.value);
        setLocalInput(e.target.value);
        props.cancelSearch(false);
    }
    const submitSearchValue =(e)=>
    {
        // console.log("local input:", localInput);
        if(e.key ==="Enter")
            props.fetchInput(localInput);
    }
    const handleCancel =()=>
    {
        props.cancelSearch(true);
        setLocalInput("");
    }
    return(
        <div className='navbar1'>
            <img className="search" src={Search} alt="loading"/>
            <img className="cancel" src={Cancel} onClick={handleCancel} alt="loading"/>
            <input 
            className='search-input'
            type="text" 
            value={localInput}
            onChange={handleInput}
            onKeyDown={submitSearchValue}
            placeholder='Search'/>
            <img className='home' src={Home} alt="loading"/>
        </div>
    )
}
export default Navbar1;