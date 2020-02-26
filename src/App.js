import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Services from './components/Services'
import About from './components/About'
import Work from './components/Work'
import Footer from './components/Footer'
import PortfolioItem from './components/PortfolioItem'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Intro />
          <Services />
          <About />
          <Work />
        </Route>
        <Route path="/work/:workId">
          <PortfolioItem />
        </Route>
        </Switch>
      <Footer />
    </>
  );
}

export default App;
