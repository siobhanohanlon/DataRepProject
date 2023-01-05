import { React, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export function EditSong(props) {
    /* The useParams returns an object of key pairs of the dynamic 
    params from the current URL that were matched by the <Route path>*/
    let { id } = useParams();

    /*  Update arrays using the React useState() and without the Array 
        object's push() method */
    const [title, setTitle] = useState("");
    const [cover, setCover] = useState("");
    const [artist, setArtist] = useState("");
    const [streams, setStreams] = useState("");
    const [album, setAlbum] = useState("");

    // Navigate returns a function that we can then use to navigate
    const navigate = useNavigate();

    //useEffect Hook is similar componentDidMount
    useEffect(() => {
        //axios is a promised based web client
        //make a HTTP Request with GET method and pass as part of the url.
        axios.get("http://localhost:2000/api/songs/" + id)
            .then((response) => {
                // Assign Response data to the arrays using useState.
                setTitle(response.data.title);
                setCover(response.data.cover);
                setArtist(response.data.artist);
                setStreams(response.data.streams);
                setAlbum(response.data.album);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const submit = (event) => {
        event.preventDefault();

        //New Book Data Assigned
        const newSong = {
            id: id,
            title: title,
            cover: cover,
            artist: artist,
            streams: streams,
            album: album
        };

        //Save Data
        axios.put("http://localhost:2000/api/songs/" + id, newSong)
            .then((res) => {
                console.log(res.data);
                navigate('/songList');
            });
    }
    return (
        <div>
            <form onSubmit={submit}>
                {/* Song Title */}
                <div className="form-group">
                    <label>Add Song Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                {/* Cover */}
                <div className="form-group">
                    <label>Add Release Year: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => setCover(e.target.value)}
                    />
                </div>

                {/* Author */}
                <div className="form-group">
                    <label>Add Artist:</label>
                    <input type="text"
                        className="form-control"
                        value={artist}
                        onChange={(e) => setArtist(e.target.value)}
                    />
                </div>

                {/* Streams */}
                <div className="form-group">
                    <label>Add Total Streams Worldwide:</label>
                    <input type="text"
                        className="form-control"
                        value={streams}
                        onChange={(e) => setStreams(e.target.value)}
                    />
                </div>

                {/* Album */}
                <div className="form-group">
                    <label>Add Album:</label>
                    <input type="text"
                        className="form-control"
                        value={album}
                        onChange={(e) => setAlbum(e.target.value)}
                    />
                </div>

                {/* Submit Button */}
                <div className="form-group">
                    <input type="submit" value="Edit Song" className="btn btn-primary" ></input>
                </div>
            </form>
        </div>
    );
}