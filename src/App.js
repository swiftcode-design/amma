import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Nav from './components/Nav';

import Routes from 'react-static-routes'

import './app.css'

const App = () => (
  <Router>
    <div>
      <Nav />
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
