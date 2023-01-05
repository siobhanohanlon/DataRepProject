//Imports
import React from "react";
import axios from "axios";

//Import Song
import { Songs } from "./songs";

export class ReadSong extends React.Component {
    //Constructor
    constructor() {
        super();

        //Reload Binding
        this.reload = this.reload.bind(this);
    }

    //Reload
    reload() {
        this.connect();
    }

    //Connect and get data
    connect() {
        //Makes HTTP Request to get json
        axios.get('http://localhost:2000/api/songs')
            //When Request Completed
            .then((response) => {
                    // Update State
                    this.setState({ songs: response.data });
                }
            )
            //If Request returns error
            .catch(
                (error) => {
                    console.log(error);
                });
    }

    //Object that will hold all data for class
    state = {
        //Assign Data to Array
        songs: []
    }

    render() {
        return (
            <div className="App">
                <h3>All Songs Listed Below</h3>
                {/* Display Book Class from Book Component & Pass in Variable */}
                <Songs songs={this.state.songs} reload={this.reload}></Songs>
            </div>
        )
    }
}