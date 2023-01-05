import React from "react";
import { SongList } from './songList';

export class Songs extends React.Component {
    //Run
    render() {
        //Return Song Array by map 
        return this.props.songs.map(
            (song) => {
                // Assign Unique ID
                return <SongList song={song} key={song._id} ></SongList>
            }
        );
        //console.log(this.props.songs);
    }
}