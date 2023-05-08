import React, {useState, useRef} from "react";
import "./styles/app.scss"

import Player from "./components/Player";
import Song from "./components/Song"
import Library from "./components/Library";
import data from "./data"


function App() {
  
    //Ref
    const audioRef = useRef(null);
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
  });

  
  const timeUpdateHandler = (e) => {
          const current = e.target.currentTime;
          const duration = e.target.duration;
          setSongInfo({...songInfo, currentTime : current, duration})
      }

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player setSongInfo={setSongInfo} songInfo={songInfo} audioRef={audioRef} setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong= {currentSong}/>
      <Library setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong}/>
      <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>

    </div>
  );
}

export default App;
