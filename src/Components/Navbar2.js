import '../Components/Navbar2.css';
import Home from '../Images/home.png';
import { Link } from 'react-router-dom';

function Navbar2()
{
    return(
        <div className='navbar2'>
            <p className="movieDetails-header">Movie Details</p>
            <Link to ="/">
                <img className='home' src={Home} alt="loading"/>
            </Link>
        </div>
    )
}
export default Navbar2;