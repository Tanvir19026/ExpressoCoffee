import { Link } from "react-router-dom";
import bgImg from "../assets/images/more/11.png";
import { showToast } from "../Components/CustomToast";
import { useContext } from "react";
import { CoffeContext } from "../Context/CoffeeContext";


const AddCoffe = () => {

  const {fetchCoffees}=useContext(CoffeContext);



const handleAddCoffee =(e)=>{
  e.preventDefault();
  const fromData=new FormData(e.target);
  const data= Object.fromEntries(fromData);
  // console.log(data);

  fetch('http://localhost:3000/addcoffee',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(data)
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.insertedId){
      fetchCoffees();
      showToast('Coffee added successfully.');
      e.target.reset();
    }
    else{
      showToast("Failed to save data!", "error");
    }
  }).catch(err=>{
    showToast("Failed to save data!", "error");
  })

}




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
            <p className="title">Add New Coffee</p>
            <p
              className="text-xl"
              style={{ marginLeft: "8rem", marginRight: "8rem" }}
            >
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>

            <form onSubmit={handleAddCoffee}>
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
                      required
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
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="block input-label">
                      Price
                    </label>
                    <input
                      type="text"
                      className="block mb-2 mt-1 ps-2 bg-white sm:h-[2.5rem] lg:h-[3rem] sm:w-100 md:w-[18rem] lg:w-[28rem]"
                      placeholder="Enter Coffee price"
                      name="price"
                      required
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
                      required
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
                      required
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
                      required
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
                      required
                    />
                  </div>
                </div>
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
                      required
                    />
                    <input
                      type="submit"
                      value="Add Coffee"
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

export default AddCoffe;
