import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import LoginPage from './pages/login';
import NewsPage from './pages/news';
import NursesPage from './pages/nurses';
import CareHomesPage from './pages/carehomes';
import RegisterPage from './components/Register';
import ContactPage from './pages/contactus';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<LoginPage />} exact />
        <Route path="/nurses" element={<NursesPage />} exact />
        <Route path="/carehomes" element={<CareHomesPage />} exact />
        <Route path="/news" element={<NewsPage />} exact />
        <Route path="/register" element={<RegisterPage />} exact />
        <Route path="/contactus" element={<ContactPage />} exact />
      </Routes>
    </Router>
  )
}

export default App;
