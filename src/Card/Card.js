
import React from 'react';
import './card.css'

export const ListCard = (props) => {
    const film = props.film
    
    return (
        <div className="list-card">
            <img
                className="list-card-img"
                src={'https://image.tmdb.org/t/p/w500'+film['poster_path']}
                alt={film['title']} />
            <h2 className="list-card-title">{film['title']}</h2>
        </div>
    )
}
