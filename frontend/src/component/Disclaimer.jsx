import React from "react";

const Disclaimer = () => {
  return (
  <>
  <div>
  
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl w-full">
      <img
        src="/logo2.png" // Replace with your logo URL
        alt="Automate Channels Logo"
        className="h-[15vh] mx-auto "
      />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Disclaimer</h1>
        <p className="text-gray-600 mb-4">
          The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
        </p>
        <p className="text-gray-600 mb-4">
          Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
        </p>
        <p className="text-gray-600 mb-4">
          Through this website, you may be able to link to other websites that are not under our control. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
        </p>
        <p className="text-gray-600">
          Every effort is made to keep the website up and running smoothly. However, we take no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
        </p>
        <p className="text-gray-600 mt-4">
          If you have any questions about this disclaimer, please contact us at <span className="text-blue-500">priyanshumankotia@gmail.com</span>.
        </p>
      </div>
    </div>
    </div>
    </>
  );
};

export default Disclaimer;
