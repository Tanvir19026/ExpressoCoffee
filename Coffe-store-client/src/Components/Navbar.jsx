

import logo from "../assets/images/more/logo1.png";
import navBg from "../assets/images/more/15.jpg";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { DNA } from "react-loader-spinner";

const Navbar = () => {
  const {user,loading,signOutUser,setUser}=useContext(AuthContext);


    const handleSignOut = () => {
    signOutUser()
      .then(() => setUser(null))
      .catch((error) => console.log(error));
  };
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
  return (
    <header
      aria-label="Site navbar"
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${navBg})` }}
    >
   
      <div className="mx-auto px-4 md:px-6  title
                      h-16 md:h-[7.5rem] flex items-center justify-center gap-3 md:gap-2">

  
          
        

      
          <img
          src={logo}
          alt="Expresso Emperium logo"
          className="w-10 h-10 md:w-[4.6rem] md:h-[4.6rem] object-contain "
        />

        <p className="text-white me-5 text-lg md:text-2xl lg:text-3xl font-semibold tracking-wide drop-shadow-sm  mt-3">
          Expresso Emperium
        </p>
   <Link to='/' className="
          text-white text-lg md:text-2xl lg:text-3xl ms-5
          font-semibold text-decoration-none 
          tracking-wide drop-shadow-sm hover:bg-gray-500 px-3 transition-all duration-300 ease-linear">Home</Link> 
        
       
       {
        user && <Link to='/profile' className="text-white text-lg md:text-2xl lg:text-3xl font-semibold tracking-wide text-decoration-none drop-shadow-sm
        hover:bg-gray-500 px-3 transition-all duration-300 ease-linear
        ">Profile</Link>

        
       }
       {
        user ? <button onClick={handleSignOut} className="text-white text-lg md:text-2xl lg:text-3xl font-semibold tracking-wide text-decoration-none drop-shadow-sm
        hover:bg-gray-500 px-3 transition-all duration-300 ease-linear
        ">Logout</button> : <Link to='/login' className="text-white text-lg md:text-2xl lg:text-3xl font-semibold tracking-wide text-decoration-none drop-shadow-sm
        hover:bg-gray-500 px-3 transition-all duration-300 ease-linear
        ">Login</Link>
       }
      </div>
    </header>
  );
};

export default Navbar;
