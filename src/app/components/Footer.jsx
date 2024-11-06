import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0A7594] text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 space-y-10 md:space-y-0">
        
        {/* Logo and Navigation Links */}
        <div>
          <Image 
            src="/images/footer/docuhealth footer logo.png" 
            alt="DocuHealth Logo" 
            width={150} // Adjust width as needed
            height={50} // Adjust height as needed
            className="mb-2"
          />
          <nav className="grid gap-y-2">
  <a href="#" className="hover:text-teal-300 text-[#00B6D7]">Home</a>
  <a href="#" className="hover:text-teal-300 text-[#00B6D7]">Find Doctor</a>
  <a href="#" className="hover:text-teal-300 text-[#00B6D7]">Medical Records</a>
  <a href="#" className="hover:text-teal-300 text-[#00B6D7]">Contact</a>
  <a href="#" className="hover:text-teal-300 text-[#00B6D7]">About Us</a>
</nav>

        </div>
        
        {/* Contact Information */}
        <div>
  <h2 className="text-xl font-bold mb-4 text-black">Contact</h2>
  <ul className="grid grid-cols-1 gap-8">
    <li className="grid grid-cols-[1fr_auto] items-center gap-8">
      <a href="mailto:info@docuhealth.com" className="hover:text-teal-300 text-[#00B6D7]">Email</a>
      <Image src="/images/footer/icon_7-removebg-preview 1.png" alt="Email" width={20} height={20} />
    </li>
    <li className="grid grid-cols-[1fr_auto] items-center gap-8">
      <a href="#" className="hover:text-teal-300 text-[#00B6D7]">LinkedIn</a>
      <Image src="/images/footer/icon_6-removebg-preview 1.png" alt="LinkedIn" width={20} height={20} />
    </li>
    <li className="grid grid-cols-[1fr_auto] items-center gap-8">
      <a href="#" className="hover:text-teal-300 text-[#00B6D7]">Instagram</a>
      <Image src="/images/footer/icon_5-removebg-preview 1.png" alt="Instagram" width={20} height={20} />
    </li>
    <li className="grid grid-cols-[1fr_auto] items-center gap-8">
      <a href="#" className="hover:text-teal-300 text-[#00B6D7]">Twitter</a>
      <Image src="/images/footer/icon_4-removebg-preview 1.png" alt="Twitter" width={20} height={20} />
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