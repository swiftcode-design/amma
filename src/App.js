import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Nav from './components/Nav'
import styled from 'styled-components'
import Routes from 'react-static-routes'
import './app.css'

const RouteWrapper = styled.div`
  min-height: 500px;
  background: #E9E9E9;
`
const App = () => (
  <Router>
    <div>
      <Nav />
      <RouteWrapper className="content">
        <Routes />
      </RouteWrapper>
    </div>
  </Router>
)

export default hot(module)(App)
