import { Link, useNavigate } from "react-router-dom";
import img1 from "../assets/images/more/4.png";
import img2 from '../assets/images/more/5.png';
import { FaCoffee } from "react-icons/fa";

import { Eye, Edit, Trash2 } from "lucide-react";
import { CoffeContext } from "../Context/CoffeeContext";
import { useContext, useState } from "react";

const CoffeeCollection = () => {
    const {coffees,deleteCoffee}=useContext(CoffeContext);
   const navigate = useNavigate();
  return (
    <div className="relative mt-5" >
      {/* Background image */}
      <div>
        <img src={img1} alt="" className="absolute top-0 left-0 w-[10rem] md:w-[20rem]" />
      </div>

      {/* Title & Button */}
      <div className="container text-center">
        <p className="text-[1.5rem]">--Sip & Savor--</p>
        <p className="title">Our Popular Products</p>

        <div className="flex justify-center items-center" >
          <button
            onClick={() => navigate("/addcoffee")}
            style={{ fontSize: "1.2rem", color: "white" }}
            className="flex justify-center items-center gap-2 bg-[#d9800c] px-4 py-2 mt-2 title border-2 border-black hover:bg-orange-500 transition-all duration-300 ease-linear"
          >
            Add Coffee
            <FaCoffee className="text-black" />
          </button>
        </div>

        {/* Coffee Cards */}
        <CoffeeList coffees={coffees} deleteCoffee={deleteCoffee} />
      </div>
         <div className="absolute bottom-0 right-0 w-[15rem]  md:w-[25rem] z-1">
        <img src={img2} alt=""  />
      </div>
    </div>
  );
};

// --------------------------------------
// ✅ CoffeeList Component
// --------------------------------------
const CoffeeList = ({ coffees,deleteCoffee }) => {

 const [hiddenIds, setHiddenIds] = useState([]);

 const navigate = useNavigate();

  const toggleHidden = (id) => {
    if (hiddenIds.includes(id)) {
      setHiddenIds(hiddenIds.filter((hid) => hid !== id));
    } else {
      setHiddenIds([...hiddenIds, id]);
    }
  };



  return (
    <div className="relative z-2 grid grid-cols-1 xl:grid-cols-2 gap-5 mt-8"style={{paddingTop:'5rem',paddingBottom:'5rem'}}>
{coffees.map((coffee) => {
        const isHidden = hiddenIds.includes(coffee._id);

        return (
          <div
            key={coffee._id}
            className="flex justify-between items-center gap-6 h-[16rem] w-full max-w-4xl bg-[#F5F4F1] rounded-lg p-4 mx-auto"
            style={{ filter: "saturate(120%)" }}
          >
            {/* Left: Image */}
            <div className="w-32 h-32 flex-shrink-0">
              <img
                src={coffee.photoURL}
                alt={coffee.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Middle: Details */}
            <div className="flex flex-col justify-center flex-1">
              <div className="grid grid-cols-2 gap-x-1 gap-y-1">
                <p className="font-semibold text-gray-700">Name:</p>
                <p className="text-gray-800">
                  {isHidden ? "*****" : coffee.name}
                </p>

                <p className="font-semibold text-gray-700">Cheff:</p>
                <p className="text-gray-800">
                  {isHidden ? "*****" : coffee.cheff}
                </p>

                <p className="font-semibold text-gray-700">Price:</p>
                <p className="text-gray-800">
                  {isHidden ? "*****" : `${coffee.price} Taka`}
                </p>
              </div>
            </div>

            {/* Right: Action Icons */}
            <div className="flex flex-col justify-center gap-4 min-w-[3rem]">
              <button
                className="text-gray-700 hover:text-blue-600 transition mb-1"
                title="View"
                onClick={() => toggleHidden(coffee._id)}
              >
                <Eye size={22} />
              </button>
           
                
                <button onClick={() => navigate(`/editcoffee/${coffee._id}`)}
                className="text-gray-700 hover:text-green-600 transition mb-1"
                title="Edit"
              >
                 <Edit size={22} />
              </button>
                
            
               
            
              <button
                className="text-gray-700 hover:text-red-600 transition mb-1"
                title="Delete"
                onClick={() => deleteCoffee(coffee._id)}
              >
                <Trash2 size={22} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CoffeeCollection;
