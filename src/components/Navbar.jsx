import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white">
      <div className="text-2xl font-bold text-black">CAPNeeds</div>
      <div className="flex items-center">
        <ul className="flex list-none gap-5 mr-5">
          <li className="text-black cursor-pointer">Features</li>
          <li className="text-black cursor-pointer">About</li>
          <li className="text-black cursor-pointer">Support</li>
        </ul>
        <div className="flex">
          <button className="bg-blue-500 text-white px-4 py-2 ml-2 text-base rounded">Login</button>
          <button className="bg-blue-500 text-white px-4 py-2 ml-2 text-base rounded">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;