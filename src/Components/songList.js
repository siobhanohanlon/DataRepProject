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
                <center>
                    {/* Print out info from Array as Cards */}
                    <Card style={{ width: '80%' }}>
                        {/* Displaying bootstrap Song cards by using props */}
                        <Card.Header>
                            <Card.Title>{this.props.song.title}</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Card.Img src={this.props.song.cover} style={{ width: "200px" }}/>
                            <Card.Title>{this.props.song.artist}</Card.Title>
                            <Card.Subtitle>Album: {this.props.song.album}</Card.Subtitle>
                            <Card.Text>Total Steams: {this.props.song.streams}</Card.Text>
                        </Card.Body>

                        <Card.Footer>
                            {/* Edit */}
                            <Link to={'/editSong/:' + this.props.song._id} className="btn btn-primary">Edit</Link>

                            {/* Deletes Song and reloads page */}
                            <Button variant="danger" onClick={this.DeleteSong} style={{ margin: "10px" }}>Delete</Button>
                        </Card.Footer>
                    </Card>
                </center>
            </div>
        )
    }
}