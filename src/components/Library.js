import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs}) => {
    return(
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => <LibrarySong setSongs={setSongs} isPlaying={isPlaying} songs = {songs} audioRef={audioRef} key={song.id} setCurrentSong={setCurrentSong} song={song} id={song.id}/>)}
            </div>
        </div>
    )
}

export default Library;