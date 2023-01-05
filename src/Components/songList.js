//Imports
import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export class SongList extends React.Component {
    //Constructor
    constructor() {
        super();
        //Delete Song Binds
        this.DeleteSong = this.DeleteSong.bind(this);
    }

    //Delete Song
    DeleteSong(e) {
        e.preventDefault();
        axios.delete('http://localhost:2000/api/song/' + this.props.song._id) 
            .then((res) => { this.props.Reload(); }) 
            .catch();
    }

    //Render Page
    render() {
        return (
            <div className="SongItem">
                {/* Print out info from Array as Cards */}
                <Card>
                    {/* Song Title */}
                    <Card.Header>{this.props.song.title}</Card.Header>

                    {/* Displaying bootstrap Song cards by using props */}
                    <Card.Body>
                        <Card.Title>{this.props.song.cover}</Card.Title>
                        <Card.Title>{this.props.song.artist}</Card.Title>
                        <Card.Title>{this.props.song.streams}</Card.Title>
                        <Card.Title>{this.props.song.album}</Card.Title>
                    </Card.Body>

                    {/* Edit */}
                    <Link to={'/edit/' + this.props.song._id} className="btn btn-primary">Edit</Link>
                    
                    {/* Deletes Song and reloads page */}
                    <Button variant="danger" onClick={this.DeleteSong}>Delete</Button>
                </Card>
            </div>
        )
    }
}