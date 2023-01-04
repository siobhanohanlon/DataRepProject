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
import { Add } from './components/addArtists';
//import { Read } from './components/readArtist';
//import { Edit } from './components/editArtists';

//Import Router
import { BrowserRouter as Router,
         Routes,  Route } from 'react-router-dom';

//Class
class App extends React.Component {
  //Runs Code
  render(){
    //Returns after running
    return (
      <Router>
        <div className="App">
          {/* Define NavBar */}
          <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/add">Add Song</Nav.Link>
            <Nav.Link href="/edit">Edit Song</Nav.Link>
            </Nav>
          </Container>
          </Navbar>
          
          {/* Use Routing to change to page and call different components */}
          <Routes>
            {/*<Route path = '/' element = {<Read></Read>}></Route>
            <Route path = '/add' element = {<Add></Add>}></Route>
            <Route path="/edit/:id" element={<Edit></Edit>}></Route> */}
          </Routes>
        </div>
      </Router>
    );
  }
}

//Export
export default App;