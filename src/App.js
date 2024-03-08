import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MovieDetail from './components/MovieDetail';
import TVDetail from './components/TVDetail';

function App() {
  return (
    <div  style={{backgroundColor: '#e0e0e0'}}>
      <Router className="App">
        <Header />
        <Routes className="content">
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/tvShows/:id" element={<TVDetail />} />
          <Route path="/tvshows" element={<TVShows />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
