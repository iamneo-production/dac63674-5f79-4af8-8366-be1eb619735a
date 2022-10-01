import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom'
import '../index.css'

export default function Usernavbar() {
  const [showNavColor, setShowNavColor] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
        localStorage.setItem('user',false)
          navigate('/');
  }

  return (
    <>
        <div className="container">
                <MDBNavbar expand='lg' dark bgColor='success'>
                <MDBContainer fluid>
                <MDBNavbarBrand href='#'>Abacus Academy</MDBNavbarBrand>
                <MDBNavbarToggler
                type='button'
                data-target='#navbarColor02'
                aria-controls='navbarColor02'
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={() => setShowNavColor(!showNavColor)}
                >
                <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse show={showNavColor} navbar>
                <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                
                <MDBNavbarItem>
                        <MDBNavbarLink href='/viewacademy' id="userAcademy">Academy</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                        <MDBNavbarLink href='/user/enrolledCourses' id="userEnrolledCourse">Enrolled Course</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                        <MDBNavbarLink href='#' onClick={()=>logout()}  id="logout">Logout</MDBNavbarLink>
                </MDBNavbarItem>
                </MDBNavbarNav>
                </MDBCollapse>
                </MDBContainer>
        </MDBNavbar>

        </div>
      <br />

      
      
    </>
  );
}