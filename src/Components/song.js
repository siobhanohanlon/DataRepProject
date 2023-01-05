import React from "react";
import { SongList } from './songList';

export class Song extends React.Component {
    //Run
    render() {
        //Return Song Array by map 
        return this.props.song.map(
            (song) => {
                // Assign Unique ID
                return <SongList song={song} key={song._id} Reload={this.props.Reload}></SongList>
            }
        );
    }
}