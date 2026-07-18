import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import {useState} from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import LoginPage from './Pages/LoginPage';
import ServicesPage from './Pages/ServicesPage';
import ProtectedRoute from "./ProtectedRoute";

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>

  <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/service">Services</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/service"
          element={ServicesPage} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
