import React, { useState } from 'react'
import dash1 from "/dash1.jpg";
import dash2 from "/dash2.jpg";
import dash3 from "/dash3.jpg";
import dash4 from "/dash4.jpg";
import dash5 from "/dash5.jpg";
import dash6 from "/dash6.jpg";
import dash7 from "/dash7.jpg";
import dash8 from "/dash8.jpg";
import dash9 from "/dash9.jpg";
import dash10 from "/dash10.jpg";

const Page2 = () => {
const [amount, setamount] = useState(10);

  const handlePayment = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_HOST_URL}/api/payment/order`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            amount,
          }),
        }
      );

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
          key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Ensure the environment variable is correct
          amount: data.amount,
          currency: data.currency,
          name: "7xautomation",
          description: "Test Mode",
          order_id: data.id,
          handler: async (response) => {
            try {
              const res = await fetch(
                `${import.meta.env.VITE_BACKEND_HOST_URL}/api/payment/verify`,
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

  return(
    <div>
      <div className="flex justify-center ">
        <div>
          <img className="sm:h-[150vh] h-[55vh] w-full" src={dash1} alt="" />
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <div>
          <img className="sm:h-[150vh] h-[55vh] w-full" src={dash2} alt="" />
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <div>
          <img className="sm:h-[150vh] h-[55vh] w-full" src={dash3} alt="" />
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <div>
          <img className="sm:h-[150vh] h-[55vh] w-full" src={dash4} alt="" />
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <div>
          <img className="sm:h-[150vh] h-[55vh] w-full" src={dash5} alt="" />
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <div>
          <img className="sm:h-[150vh] h-[55vh] w-full" src={dash6} alt="" />
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <div>
          <img className="sm:h-[150vh] h-[55vh] w-full" src={dash7} alt="" />
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <div>
          <img className="sm:h-[150vh] h-[55vh] w-full" src={dash8} alt="" />
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <div>
          <img className="sm:h-[150vh] h-[55vh] w-full" src={dash9} alt="" />
        </div>
      </div>
      <div className="flex justify-center mt-2 h-full ">
        <div className="relative flex-col justify-center items-center sm:h-[120vh] h-[60vh]">
          <img
            className="sm:h-[150vh] h-[55vh] w-full  "
            src={dash10}
            alt=""
          />
          <div className="flex flex-col items-center justify-center relative sm:bottom-[70vh] bottom-[27vh]">
          <h1
        style={{ fontStyle: "italic" }}
        className="text-[2.5vh] sm:text-[4.5vh] md:text-[45px] font-bold"
      >
        February 1st @ 8 PM - 9 PM IST
      </h1>
      </div>
      <div className="animate-move-left-right flex flex-col justify-center items-center relative sm:bottom-[60vh] bottom-[23vh]">
        <button
          onClick={handlePayment}
          className="special-button text-white bg-white font-extrabold rounded-xl text-[2.5vh] sm:text-[5.5vh] md:text-[4vh] uppercase flex flex-col justify-center items-center h-[12vh] sm:h-[20vh] tracking-tighter cursor-pointer relative bottom-4 shadow-md shadow-black w-[70vw] sm:w-[80vw] md:w-[35vw]"
        >
          SECURE YOUR ₹299 SEAT
        </button>
      </div>
      </div>
      </div>
    
    </div>
  )
}

export default Page2
