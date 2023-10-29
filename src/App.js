import logo from './logo.svg';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar bg="primary" data-bs-theme="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/about'>About</Link></Nav.Link>
            <Nav.Link><Link to= '/users'>Users</Link></Nav.Link>
          </Nav>
      </Navbar>
      <Routes> 
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
