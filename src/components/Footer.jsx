import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[rgb(30,30,90)] text-white p-10 flex flex-col">
      {/* Top Section */}
      <div className="flex w-full justify-between items-start mb-8">
        {/* Left Section */}
        <div className="flex-1">
          <div className="text-2xl font-bold mb-4">CAPNeeds</div>
          <p className="text-white leading-relaxed">
            Smart financial planning for every life <br /> stage
          </p>
        </div>

        {/* Links Section */}
        <div className="flex-[2] flex justify-around gap-8">
          {/* Product Links */}
          <div className="text-left">
            <h3 className="text-lg font-bold mb-4">Product</h3>
            <p className="text-white mb-2">Features</p>
            <p className="text-white mb-2">Pricing</p>
            <p className="text-white">Support</p>
          </div>

          {/* Company Links */}
          <div className="text-left">
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <p className="text-white mb-2">About</p>
            <p className="text-white mb-2">Blog</p>
            <p className="text-white">Careers</p>
          </div>

          {/* Legal Links */}
          <div className="text-left">
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <p className="text-white mb-2">Privacy</p>
            <p className="text-white mb-2">Terms</p>
            <p className="text-white">Security</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-8 pt-5">
        <p className="text-sm">2025 CapNeeds. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;