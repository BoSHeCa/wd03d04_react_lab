import React from 'react'
import FilmPoster from './FilmPoster'
const FilmRow = (props) => {
    return (
<div className="film-row">
<FilmPoster poster={props.poster}></FilmPoster>
  <div className="film-summary">
    <h1 >{props.title}</h1>
    <p>{props.date}</p>
  </div>
</div>
    )
}

export default FilmRow
