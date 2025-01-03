import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
  const [result, setResult] = useState(""); 

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f2af7371-fbd2-48cf-9c7c-5f11ad883531");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("");
        toast.success("Form Submitted Succesfully")
        event.target.reset();                                       //toastify react on google
      } else {                                                  // "import { ToastContainer } from 'react-toastify';" in app.jsx
        console.log("Error", data);                             //and in terminal ran "npm i react-toastify which downloads the api"
        toast.error(data.message)
        setResult("");
      }
    } catch (error) {
      console.error("Error while sending the form:", error);
      alert("Something went wrong. Please try again later.");
      setResult("");
    }
  };

  return (
    <div className="container mx-auto py-10 px-4 md:px-20 lg:px-32" id="Contact">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-5xl font-bold mb-2">
          <span className="underline decoration-2 decoration-blue-500">Contact</span> Us
        </h1>
        <p className="text-gray-600 text-lg">
          Have questions? We're here to help. Reach out to us and let's connect!
        </p>
      </div>
      <div className="bg-gray-50 shadow-lg rounded-lg p-8 md:p-12">
        <form onSubmit={onSubmit}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input
                type="text"
                name="name" 
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Your Email</label>
              <input
                type="email"
                name="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              name="message" 
              placeholder="Write your message here"
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded shadow-lg hover:from-blue-600 hover:to-blue-800 transition"
            >
              {result ? result : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
