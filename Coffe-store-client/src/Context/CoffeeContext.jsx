import { createContext, useEffect, useState } from "react";
import { showToast } from "../Components/CustomToast";




export const CoffeContext=createContext();

export const CoffeProvider=({children})=>{
    const [coffees,setCoffees]=useState([]);
    const [loading,setLoading]=useState(true);

    const fetchCoffees =async()=>{
        try{

            setLoading(true);
            const response=await fetch('http://localhost:3000/coffees');
            const data=await response.json();
            setCoffees(data);
        }
        catch(err)
        {
            showToast("Failed to fetch data!", "error");
        }
        finally
        {
            setLoading(false);
        }
    }

      const deleteCoffee = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/coffees/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.deletedCount) {
        showToast("Coffee deleted successfully.");
        setCoffees((prev) => prev.filter((coffee) => coffee._id !== id));
      }
    } catch (err) {
      console.error("Failed to delete coffee:", err);
    }
  };
 const updateCoffee = async (id, updatedData) => {
    try {
      const res = await fetch(`http://localhost:3000/coffees/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      const data = await res.json();

      // Update state locally
      setCoffees((prev) =>
        prev.map((coffee) => (coffee._id === id ? data : coffee))
      );

      return data; // optional, in case component needs it
    } catch (err) {
      console.error("Failed to update coffee:", err);
    }
  };

    useEffect(()=>{
        fetchCoffees();
    },[]);

    return(
        <CoffeContext.Provider value={{coffees,loading,fetchCoffees,deleteCoffee,updateCoffee }}>
            {children}
        </CoffeContext.Provider>
    )





}