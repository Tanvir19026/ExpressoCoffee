import { Link, useNavigate, useParams } from "react-router-dom";
import bgImg from "../assets/images/more/11.png";
import { useContext, useEffect, useState } from "react";
import { CoffeContext } from "../Context/CoffeeContext";
import { showToast } from "../Components/CustomToast";


const UpdateCoffe = () => {
    const { coffees,updateCoffee  } = useContext(CoffeContext);

    const {id}=useParams();

    const coffeeToUpdate = coffees.find((coffee) => coffee._id === id);
    const navigate=useNavigate();

    const [formData, setFormData] = useState({
    name: "",
    supplier: "",
    category: "",
    cheff: "",
    tastee: "",
    details: "",
    photoURL: "",
    price: ""
  });

  useEffect(() => {
    if (coffeeToUpdate) {
      setFormData({
        name: coffeeToUpdate.name,
        supplier: coffeeToUpdate.supplier,
        category: coffeeToUpdate.category,
        cheff: coffeeToUpdate.cheff,
        tastee: coffeeToUpdate.tastee,
        details: coffeeToUpdate.details,
        photoURL: coffeeToUpdate.photoURL,
        price: coffeeToUpdate.price
      });
    }
  }, [coffeeToUpdate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await updateCoffee(id, formData);
    showToast("Coffee Information updated successfully.");
    navigate("/");
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="w-full  bg-cover bg-center bg-no-repeat"
      >
        <div className="container" style={{ marginTop: "2rem" }}>
          <Link to="/" className="title text-black text-decoration-none">
            Back to Home
          </Link>

          <div
            className="flex flex-col justify-center items-center sm:w-full
            sm:h-full container md:h-[50rem] mt-5 
            "
            style={{ backgroundColor: "#F4F3F0" }}
          >
            <p className="title">Update Existing Coffee Details</p>
            <p
              className="text-xl"
              style={{ marginLeft: "8rem", marginRight: "8rem" }}
            >
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <label htmlFor="" className="block input-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="block mb-2 mt-1 ps-2 bg-white sm:h-[2.5rem] lg:h-[3rem] sm:w-100 md:w-[18rem] lg:w-[28rem]"
                      placeholder="Enter Coffee Name"
                      name="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="block input-label">
                      Supplier
                    </label>
                    <input
                      type="text"
                      className="block mb-2 mt-1 ps-2 bg-white sm:h-[2.5rem] lg:h-[3rem] sm:w-100 md:w-[18rem] lg:w-[28rem]"
                      placeholder="Enter Supplier Name"
                      name="supplier"
                      value={formData.supplier}
                      onChange={(e) =>
                        setFormData({ ...formData, supplier: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="block input-label">
                      Category
                    </label>
                    <input
                      type="text"
                      className="block ps-2 mb-2 mt-1 bg-white sm:h-[2.5rem] lg:h-[3rem] sm:w-100 md:w-[18rem] lg:w-[28rem]"
                      placeholder="Enter Coffee Category "
                      name="category"
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div>
                    <label htmlFor="" className="block input-label">
                      Cheff
                    </label>
                    <input
                      type="text"
                      className="block mb-2 ps-2 mt-1 bg-white sm:h-[2.5rem] lg:h-[3rem] sm:w-100 md:w-[18rem] lg:w-[28rem]"
                      placeholder="Enter Coffee Cheff"
                      name="cheff"
                      value={formData.cheff}
                      onChange={(e) =>
                        setFormData({ ...formData, cheff: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="block input-label">
                      Tastee
                    </label>
                    <input
                      type="text"
                      className="block mb-2 ps-2 mt-1 bg-white sm:h-[2.5rem] lg:h-[3rem] sm:w-100 md:w-[18rem] lg:w-[28rem]"
                      placeholder="Enter Coffee Tastee"
                      name="tastee"
                      value={formData.tastee}
                      onChange={(e) =>
                        setFormData({ ...formData, tastee: e.target.value })
                      }
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="" className="block input-label">
                      Details
                    </label>
                    <input
                      type="text"
                      className="block mb-2 ps-2 mt-1 bg-white sm:h-[2.5rem] lg:h-[3rem] sm:w-100 md:w-[18rem] lg:w-[28rem]"
                      placeholder="Enter Coffee Details"
                      name="details"
                      value={formData.details}
                      onChange={(e) =>
                        setFormData({ ...formData, details: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
              <div>
                    <label htmlFor="" className="block input-label">
                      Price
                    </label>
                    <input
                      type="text"
                      className="block mb-2 ps-2 mt-1 bg-white sm:h-[2.5rem] lg:h-[3rem] sm:w-100 md:w-[18rem] lg:w-[28rem]"
                      placeholder="Enter Coffee Tastee"
                      name="price"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData({ ...formData, price: e.target.value })
                      }
                    />
                  </div>
              <div className="row">
                <div className="col-md-12">
                  <div>
                    <label htmlFor="" className="block input-label">
                      Photo URL
                    </label>
                    <input
                      type="text"
                      className="block ps-2 mb-4 mt-1 bg-white w-full h-[3rem]"
                      placeholder="Enter Coffee Photo URL"
                      name="photoURL"
                      value={formData.photoURL}
                      onChange={(e) =>
                        setFormData({ ...formData, photo: e.target.value })
                      }
                    />
                    <input
                    
                      type="submit"
                      value="Update Coffee Details"
                      className="title w-full bg-[#D2A972] border-2 border-black rounded-2 text-black h-[3.5rem] hover:bg-gray-500 transition-all duration-300 ease-linear" style={{fontSize:'1.5rem'}}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateCoffe;
