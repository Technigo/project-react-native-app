import React from 'react'
// import { ReactComponent as DotsFromBundle } from 'icons/dots.svg'
// import { ReactComponent as HeartFromBundle } from 'icons/heart.svg'
// import { ReactComponent as PlayFromBundle } from 'icons/play.svg'

export const Book = (props) => {
  return (
    <div className="Album">
      {/* <div className="songImage" > */}
        {/* <div className="songIcons"> */}
          {/* <HeartFromBundle />
          <PlayFromBundle className="play" />
          <DotsFromBundle /> */}
        {/* </div> */}
        {/* <a href={props.url}><img id="albumCover" src={props.src} alt="" width="250px" height="auto" /></a> */}
      {/* </div> */}
      <div className="songName">
        <a href={props.url}><img src={props.src} /></a>
        <h2>{props.bookName}</h2>
      </div>
      <div className="songArtist">
        <p>{props.author}</p>
        <p>{props.description}</p>
        {/* <p>Rank: {props.rank}</p> */}
        <p>Weeks on list: {props.weeks_on_list}</p>
        <button onClick="">BUY IT</button>
      </div>
    </div>
  );
};