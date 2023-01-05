//Imports
import axios from "axios";
import React from "react";
import '../App.css';

export class AddSong extends React.Component {
    //Constructor
    constructor() {
        super();

        //Bind to Event
        this.submitSong = this.submitSong.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeCover = this.onChangeCover.bind(this);
        this.onChangeArtist = this.onChangeArtist.bind(this);
        this.onChangeStreams = this.onChangeStreams.bind(this);
        this.onChangeAlbum = this.onChangeAlbum.bind(this);

        //Set Value to blank
        this.state = {
            title: '',
            cover: '',
            artist: '',
            streams: 0,
            albums: ''
        }
    }

    //Submit
    submitSong(e) {
        e.preventDefault();

        //Print to Console
        console.log(`Button Clicked!\nTitle: ${this.state.title}\nCover: ${this.state.cover}\nArtist: ${this.state.artist}\nStreams: ${this.state.streams}\nAlbums: ${this.state.albums}`);

        const song = {
            title: this.state.title,
            cover: this.state.cover,
            artist: this.state.artist,
            streams: this.state.streams,
            albums: this.state.albums
        }

        //Generate HTTP Request 
        axios.post("http://localhost:2000/api/songs", song)
            .then(console.log("HTTP Request Sent"))
            .catch((error) => {
                console.log(error)
            });

        //Reset to blank
        this.setState = {
            title: '',
            cover: '',
            artist: '',
            streams: 0,
            albums: ''
        }
    }

    //Change Title
    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    //Change Cover
    onChangeCover(e) {
        this.setState({
            cover: e.target.value
        })
    }

    //Change Artist
    onChangeArtist(e) {
        this.setState({
            artist: e.target.value
        })
    }

    //Change Streams
    onChangeStreams(e) {
        this.setState({
            streams: e.target.value
        })
    }

    //Change Album
    onChangeAlbum(e) {
        this.setState({
            albums: e.target.value
        })
    }

    render() {
        return (
            //Print to Screen
            <div>
                {/* Print to screen */}
                <h2>Add New Song Details Below!</h2>
                <br></br>

                {/* Form to Add Song to Array */}
                <form onSubmit={this.submitSong}>
                    {/* Title */}
                    <div className="form-group">
                        <label htmlFor="title" className="title">Song Title: </label>
                        <input id="title" type="text" value={this.state.title} onChange={this.onChangeTitle} />
                    </div>

                    {/* Cover */}
                    <div className="form-group">
                        <label htmlFor="cover" className="cover">Song Cover: </label>
                        <input id="cover" type="text" value={this.state.cover} onChange={this.onChangeCover} />
                    </div>

                    {/* Artist */}
                    <div className="form-group">
                        <label htmlFor="artist" className="artist">Song Artist: </label>
                        <input id="artist" type="text" value={this.state.artist} onChange={this.onChangeArtist} />
                    </div>

                    {/* Streams */}
                    <div className="form-group">
                        <label htmlFor="streams" className="streams">Total Song Streams: </label>
                        <input id="streams" type="number" value={this.state.streams} onChange={this.onChangeStreams} />
                    </div>

                    {/* Album */}
                    <div className="form-group">
                        <label htmlFor="album" className="album">Song Album: </label>
                        <input id="album" type="text" value={this.state.albums} onChange={this.onChangeAlbum} />
                    </div>

                    {/* Submit Button */}
                    <br></br>
                    <input className="submit" type="submit" value="Add Song" />
                </form>
            </div>
        )
    }
}