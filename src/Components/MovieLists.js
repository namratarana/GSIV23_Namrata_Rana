import React, {useEffect, useState} from 'react';
import './MovieLists.css';
import MovieCard from './MovieCard';
import axios from 'axios';
import Navbar1 from './Navbar1';
import Previous from '../Images/previous.png';
import Next from '../Images/next.png';

const MovieLists = ()=>
{
    const [config] = useState({
        headers:
        {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjdiMjJiN2EyYmI4ZmM1MTA0NTc5OWI0NzNmMmFmYyIsInN1YiI6IjY0ZGZkNDgzYjc3ZDRiMTE0MjVmYzBiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YEvuWaNorrv-cPEj9hc07hKbRDCZ5WKSEo3m9xtdMJI'
        }
      });
    const [results, setResults] = useState([]);
    const[searchvalue, setSearchvalue] = useState("");
    const [cancel, setCancel] = useState(false);
    const [page, setPage] = useState(1);
    const fetchInputValue = (input)=>
    {
        console.log("input is:", input);
        setSearchvalue(input);
    }
    const cancelSearch = (cancelValue)=>
    {
        console.log(cancelValue);
        setCancel(cancelValue);
    }
    const handlePreviousClick = ()=>
    {
        setPage(prevpage => setPage(prevpage-1));
    }
    const handleNextClick = ()=>
    {
        setPage(prevpage => setPage(prevpage+1));
    }
    function dateComparison(a, b) {
        const date1 = new Date(a)
        const date2 = new Date(b)
        
        return date1 - date2;
    }
    
    useEffect(()=>
        {
            axios.get(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`, config)
            .then(res =>
                {
                    console.log((res.data.results));
                    setResults(res.data.results.sort(function (a, b) 
                    {
                        return new Date(a.release_date) - new Date(b.release_date);
                    }));
                })
            .catch(err =>{
                console.log("There was an error fetching upcoming movies lists");
            });
        },[cancel, config, page])

    useEffect(()=>
    {
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchvalue}&include_adult=false&language=en-US&page=1`, config)
            .then(res =>
                {
                    console.log(("Search results are: ", res.data.results));
                    setResults(res.data.results.sort(dateComparison));
                })
            .catch(err =>{
                console.log("There was an error fetching upcoming movies lists");
            });
        
    }, [searchvalue, config, page])
    return(
        <>
        <Navbar1 fetchInput={fetchInputValue} cancelSearch={cancelSearch}/>
        <div className='container'> 
           {
                
                results?.map((result, id) =>
                    {
                        return(
                                <MovieCard movieResults={result } key={id}/>
                        )
                    })
           }
           <div className='page-icons'>
                <img className="previous" src={Previous} alt="loading" onClick={page!==1?handlePreviousClick : null} />
                <img className="next" src={Next} alt="loading" onClick={handleNextClick}/>
           </div>
        </div>
        </>
       
    )
}

export default MovieLists;