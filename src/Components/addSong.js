//Imports
import axios from "axios";
import React from "react";

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
            streams: '',
            albums: ''
        }
    }

    //Submit
    submitSong(e) {
        e.preventDefault();

        //Print to Console
        console.log(`Button Clicked\n${this.state.title}\n${this.state.cover}\n${this.state.artist}\n${this.state.streams}\n${this.state.albums}`);

        const song = {
            title: this.state.title,
            cover: this.state.cover,
            artist: this.state.artist,
            streams: this.state.streams,
            albums: this.state.albums,
        }

        //Generate HTTP Request 
        axios.post("http://localhost:2000/api/song", song)
            .then(console.log("HTTP Request Sent"))
            .catch((error) => {
                    console.log(error)
                });

        //Reset to blank
        this.setState = {
            title: '',
            cover: '',
            artist: '',
            streams: '',
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
            <div>
                {/* Print to screen */}
                <h2>Add New Song Details Below!</h2>

                {/* Form to Add Song to Array */}
                <form onSubmit={this.submitSong}>
                    {/* Title */}
                    <div className="form-group">
                        <label>Add Song Title: </label>
                        <input type="text" className="form-control" value={this.state.title} onChange={this.onChangeTitle} />
                    </div>

                    {/* Cover */}
                    <div className="form-group">
                        <label>Add Song Cover: </label>
                        <input type="text" className="form-control" value={this.state.cover} onChange={this.onChangeCover} />
                    </div>

                    {/* Artist */}
                    <div className="form-group">
                        <label>Add Song Artist: </label>
                        <input type="text" className="form-control" value={this.state.artist} onChange={this.onChangeArtist} />
                    </div>

                    {/* Streams */}
                    <div className="form-group">
                        <label>Add Total Song Streams: </label>
                        <input type="number" className="form-control" value={this.state.streams} onChange={this.onChangeStreams} />
                    </div>

                    {/* Album */}
                    <div className="form-group">
                        <label>Add Song Album: </label>
                        <input type="text" className="form-control" value={this.state.albums} onChange={this.onChangeAlbum} />
                    </div>

                    {/* Submit Button */}
                    <input type="submit" value="Add Song" />
                </form>
            </div>
        )
    }
}