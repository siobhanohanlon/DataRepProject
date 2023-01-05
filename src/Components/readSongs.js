//Imports
import React from "react";
import axios from "axios";

//Import Song
import { Song } from "./song";

export class ReadSong extends React.Component{
    //Constructor
    constructor(){
        super();

        //Reload Binding
        this.Reload = this.Reload.bind(this);
    }

    //Reload
    Reload() {
        this.Connect();
    }

    //Connect and get data
    Connect(){
        //Makes HTTP Request to get json
        axios.get('http://localhost:2000/api/song')
        //When Request Completed
        .then(
            (response)=>{
                // Update State
                this.setState({ song: response.data })
            }
        )
        //If Request returns error
        .catch(
            (error)=>{
                console.log(error)
            }
        );
    }

    //Object that will hold all data for class
    state = {
        //Assign Data to Array
        song: []
    }

    render(){
        return(
            <div>
                <h3>All Songs Listed Below</h3>
                {/* Display Book Class from Book Component & Pass in Variable */}
                <Song song = {this.state.song} Reload={this.Reload}></Song>
            </div>
        )
    }
}