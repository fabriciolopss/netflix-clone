const API_KEY = "27368f3527e2094b1d954b841988d9b9";

const categories = [
    {
        name: "trending",
        title: "Em alta",
        url: `/trending/all/week?language=pt-BR&api_key=${API_KEY}`,
        isLarge: true
    },
    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        url: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
        isLarge: false
    },
    {
        name: "topRated",
        title: "Populares",
        url: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
        isLarge: false
    },
    {
        name: "comedy",
        title: "Comédias",
        url: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
        isLarge: false
    },
    {
        name: "romances",
        title: "Romances",
        url: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
        isLarge: false
    },

    {
        name: "documentaries",
        title: "Documentários",
        url: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
        isLarge: false
    }
];

export const getMovies = async(path) =>{
    try{
        let url = 'https://api.themoviedb.org/3' + path;
        const response = await fetch(url);
        return await response.json()
    }catch (error){
        console.log("error getMovies: ", error);
    }
}

export default categories;