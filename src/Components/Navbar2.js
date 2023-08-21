import '../Components/Navbar2.css';
import Home from '../Images/home.png';

function Navbar2()
{
    return(
        <div className='navbar2'>
            <p className="movieDetails-header">Movie Details</p>
            <img className='home' src={Home} alt="loading"/>
        </div>
    )
}
export default Navbar2;