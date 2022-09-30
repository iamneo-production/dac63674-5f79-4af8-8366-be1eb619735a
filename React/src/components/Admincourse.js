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
import Listcourses from './Listcourses';
import Navbar from './Navbar';
import axios from 'axios';
import '../index.css'

export default function Admincourse() {
  const [showNavColor, setShowNavColor] = useState(false);


  const { data: courses, isPending, error} = useFetch("http://localhost:8080/admin/viewCourses");

  return (
    <>
        <Navbar />
                <div className="container">
                        { error && <div> { error } </div>}
                        { isPending && <div> Loading...</div>}
                        { courses && <Listcourses courses={ courses } title="All Courses!"/> }
                </div>

      <br />

      
      
    </>
  );
}