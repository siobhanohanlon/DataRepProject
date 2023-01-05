import React,{ useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export function EditSong(props) {
    /* The useParams returns an object of key pairs of the dynamic 
    params from the current URL that were matched by the <Route path>*/
    let { id } = useParams();

    /*  Update arrays using the React useState() and without the Array 
        object's push() method */
    const [title, setTitle] = useState("1");
    const [cover, setCover] = useState("");
    const [artist, setArtist] = useState("");
    const [streams, setStreams] = useState("");
    const [album, setAlbum] = useState("");

    //Needed to check if loading
    const [isLoading, setLoading] = useState(true);

    // Navigate returns a function that we can then use to navigate
    const navigate = useNavigate();

    //useEffect Hook is similar componentDidMount
    useEffect(() => {
        //axios is a promised based web client
        //make a HTTP Request with GET method and pass as part of the url.
        axios.get("http://localhost:2000/api/songs/" + id)
            .then((response) => {
                //Check if Page is loading
                setLoading(false);

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

    if(isLoading){
        return(<div>Retrieving Data.....</div>);
    }

    const submitSong = (event) => {
        event.preventDefault();

        //New Book Data Assigned
        const changeSong = {
            id: id,
            title: title,
            cover: cover,
            artist: artist,
            streams: streams,
            album: album
        };

        //Save Data
        axios.put("http://localhost:2000/api/songs/" + id, changeSong)
            .then((res) => {
                console.log(res.data);
                navigate('/readSongs');
            });
    }

    //Output
    return (
        <div>
                {/* Print to screen */}
                <h1>Change Song Details Below!</h1>
                <br></br>

                {/* Form to Add Song to Array */}
                <form onSubmit={submitSong}>
                    {/* Title */}
                    <div className="form-group">
                        <label htmlFor="title" className="title">Song Title: </label>
                        <input  id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </div>

                    {/* Cover */}
                    <div className="form-group">
                        <label htmlFor="cover" className="cover">Song Cover: </label>
                        <input id="cover" type="text" value={cover} onChange={(e) => setCover(e.target.value)} required />
                    </div>

                    {/* Artist */}
                    <div className="form-group">
                        <label htmlFor="artist" className="artist">Song Artist: </label>
                        <input id="artist" type="text" value={artist} onChange={(e) => setArtist(e.target.value)} required />
                    </div>

                    {/* Streams */}
                    <div className="form-group">
                        <label htmlFor="streams" className="streams">Total Song Streams: </label>
                        <input id="streams" type="number" value={streams} onChange={(e) => setStreams(e.target.value)} required />
                    </div>

                    {/* Album */}
                    <div className="form-group">
                        <label htmlFor="album" className="album">Song Album: </label>
                        <input id="album" type="text" value={album} onChange={(e) => setAlbum(e.target.value)} required />
                    </div>

                    {/* Submit Button */}
                    <br></br>
                    <input className="submit" type="submit" value="Edit Song" />
                </form>
            </div>
    );
}