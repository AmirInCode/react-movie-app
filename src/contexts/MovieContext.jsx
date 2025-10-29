import { createContext, useEffect, useState, useContext } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        if (favorites.length > 0) {
            localStorage.setItem('favorites', JSON.stringify(favorites))
        }else {
            localStorage.removeItem("favorites"); // وقتی خالی شد، پاکش کن
          }
    }, [favorites])


    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }


    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}
