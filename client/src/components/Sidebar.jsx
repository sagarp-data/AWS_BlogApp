import React, { useEffect } from 'react';

import SideNav, {Toggle,NavItem,NavIcon, NavText} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import { Link, useNavigate } from 'react-router-dom'

function Sidebar(props) {
  //const navigate = useNavigate();

  return(
    <SideNav
    onSelect = {selected=> {
      
    }}
    className='sidenav'
    >
      <SideNav.Toggle/>
      <SideNav.Nav defaultSelected = "home">
        <NavItem eventkey="home">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize:"2em" }} />
          </NavIcon>
          <NavText><Link className='link' to='/' style={{ fontSize: '20px' }}><h3>Home</h3></Link></NavText>
          
        </NavItem>
        <NavItem eventkey="aboutus">
          <NavIcon>
            <i className="fa-solid fa-users" style={{ fontSize:"2em" }} />
          </NavIcon>
          <NavText><Link className='link' to='/aboutus' style={{ fontSize: '20px' }}><h3>About Us</h3></Link></NavText>
        </NavItem>
        <NavItem eventkey="contactus">
          <NavIcon>
            <i className="fa fa-fw fa-phone" style={{ fontSize:"2em" }} />
          </NavIcon>
          <NavText><Link className='link' to='/contactus' style={{ fontSize: '20px' }}><h3>Contact Us</h3></Link></NavText>
        </NavItem>
        <NavItem eventkey="login">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize:"2em" }} />
          </NavIcon>
          <NavText>
          <Link className='link' to='/login' style={{ fontSize: '20px' }}><h3>Login</h3></Link>
          </NavText>
        </NavItem>
      </SideNav.Nav>

    </SideNav>
  )
}

export default Sidebar;