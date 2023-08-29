import React from 'react'
import { useEffect } from 'react';
import './styles.css'
import categories, { getMovies } from '../../api';
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai'

function Banner() {
    const [movie, setMovie] = React.useState({});
    const fetchRandomMovie = async () =>{
        try {
            const netflixOriginalsCategory = categories.find( (category) => category.name === "netflixOriginals");
            const data = await getMovies(netflixOriginalsCategory.url);
            const movies = data?.results;
            const randomIndex = Math.floor(Math.random() * data.results.length);
            setMovie(movies[randomIndex]);
        } catch (error) {
            console.log("Error in fetch random movie: " + error);
        }
    };
    useEffect(() => {
        fetchRandomMovie();
    }, [])
    
  return (
    <header className = "banner-container" style={{
        backgroundSize:"cover", 
        
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition:"center center"
        }}>
        <div className = "banner-content">
            <h1 className = "banner-title">{movie?.title || movie?.name || movie?.original_name}</h1>
            <h1 className = "banner-description">{movie?.overview}</h1>
            <div className = "banner-buttons">
                <button className = "banner-button" id = "bigger-button"><FaPlay className="playButton"/>Assistir</button>
                <button className = "banner-button" id = "smaller-button"><AiOutlineInfoCircle className = "playButton" />Mais informações</button>
            </div>
        </div> 
        <div className = "banner-fade-bottom"></div>
    </header>
  )
}

export default Banner