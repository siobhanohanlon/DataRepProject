import React from "react";
import { songList } from './songList';

export class Song extends React.Component {
    //Run
    render() {
        //Return Song Array by map function
        return this.props.songs.map(
            (song) => {
                // Assign Unique ID
                return <songItem song={song} key={song._id}></songItem>
            }
        );
    }
}