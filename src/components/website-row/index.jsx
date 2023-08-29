import React, { useEffect, useRef, useState } from 'react';
import { getMovies } from "../../api";
import "./styles.css";

const imageHost = "https://image.tmdb.org/t/p/original/";

const Row = (props) => {
    const { title, path, isLarge } = props;
    const [movies, setMovies] = useState([]);
    const rowRef = useRef(null);

    const fetchMovies = async (_path) => {
        try {
            const data = await getMovies(_path);
            // Duplicar a lista de filmes para criar o efeito de carrossel infinito
            const duplicatedMovies = [...data.results, ...data.results];
            setMovies(duplicatedMovies);
        } catch (error) {
            console.log("fetchMovies error:", error);
        }
    };

    const scrollLeft = () => {
        if (rowRef.current) {
            const newPosition = rowRef.current.scrollLeft - 600;
            rowRef.current.scrollTo({
                left: newPosition,
                behavior: 'smooth',
            });

            // Verificar se chegamos ao início e ajustar para o final da lista
            if (newPosition <= 0) {
                const totalWidth = rowRef.current.scrollWidth;
                rowRef.current.scrollTo({
                    left: totalWidth,
                    behavior: 'smooth',
                });
            }
        }
    };

    const scrollRight = () => {
        if (rowRef.current) {
            const newPosition = rowRef.current.scrollLeft + 600;
            rowRef.current.scrollTo({
                left: newPosition,
                behavior: 'smooth',
            });

            // Verificar se chegamos ao final e ajustar para o início da lista
            if (newPosition >= rowRef.current.scrollWidth - rowRef.current.clientWidth) {
                rowRef.current.scrollTo({
                    left: 0,
                    behavior: 'smooth',
                });
            }
        }
    };

    useEffect(() => {
        fetchMovies(path);
    }, [path]);

    return (
        <div className="row-wrapper">
            <h2 className="row-header" id = {title}>{title}</h2>
            <div className="scroll-button scroll-button-left" onClick={scrollLeft}>
                &#9664;
            </div>
            <div className="row-cards" ref={rowRef}>
                {movies?.map((movie, index) => (
                    <img
                        className={`images-cards ${isLarge && `images-cards-large`}`}
                        key={index}
                        src={`${imageHost}${isLarge ? movie.backdrop_path : movie.poster_path}`}
                        alt={movie.name}
                    ></img>
                ))}
            </div>
            <div className="scroll-button scroll-button-right" onClick={scrollRight}>
                &#9654;
            </div>
        </div>
    );
};

export default Row;