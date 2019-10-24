import React, { Component } from 'react'
import TMDB from './TMDB'
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'

export default class App extends Component {
  render() {
    return (
<div className="film-library">
  <div className="film-list">
    {/* <h1 className="section-title">FILMS</h1> */}
    <FilmListing films={TMDB.films} />
  </div>

  <div className="film-details">
    {/* <h1 className="section-title">DETAILS</h1> */}
    <FilmDetails />
  </div>
</div>
    )
  }
}
