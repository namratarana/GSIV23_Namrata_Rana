import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../Components/MovieDetails.css';
import star from '../Images/star.png';
import Navbar2 from './Navbar2.js';
// const axios = require('axios');

const MovieDetails = ()=>
{
    const location = useLocation();
    const {id, title, vote_average,poster_path,overview, release_date} = location.state;
    const BASE_IMG_URL = `https://image.tmdb.org/t/p/w220_and_h330_face/`;
    const NO_IMAGE_URL = "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"

   
    const [config] = useState({
    headers:
    {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjdiMjJiN2EyYmI4ZmM1MTA0NTc5OWI0NzNmMmFmYyIsInN1YiI6IjY0ZGZkNDgzYjc3ZDRiMTE0MjVmYzBiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YEvuWaNorrv-cPEj9hc07hKbRDCZ5WKSEo3m9xtdMJI'
    }
    });

    const [length, setLength]= useState("2h 30m");
    const[director,setDirector] = useState("Ben Wheatley");
    const[cast, setCast] = useState([]);

     useEffect(()=>
    {
    async function fetchData()
    {
        console.log("fetching cast and director");
        await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, config)
        .then(res=>
        {
            // console.log("cast data: ",res.data.cast);
            const filteredCast = res.data.cast.map( cast =>
                {

                    if(cast.known_for_department === "Acting")
                        return cast.name;
                    else
                        return "";
                }).slice(0,15)
            // console.log("filter:", filteredCast);
            setCast(filteredCast);

            const filteredDirector = res.data.crew.map( crew =>
                {

                    // console.log("job", crew);
                    if(crew.job === "Director")
                        return crew.name;
                    else    
                        return "";
                })
            // console.log("filter director:", filteredDirector);
            setDirector(filteredDirector);

        })
        .catch(error =>
            {
                console.log("there was an error");
            })
    } fetchData()}, [id, config])

    useEffect(()=>
    {
        console.log("fetching duration of Movie");
        axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, config) 
        .then(res =>
            {
                console.log(res.data.runtime);
                const totalMins = res.data.runtime;
                const hrs = parseInt(totalMins/60)  ;
                const mins = totalMins%60;
                console.log(`${hrs}h ${mins}m`);

                setLength(`${hrs}h ${mins}m`);
            })
        .catch(error =>
            {
                console.log("there was an error");
            })
    }, [id, config])

    return(
        <>
            <Navbar2/>
            <div className='details-container'>
                
                <div >
                    <img 
                    className='movie-image'
                    src= {poster_path===null?`${NO_IMAGE_URL}`:`${BASE_IMG_URL}${poster_path}`} 
                    alt="loading"/>
                </div>

                <div className='details-box'>
                    <div>
                        <span className='movie-title'>{title}</span>
                        
                        <span className='movie-rating'>(
                            <img 
                                className='movie-star'
                                src={star} alt="loading"/>
                            {vote_average})
                        </span>
                    </div>

                    <ul>
                        <li className='movie-releaseDate'>{release_date}</li>
                        <li className='movie-length'>{length}</li>
                        <li className='movie-director'>{director}</li>
                    </ul>

                    <div>
                        <h2>Cast</h2>
                        <p className='movie-desc'>
                        {
                            cast?.map((actor) => actor+",")
                        }
                        </p>
                        
                        
                    </div>
                    
                    <div>
                        <h2>Overview</h2>
                        <p className='movie-desc'>{overview}</p>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default MovieDetails;