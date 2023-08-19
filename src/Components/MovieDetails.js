import React, {useState} from 'react';

const MovieDetails = ()=>
{
    return(
        <div className='details-container'>
            <div>
                <img 
                className='poster'
                src="https://image.tmdb.org/t/p/w220_and_h330_face/3IhGkkalwXguTlceGSl8XUJZOVI.jpg"
                // src= {`${BASE_IMG_URL} ${poster_path}`} 
                alt="loading"/>
            </div>
            <div>

            </div>
        </div>
    )
}

export default MovieDetails;