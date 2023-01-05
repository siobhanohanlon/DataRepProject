//Import CSS
import 'bootstrap/dist/css/bootstrap.min.css'; //NavBar
import './App.css';

//Import React
import React from 'react';

//Import Navbar
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

//Import Components
import { AddSong } from './components/addSong';
import { ReadSong } from './components/readSongs';
import { EditSong } from './components/editSong';

//Import Router
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';

//Class
class App extends React.Component {
  //Runs Code
  render() {
    //Returns after running
    return (
      <Router>
        <div className="App">
          {/* Define NavBar */}
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="/">Personal Song Dictionary</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/readSong">Home</Nav.Link>
                <Nav.Link href="/addSong">Add Song</Nav.Link>
                <Nav.Link href="/editSong">Edit Song</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          {/* Use Routing to change to page and call different components */}
          <Routes>
            {/* Make it so Home is Read Page */}
            <Route path='/' element={<ReadSong></ReadSong>}></Route>
            <Route path='/readSong' element={<ReadSong></ReadSong>}></Route>
            <Route path='/addSong' element={<AddSong></AddSong>}></Route>
            <Route path="/editSong/:id" element={<EditSong></EditSong>}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

//Export
export default App;