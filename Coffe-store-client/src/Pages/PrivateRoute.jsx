

import  { useContext} from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { DNA } from 'react-loader-spinner';
import { AuthContext } from '../Context/AuthContext';



const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);

    const location=useLocation();
   
 
    if(loading)
    {
        return <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />
    }

    if(!user)
    {
        return <Navigate to='/login'  replace state={{from:location}}></Navigate>
    }
    else
    {
        return children;
    }
    // return children;
};

export default PrivateRoute;