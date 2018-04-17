import React from 'react'
import { Router, Link } from 'react-static'

import styled from 'styled-components'

import { Wrapper } from './../styles.js'

const NavContainer = Wrapper.extend`
  width: 80%;
`
const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  font-size: 1.5em;
  color: red;
`
const NavLink = styled(Link) `
  color: #C4C3C3;
  border: 2px solid white;
  transition: all 0.2;
  cursor: pointer;
  :hover{
    color: black;
    border-color: #B61217;
  }
`
export default () => (
  <Wrapper >
    <div style={{background: "black", width: "100%", color: "white"}}>on top</div>
    <NavContainer row >
      <img src="http://www.alivemma.dreamhosters.com/wp-content/uploads/2017/06/cropped-c5979c_1a0bb9867e020320c8720e908d3ba9da-e1498343549417.png" />
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/classes">Classes</NavLink>
        <NavLink to="/kids">Kids</NavLink>
        <NavLink to="/schedule">Schedule</NavLink>
        <NavLink to="memberships">Memberships</NavLink>
        <NavLink to="/instructors">Instructors</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </Nav>
    </NavContainer>
  </Wrapper>
)
