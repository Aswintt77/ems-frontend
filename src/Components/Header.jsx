import React from 'react'
import './Header.css'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
      <MDBNavbar className='navbar' bgColor=''>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' style={{ color: 'white' }}>
            <i class="fa fa-users m-2 fs-3" aria-hidden="true"></i>
            Employee Management System
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header