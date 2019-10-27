// import React from 'react'
// import FilmPoster from './FilmPoster'
// import Fave from './Fave'
// const FilmRow = (props) => {

//  var handleDetailsClick = (film)=>{
//     console.log("Detailsss");
    
//   }
//     return (


      
// <div className="film-row" onClick={() => handleDetailsClick('Film')}>
// <FilmPoster poster={props.poster}></FilmPoster>
//   <div className="film-summary">
//     <h1 >{props.title}</h1>
//     <p>{props.date}</p>

//   </div>
//   <Fave />
// </div>
//     )
// }

// export default FilmRow

import React, { Component } from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'
export default class FilmRow extends Component {
    handleDetailsClick = (film)=>{
    console.log("Detailsss");
    
  }
  render() {
    return (
<div className="film-row" onClick={() => this.handleDetailsClick('Film')}>
<FilmPoster poster={this.props.poster}></FilmPoster>
  <div className="film-summary">
    <h1 >{this.props.title}</h1>
    <p>{this.props.date}</p>

  </div>
  <Fave />
</div>
    )
  }
}
