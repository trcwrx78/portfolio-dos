import React from 'react';
import './App.css';
import Header from './components/Header'
import Intro from './components/Intro'
import Services from './components/Services'
import About from './components/About'
import Work from './components/Work'
import Footer from './components/Footer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Services />
      <About />
      <Work />
      <Footer />
    </>
  );
}

export default App;
