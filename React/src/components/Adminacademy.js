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
import useFetch from './useFetch';
import Listacademies from './Listacademies';
import Navbar from './Navbar';
import '../index.css'

export default function Adminacademy() {
  const [showNavColor, setShowNavColor] = useState(false);


  const { data: institutes, isPending, error} = useFetch("http://localhost:8080/admin/viewInstitutes");
  return (
    <>
        <Navbar />
                <div className="container">
                        { error && <div> { error } </div>}
                        { isPending && <div> Loading...</div>}
                        { institutes && <Listacademies institutes={ institutes } title="All Academies!"/> }
                </div>

      <br />

      
      
    </>
  );
}