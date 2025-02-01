import React from 'react'

function Shippingdelay() {
  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Shipping & Delay Policy</h1>
      
      <section className="bg-gray-100 p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700">Shipping Policy</h2>
        <p className="mt-2 text-gray-600">
          We process and ship orders within 1-3 business days. Orders are shipped via standard or expedited shipping, depending on your selection at checkout. Shipping costs are calculated at checkout based on your location and selected shipping method.
        </p>
        <p className="mt-2 text-gray-600">
          Once your order is shipped, you will receive a tracking number via email. Please allow up to 24 hours for tracking updates to appear.
        </p>
      </section>
      
      <section className="bg-gray-100 p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700">Estimated Delivery Times</h2>
        <ul className="mt-2 space-y-2 text-gray-600">
          <li><strong>Standard Shipping:</strong> 5-10 business days (domestic orders)</li>
          <li><strong>Expedited Shipping:</strong> 2-5 business days (domestic orders)</li>
          <li><strong>International Shipping:</strong> 10-20 business days, depending on the destination and customs processing.</li>
        </ul>
        <p className="mt-2 text-gray-600">
          Please note that these are estimated delivery times, and actual delivery may vary due to external factors.
        </p>
      </section>
      
      <section className="bg-gray-100 p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700">Possible Delays</h2>
        <p className="mt-2 text-gray-600">
          While we strive to meet our delivery estimates, unforeseen circumstances such as weather conditions, customs delays, and high order volumes may cause delays.
          If your order is delayed beyond the estimated delivery window, please contact our support team for assistance.
        </p>
        <p className="mt-2 text-gray-600">
          We appreciate your patience and will keep you updated in case of any changes to your estimated delivery time.
        </p>
      </section>
      
      <p className="text-gray-500 text-sm">
        For further assistance, please contact our support team at <a href="mailto:support@example.com" className="text-blue-600 underline">support@example.com</a>.
      </p>
    </div>
    </div>
  )
}

export default Shippingdelay