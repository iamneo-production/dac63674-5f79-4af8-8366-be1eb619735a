import { BrowserRouter  as Router, Route, Routes} from 'react-router-dom';
import NotFound from './NotFound';
import Login from './components/Login';
import Signup from './components/Signup';
import Viewacademy from './components/Viewacademy';
import Adminacademy from './components/Adminacademy';
import Listacademies from './components/Listacademies';
import Listcourses from './components/Listcourses';
import Editinstitute from './components/Editinstitute';
import Editstudent from './components/Editstudent';
import Editcourse from './components/Editcourse';
import Addinstitute from './components/Addinstitute';
import Addstudent from './components/Addstudent';
import Addcourse from './components/Addcourse';
import Admincourse from './components/Admincourse';
import Adminstudent from './components/Adminstudent';
import Enrollcourse from './components/Enrollcourse';
import ProtectedRoute from './components/Protectedroute';
import Userlistcourses from './components/Userlistcourses'
import Example from './components/temp'
import Userenrolled from './components/Userenrolled'
import Usereditcourse from './components/Usereditcourse'



function requireAuth() {
        return  localStorage.getItem("user");
        

}
function App() {
 
  return (
    <Router>
          <div className="App">
                <div className="content">
                    
                    <Routes>
                            <Route path='/' element={<Login />} />
                            <Route path='*' element={<NotFound />} />
                            <Route 
                                path='/signup' 
                                element={
                                <Signup />
                              } />
                            <Route 
                            path='/admin/viewInstitutes' 
                            element={
                              <ProtectedRoute>
                                    <Adminacademy />
                                  </ProtectedRoute>
                            
                            } />
                            <Route 
                            path='/adminacademy' 
                            element={
                              <ProtectedRoute>
                                   <Adminacademy />
                                  </ProtectedRoute>
                            
                            } />
                            <Route path='/admin/viewCourses' element={<ProtectedRoute><Admincourse /></ProtectedRoute>} />
                            <Route path='/admin/viewStudents' element={<ProtectedRoute><Adminstudent /></ProtectedRoute>} />
                            <Route path='/admin/editInstitute' element={<ProtectedRoute><Editinstitute /></ProtectedRoute>} />
                            <Route path='/admin/editCourse' element={<ProtectedRoute><Editcourse /></ProtectedRoute>}/>
                            <Route path='/admin/editStudent' element={<ProtectedRoute><Editstudent /></ProtectedRoute>} />
                            <Route
                                path="/admin/viewCourses"
                                element={
                                  <ProtectedRoute>
                                    <Admincourse />
                                  </ProtectedRoute>
                                }
                              />
                            <Route path='/admin/addInstitute' element={<ProtectedRoute><Addinstitute /></ProtectedRoute>} />
                            <Route path='/admin/addCourse' element={<ProtectedRoute><Addcourse /></ProtectedRoute>} />
                            <Route path='/admin/addStudent' element={<ProtectedRoute><Addstudent /></ProtectedRoute>} />
                            <Route path='/user/enrollCourse' element={<ProtectedRoute><Enrollcourse /></ProtectedRoute>} />

                            <Route path='/viewacademy' element={<ProtectedRoute><Viewacademy /></ProtectedRoute>} />
                            <Route
                                path="/user/viewCourses"
                                element={
                                  <ProtectedRoute>
                                    <Userlistcourses />
                                  </ProtectedRoute>
                                }
                              />
                            <Route
                                path="/user/enrolledCourses"
                                element={
                                  <ProtectedRoute>
                                    <Userenrolled />
                                  </ProtectedRoute>
                                }
                              />

                            <Route
                                path="/user/editCourse"
                                element={
                                  <ProtectedRoute>
                                    <Usereditcourse />
                                  </ProtectedRoute>
                                }
                              />
                    </Routes>
                </div>
          </div>
    </Router>
  );
}

export default App;
