import React from "react";
import star from '../Images/star.png';
import { Link } from "react-router-dom";

const MovieCard = (props)=>
{
    const {title, vote_average,poster_path,overview} = props.movieResults;
    const BASE_IMG_URL = `https://image.tmdb.org/t/p/w220_and_h330_face/`;
    
    console.log(`${BASE_IMG_URL} ${poster_path}`);

    return(
        <Link to="/movieDetails" style={{textDecoration:"none"}}>
            <div className="movieCard" >
                <img className='poster'
                src="https://image.tmdb.org/t/p/w220_and_h330_face/3IhGkkalwXguTlceGSl8XUJZOVI.jpg"
                // src= {`${BASE_IMG_URL} ${poster_path}`} 
                alt="loading"/>
                <div className='overview'>
                    <div className='row1'>
                        <span className='title'>{title}</span>
                        <div>   
                            <img 
                            className='star'
                            src={star} alt="loading"/>
                            <span className='rating'>{vote_average}</span>
                        </div>
                    </div>
                    <div className='row2'>
                        <p className='desc'>{overview}</p>
                    </div>
                </div>

            </div>
         </Link>
    )
}
export default MovieCard;