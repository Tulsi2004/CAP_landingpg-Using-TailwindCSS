import React from 'react';
import FeatureBox from './FeatureBox';

const LandingPage = () => {
  return (
    <div className="text-center">
      {/* Landing Content */}
      <div className="my-5">
        <h1 className="text-4xl font-bold text-black">Capital Need Analysis</h1>
        <p className="font-normal">
          Plan your financial future with precision. Our intelligent analysis tool <br />
          adapts to your life stage and goals.
        </p>
      </div>

      {/* Feature Section */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 p-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://t3.ftcdn.net/jpg/02/04/52/72/360_F_204527293_o9ut8AIm2PaXQg22sSqLMH354X8weheJ.jpg')`,
        }}
      >
        <div className="flex justify-center">
          <FeatureBox
            title="Fresh Investor"
            description="Perfect for young professionals starting their investment journey. Get personalized guidance for your first steps in financial planning."
            buttonColor="green"
            imageSrc="https://media.istockphoto.com/id/1045368942/vector/abstract-green-leaf-logo-icon-vector-design-ecology-icon-set-eco-icon.jpg?s=612x612&w=0&k=20&c=XIfHMI8r1G73blCpCBFmLIxCtOLx8qX0O3mZC9csRLs="
          />
        </div>
        <div className="flex justify-center">
          <FeatureBox
            title="Newly Married"
            description="Perfect for young professionals starting their investment journey. Get personalized guidance for your first steps in financial planning."
            buttonColor="purple"
            imageSrc="https://img.favpng.com/17/2/19/purple-heart-day-purple-heart-symbol-illustration-rrsJ4Yzk_t.jpg"
          />
        </div>
        <div className="flex justify-center">
          <FeatureBox
            title="Joint Family"
            description="Perfect for young professionals starting their investment journey. Get personalized guidance for your first steps in financial planning."
            buttonColor="lightblue"
            imageSrc="https://cdn-icons-png.flaticon.com/512/718/718339.png"
          />
        </div>
        <div className="flex justify-center">
          <FeatureBox
            title="Senior Citizens"
            description="Perfect for young professionals starting their investment journey. Get personalized guidance for your first steps in financial planning."
            buttonColor="orange"
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFKSc9fIjFIzziV9z9UfVmUpCrfxEx1wJs0Q&s"
          />
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="my-12">
        <h2 className="text-3xl font-bold mb-8">Why Choose CapNeeds</h2>
        <div className="flex flex-wrap justify-between gap-5">
          <div className="text-center mx-auto">
            <img
              src="https://static.vecteezy.com/system/resources/previews/035/676/429/non_2x/shield-icon-security-protection-symbol-for-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-vector.jpg"
              alt="Personalized Analysis"
              className="w-12 h-12 rounded-full mx-auto"
            />
            <h3 className="font-bold text-lg mt-4">Personalized Analysis</h3>
            <p className="text-gray-600">
              Tailored recommendations on your unique life stage and goals
            </p>
          </div>
          <div className="text-center mx-auto">
            <img
              src="https://static.vecteezy.com/system/resources/previews/029/136/770/non_2x/bar-graph-chart-icon-growth-progress-increase-performance-business-market-data-up-black-white-clipart-graphic-illustration-artwork-sign-symbol-vector.jpg"
              alt="Smart Insights"
              className="w-12 h-12 rounded-full mx-auto"
            />
            <h3 className="font-bold text-lg mt-4">Smart Insights</h3>
            <p className="text-gray-600">
              Data-driven recommendations to optimize your financial planning
            </p>
          </div>
          <div className="text-center mx-auto">
            <img
              src="https://png.pngtree.com/png-clipart/20230918/original/pngtree-lock-black-vector-icon-on-white-background-button-lock-padlock-vector-png-image_12612498.png"
              alt="Secure & Private"
              className="w-12 h-12 rounded-full mx-auto"
            />
            <h3 className="font-bold text-lg mt-4">Secure & Private</h3>
            <p className="text-gray-600">
              Your financial data encrypted and never shared with third parties
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;