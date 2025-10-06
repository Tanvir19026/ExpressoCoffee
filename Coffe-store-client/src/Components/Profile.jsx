import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../Context/AuthContext";
import { DNA } from "react-loader-spinner";


const Profile = () => {
    const {user}=useContext(AuthContext);
    const [userData,setUserData]=useState(null);
    console.log(user.email);

    useEffect(()=>{
        if(!user?.email){
            return;
        }
        fetch(`http://localhost:3000/users/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setUserData(data);
            
        })
        .catch(err=>{
            console.log(err);
        });

    },[user])
    
    return (
        <div>
            <h2 className="text-3xl font-bold mb-4 text-center title fs-1 m-5">User Profile</h2>
            {userData ? (
  <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto mb-5">
    
    <p className="text-lg font-semibold mb-2">
      Name:{" "}
      <span className="title fs-4 text-orange-500">
        {userData.name || "Anonymous User"}
      </span>
    </p>

    <p className="text-lg font-semibold mb-2">
      Email:{" "}
      <span className="title fs-4 text-orange-500">
        {userData.email || "No Email Provided"}
      </span>
    </p>

    <p className="text-lg font-semibold mb-2">
      Company Name:{" "}
      <span className="title fs-4 text-orange-500">
        {userData.companyName || "Not Specified"}
      </span>
    </p>

    <img
      src={
        userData.photoUrl ||
        "https://cdn-icons-png.flaticon.com/512/149/149071.png"
      }
      alt="Profile"
      className="w-24 h-24 rounded-full border-2 border-orange-400 shadow-md mt-3"
    />
  </div>
            ) : (
               <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />
            )}
        </div>
    );
};

export default Profile;