import React from 'react';
import star from '../img/star.svg'
import './fullinfo.css'

export const FullInfo = (props) => {
  const film = props.film

  return (
      <div className="details">
        <div className="details-header">
          <div className="details-title">
            {film['title']} ({film['release_date']})
          </div>
          <div className="details-vote">
            <img src={star} className="rating" alt="rating star" />
            <span>{film['vote_average']}</span>
          </div>
        </div>
        <div className="details-content">
          <div className="details-content-image">
            <img src={ 'https://image.tmdb.org/t/p/w500/' + film['poster_path'] } alt={film['title']} />
            <div className="details-genres">
              {/**ngIf="film['genres'].length"*/}
              Genres:
              {/**ngFor="let item of film['genres']; let i = index"*/}
              <span>
                {/*<b>{item['name']}</b>*/}
                {/***ngIf="i < film['genres'].length - 1"*/}
                <span>, </span>
              </span>
            </div>
          </div>
          <p>{film['overview']}</p>
        </div>
    </div>
  )
}
