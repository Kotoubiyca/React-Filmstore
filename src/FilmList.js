import React from 'react';
import {ListCard} from "./Card/Card";

export const FilmList = (props) => {
  const filmList = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  }

  return (
      <div style={filmList}>
        {props.filmData.map((item, key) => {
          return <ListCard
              key={key}
              film={item}
              handleGetFullInfo={props.handleGetFullInfo} />
        })}
      </div>
  )
}
