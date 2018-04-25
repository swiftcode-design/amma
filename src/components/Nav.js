import React from 'react'
import { Router, Link } from 'react-static'

import styled from 'styled-components'

import { Wrapper, logoLink } from './../styles.js'
import * as IoIconPack from 'react-icons/lib/io'

const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: black;
  color: white;
  width: 100%;
  height: 40px;
`
const SocialNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  h5{
    color: #5C5C5C;
    span{
      color: white;
    }
  }
  ul{
    list-style-type: none;
    display: flex;
    li{
      color: #5C5C5C;
      padding: 0 10px;
      font-size: 28px;
    }
  }
`
const NavContainer = Wrapper.extend`
  width: 90%;
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
  transition: all 0.6s;
  cursor: pointer;
  margin: 0 7px;
  &:hover{
    color: black;
    border-color: #B61217;
  }
  &.active{
    color: black;
    border-color: #B61217;
`

export default () => (
  <Wrapper>
    <SocialWrapper>
      <SocialNav>
        <div>
          <h5>OPENING HOURS MON - SAT <span>6AM - 9PM</span>, SUN <span>8AM - 6PM</span>  </h5>
        </div>
        <ul>
          <li><IoIconPack.IoEmail/></li>
          <li><IoIconPack.IoSocialFacebook/></li>
          <li><IoIconPack.IoIosTelephone /></li>
          <li><IoIconPack.IoIosLocation/></li>
        </ul>

      </SocialNav>
    </SocialWrapper>
    <NavContainer row >
      <img src={logoLink}/>
      <Nav>
        <NavLink exact to="/">Home</NavLink>
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
