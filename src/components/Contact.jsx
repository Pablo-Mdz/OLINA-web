import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="bg-pink-500 px-6 py-8 text-white font-pop">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <div className="flex mb-4">
        <FaPhone className="mr-4" />
        <p>Call us at: 555-555-5555</p>
      </div>
      <div className="flex mb-4">
        <FaEnvelope className="mr-4" />
        <p>Email us at: hello@example.com</p>
      </div>
      <div className="flex">
        <FaMapMarkerAlt className="mr-4" />
        <p>123 Main St, Anytown USA</p>
      </div>
    </div>
  );
};


