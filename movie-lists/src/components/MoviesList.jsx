import React, { useState } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { id: 1, title: 'The Shawshank Redemption', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.' },
        { id: 2, title: 'The Godfather', description: 'An organized crime dynasty\'s aging patriarch transfers control of his clandestine empire to his reluctant son.' },
        { id: 3, title: 'The Dark Knight', description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.' },
        { id: 4, title: 'The Lord of the Rings: The Fellowship of the Ring', description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.' },
        { id: 5, title: 'Inception', description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.' },
        { id: 6, title: 'Forrest Gump', description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.' }
    ]);

    const hideDetails = (id) => {
        setMovies(movies.map(movie => {
            if (movie.id === id) {
                return { ...movie, showDetails: !movie.showDetails };
            }
            return movie;
        }));
    };

    const removeMovie = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
    };

    return (
        <div>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <br></br>
                        <div><button onClick={() => hideDetails(movie.id)}>Show Details</button>
                            {movie.title}
                            {movie.showDetails && <p>{movie.description}</p>}
                        </div>
                        <br></br>
                        <button onClick={() => removeMovie(movie.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;
