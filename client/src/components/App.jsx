import React from 'react';
import Welcome from './Welcome.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Products from './Products.jsx';
import Footer from './Footer.jsx';
import Nav from './Nav.jsx';
import { Routes, Route } from 'react-router-dom';
import { AppContainer, ViewContainer } from '../styles/appStyles.js';

const routing = () => (
  <Routes>
    <Route path="/" element={<Welcome />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="products" element={<Products />} />
  </Routes>
);

const App = () => {

  return (
    <div>
      <Nav />
      <AppContainer>
        <ViewContainer>
          { routing() }
        </ViewContainer>
      </AppContainer>
      <Footer />
    </div>
  );
};

export default App;
