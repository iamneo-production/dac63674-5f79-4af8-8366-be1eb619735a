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
import Userlistacademies from './Userlistacademies';

import Usernavbar from './Usernavbar';
import '../index.css'

export default function Viewacademy() {
  const [showNavColor, setShowNavColor] = useState(false);


  const { data: institutes, isPending, error} = useFetch("http://localhost:8080/admin/viewInstitutes");
  return (
    <>
        <Usernavbar />
                <div className="container">
                        { error && <div> { error } </div>}
                        { isPending && <div> Loading...</div>}
                        { institutes && <Userlistacademies institutes={ institutes } title="All Academies!"/> }
                </div>

      <br />

      
      
    </>
  );
}