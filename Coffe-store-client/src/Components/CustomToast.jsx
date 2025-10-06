import React from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CustomToast = () => {
  return (
    <ToastContainer
      newestOnTop
      closeOnClick={false}
      draggable={false}
      limit={1}
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "auto",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none",
      }}
    />
  );
};

// Function to show toast
export const showToast = (message = "Processing...", type = "loader") => {
  toast(
    ({ closeToast }) => (
      <div className="flex flex-col justify-between w-[350px] h-[220px] bg-white p-6 rounded-xl relative">
        {/* Icon / animation */}
        <div className="flex justify-center items-center mb-4">
          {type === "loader" && (
            <div className="relative w-16 h-16">
              {/* Spinner */}
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
              {/* Checkmark overlay */}
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-green-500 text-4xl">
                ✅
              </div>
            </div>
          )}
          {type === "success" && (
            <div className="text-green-500 text-6xl flex justify-center items-center">✅</div>
          )}
          {type === "error" && (
            <div
              className="text-red-500 text-6xl flex justify-center items-center"
              style={{
                display: "inline-block",
                animation: "shake 0.5s ease-in-out 0s 3",
              }}
            >
              ❌
            </div>
          )}
        </div>

        {/* Message */}
        <p className="text-gray-800 font-semibold text-center text-lg">{message}</p>

        {/* OK Button */}
        <div className="flex justify-end mt-4">
          <button
            onClick={closeToast}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium"
          >
            OK
          </button>
        </div>
      </div>
    ),
    {
      position: "top-center", // centered using container style
      autoClose: 4000, // auto close 4 seconds
      closeButton: false,
      hideProgressBar: true,
      className: "flex justify-center items-center pointer-events-auto",
      bodyClassName: "flex justify-center items-center",
    }
  );
};

// Add shake keyframes via style tag globally
if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      75% { transform: translateX(5px); }
    }
  `;
  document.head.appendChild(style);
}

export default CustomToast;
