import React from "react";
import star from '../Images/star.png';
import { Link } from "react-router-dom";

const MovieCard = (props)=>
{
    const {title, vote_average,poster_path,overview} = props.movieResults;
    const BASE_IMG_URL = `https://image.tmdb.org/t/p/w220_and_h330_face/`;
    const NO_IMAGE_URL = "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
    

    return(
        <Link to="/movieDetails" state={props.movieResults} style={{textDecoration:"none"}}>
            <div className="movieCard" >
                <img className='poster'
                src= {poster_path===null?`${NO_IMAGE_URL}`:`${BASE_IMG_URL}${poster_path}`} 
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