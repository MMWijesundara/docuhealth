import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0A7594] text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 space-y-10 md:space-y-0">
        
        {/* Logo and Navigation Links */}
        <div>
          <h1 className="text-2xl font-bold mb-2 text-black">DocuHealth</h1>
          <nav className="flex flex-col space-y-2">
            <a href="#" className="hover:text-teal-300 text-[#00B6D7]">Home</a>
            <a href="#" className="hover:text-teal-300 text-[#00B6D7]">Find Doctor</a>
            <a href="#" className="hover:text-teal-300 text-[#00B6D7]">Medical Records</a>
            <a href="#" className="hover:text-teal-300 text-[#00B6D7]">Contact</a>
            <a href="#" className="hover:text-teal-300 text-[#00B6D7]">About Us</a>
          </nav>
        </div>
        
        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-bold mb-2 text-black">Contact</h2>
          <ul className="flex flex-col space-y-2">
            <li className="flex items-center">
              <span className="mr-2">📧</span>
              <a href="mailto:info@docuhealth.com" className="hover:text-teal-300 text-[#00B6D7]">Email</a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔗</span>
              <a href="#" className="hover:text-teal-300 text-[#00B6D7]">LinkedIn</a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📷</span>
              <a href="#" className="hover:text-teal-300 text-[#00B6D7]">Instagram</a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">🐦</span>
              <a href="#" className="hover:text-teal-300 text-[#00B6D7]">Twitter</a>
            </li>
          </ul>
        </div>
        
        {/* Newsletter Signup */}
        <div className="flex flex-col items-start">
          <h2 className="text-xl font-bold mb-2 text-black">Join our newsletter</h2>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 rounded-l-lg border-none focus:outline-none text-[#0A7594]"
            />
            <button className="bg-[#ADD8E6] hover:bg-[#87CEEB] text-white px-4 py-2 rounded-r-lg">
              SUBMIT
            </button>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
