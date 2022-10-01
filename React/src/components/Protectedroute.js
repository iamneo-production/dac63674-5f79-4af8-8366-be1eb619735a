import {
        
        Navigate,
        useLocation
      } from 'react-router-dom';
      
      const ProtectedRoute = ({ children }) => {
        const logged = localStorage.getItem('user')
        const location = useLocation();
        if (logged=="false") {

                return <Navigate to="/" replace state={{ from: location }} />;
        }
      
        return children;
      };

      export default ProtectedRoute;