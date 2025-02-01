import React, { useEffect, useRef, useState } from "react";
import logo2 from "/logo2.png";

import Mainpage from "./mainpage1";
import Footer from "./component/Footer";
import Page2 from "./component/Page2";
import Page3 from "./component/Page3";
import one from "/one.mp4";
import main from "/main1.png";
import mainvid from "/mainlogo.mp4";

import { VITE_BACKEND_HOST_URL, VITE_RAZORPAY_KEY_ID } from "../config";

// import { toast } from "react-toastify";
const App = () => {
  const [amount, setamount] = useState(10);

  

  // handlePayment Function
  const handlePayment = async () => {
    try {
      const res = await fetch(`${VITE_BACKEND_HOST_URL}/api/payment/order`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          amount,
        }),
      });

      const data = await res.json();
      console.log(data);
      handlePaymentVerify(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePaymentVerify = async (data) => {
    try {
      // Check if Razorpay is loaded properly
      if (typeof window !== "undefined" && window.Razorpay) {
        const options = {
          key: VITE_RAZORPAY_KEY_ID, // Ensure the environment variable is correct
          amount: data.amount,
          currency: data.currency,
          name: "7xautomation",
          description: "Test Mode",
          order_id: data.id,
          handler: async (response) => {
            try {
              const res = await fetch(
                `${VITE_BACKEND_HOST_URL}/api/payment/verify`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                  }),
                }
              );

              const verifyData = await res.json();

              if (verifyData.message) {
                toast.success(verifyData.message);
              } else {
                toast.error("Payment verification failed");
              }
            } catch (error) {
              console.error("Error verifying payment:", error);
              toast.error("An error occurred during verification.");
            }
          },
          theme: {
            color: "#5f63b8",
          },
        };

        // Initialize Razorpay and open payment modal
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } else {
        console.error("Razorpay is not loaded properly.");
        toast.error("Razorpay is not loaded properly.");
      }
    } catch (error) {
      console.error("Error handling payment:", error);
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <div className="h-full w-full ">
       <div className="bg-white flex flex-col md:flex-row justify-evenly  md:h-[25vh] sm:h-[20vh]  items-center p-4">
      <div className="flex justify-center mb-4 md:mb-0 h-[10vh] sm:h-[25vh] md:h-[30vh]">
        <img
          src={logo2}
          alt="Logo"
          className="h-full"
        />
      </div>
      <div className="text-center relative bottom-6 ">
        <h2 className="font-extrabold  text-lg md:text-2xl">
          February 1st @ 8 PM - 9 PM IST
        </h2>
        <div className="animate-move-left-right">
        <button
          onClick={handlePayment}
          className=" special-button rounded-xl  bg-red-600  font-extrabold text-white uppercase  text-[3vh] sm:text-[2vh] md:text-xl tracking-tighter cursor-pointer shadow-md shadow-black py-1 md:py-3 px-4 md:px-8 relative top-3 md:mt-0 h-24 sm:h-24"
        >
          SECURE YOUR ₹299 SEAT
        </button>
        </div>
      </div>
    </div>

      {/* <Mainpage /> */}

      <div className="body bg-[#D82122] h-full text-white p-8 md:p-8  z-100 relative ">
        <div className="text-center flex flex-col items-center">
          <h2 className="font-bold capitalize sm:text-sm md:text-xl ">
            Learn how regular people are making money online by leveraging
          </h2>
          <video
            src={mainvid}
            autoPlay
            muted
            loop
            className="w-full max-w-[800px]"
          ></video>
          <h2 className="font-bold capitalize  md:text-xl sm:text-sm mb-4 ">
            To build a consistent income, while only spending a few hours a week
          </h2>
        </div>
        <div className="flex justify-center mt-3 relative">
          <iframe
            className="aspect-video sm:h-[65vh] h-[26vh] w-[115%] max-w-[800px] "
            src="https://www.youtube.com/embed/TyzVNa6VUuU"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h1
    
        className="absolute bg-white text-black capitalize w-[115%] max-w-[800px] flex justify-center text-[1.7vh] sm:text-xl font-extrabold z-20 mt-[-2vh]"
      >
       watch this short video below to find out more:
      </h1>
        </div>
        <div className="text-center">
        <h2 className="font-extrabold  text-lg md:text-2xl">
          February 1st @ 8 PM - 9 PM IST
        </h2>
        <div className="animate-move-left-right">
       <button
       
          onClick={handlePayment}
          className="bg-white  special-button font-extrabold rounded-xl  uppercase  text-[3vh] sm:text-[2vh] md:text-xl tracking-tighter cursor-pointer shadow-md shadow-black py-1 md:py-3 px-4 md:px-8 relative top-3 md:mt-0 h-24 sm:h-24"
        >
          SECURE YOUR ₹299 SEAT
      </button>
      </div>
      </div>
      </div>


      <div className="h-full mt-3 ">
        <Page2 />
        {/* Page 3 */}
        <Page3 />
        <Footer />
      </div>
    </div>
  );
};

export default App;
