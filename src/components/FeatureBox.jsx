import React from 'react';

const FeatureBox = ({ title, description, buttonColor, imageSrc }) => {
  return (
    <div className="border border-gray-300 p-5 text-left w-72 bg-gray-100 rounded-lg shadow-md">
      <div className="mb-4">
        <img
          src={imageSrc}
          alt="Feature"
          className="w-12 h-12 rounded-full"
        />
      </div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button
        className={`px-4 py-2 text-white cursor-pointer text-base rounded`}
        style={{ backgroundColor: buttonColor }}
      >
        Start Analysis
      </button>
    </div>
  );
};

export default FeatureBox;