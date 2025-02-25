import React from "react";
import coffeeSplash from "../public/coffee splash.png";
import pouch from "../public/pouch.png";
import beans from "../public/beans.png";
import beansBag from "../public/beans bag.png";

const App = () => {
  return (
    <div className="w-[80%] m-auto  min-h-screen ">
      <header className="flex justify-around mb-6 items-center p-2">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">Coffee </h1>
        </div>

        <ul className="flex justify-center  items-center gap-4 capitalize ">
          <li>product</li>
          <li>Special offers</li>
          <li>The process</li>
          <li>Packing</li>
          <li>About</li>
        </ul>

        <div className="flex gap-2 ">
          <p className="bg-white p-2 rounded-full">sear</p>
          <p className="bg-white p-2 rounded-full">cart</p>
        </div>
        <button className="bg-[#482010] text-white px-6 py-3 rounded-full">
          Log in / Sign up{" "}
        </button>
      </header>

      {/* hero section */}
      <section className="w-full min-h-full flex justify-around">
        <div className="left w-[50%] flex flex-col justify-center max-h-full gap-4  p-5  ">
          <h1 className="text-8xl uppercase font-bold bg-gradient-to-r from-[#482010] to-[#9A6651]  bg-clip-text text-transparent">
            {"coffeo".split("").map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </h1>
          <h3 className="text-5xl font-bold">An online coffee store </h3>
          <p className="text-lg ">
            Straight to your doorstep. We dont roast our beans until we have
            your order.Every order is roasted and shipped the same day.
          </p>

          <button className="bg-[#482010] text-white px-6 py-3 rounded-full w-1/2 ">
            Explore our products
          </button>
          <div className="flex gap-4">
            <div className="border-r-2 border-gray-200 pr-4 last:border-r-0">
              <p className="text-lg font-semibold text-gray-700 mr-2">
                Our Products
              </p>
              <p className="text-3xl font-bold text-blue-500">+1000</p>
            </div>
            <div className="border-r-2 border-gray-200 pr-4 last:border-r-0">
              <p className="text-lg font-semibold text-gray-700 mr-2">
                Our Customers
              </p>
              <p className="text-3xl font-bold text-green-500">+500</p>
            </div>
            <div className="border-r-2 border-gray-200 pr-4 last:border-r-0">
              <p className="text-lg font-semibold text-gray-700 mr-2">
                Orders Completed
              </p>
              <p className="text-3xl font-bold text-red-500">+2000</p>
            </div>
          </div>
        </div>
        <div className="right h-full w-[50%]  ">
          <img
            src={coffeeSplash}
            alt="coffeeSplash"
            className="z-20 object-cover rotate-[290deg]  "
          />
        </div>
      </section>

      <h1 className="w-full p-2 bg-[#482010] rotate-[-10deg] mt-[4vh] text-white text-sm text-center font-bold capitalize tracking-[1rem]">
        {"coffeo ".repeat(4).trim()}
      </h1>

      <section className="w-[90vw] max-h-[100vh] mt-[20vh]  p-10 ">
       
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Explore the Recent Products
        </h2>

        {/* Subtext */}
        <p className="text-center text-gray-700 mt-4 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
          turpis, consectetur at velit. Sed auctor, eros vel sollicitudin.
        </p>

        {/* Product Cards */}
        <div className="flex flex-wrap justify-center gap-10 mt-[10vh]">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="relative w-full sm:w-[20%] bg-white border-slate-200 border  p-6 text-center shadow-lg rounded-lg"
            >
              {/* Image Overlapping the Card */}
              <img
                src={pouch}
                alt="pouch"
                className="w-[140px] h-[140px] object-cover absolute -top-12 left-1/2 transform -translate-x-1/2"
              />

              {/* Card Content */}
              <div className="mt-14">
                <h3 className="text-xl font-bold text-gray-800">
                  Product {i + 1}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="mt-2">
                  <span className="text-sm font-semibold text-gray-600 mr-2">
                    Price:
                  </span>
                  ₹{(i + 1) * 100}
                </p>

                {/* Buttons Section */}
                <div className="flex justify-center items-center gap-4 mt-4">
                  {/* Like Button */}
                  <button className="text-red-500 hover:text-red-700 text-2xl">
                    ❤️
                  </button>

                  {/* Add to Cart Button */}
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex  justify-around items-center p-10 gap-4 border h-[20vh] bg-[#882903d0]  text-white rounded-sm">
        <div className="left">
          <h1 className="text-4xl font-bold">Check out our best Beans</h1>
          <button>
            <span className="text-sm font-semibold text-slate-100 mr-2">
              See all
            </span>
            <span className="text-sm font-semibold text-blue-500">
              products
            </span>
          </button>
        </div>

        <div className="right">
          <img
            src={beans}
            alt=""
            className="
          w-[300px] h-[300px] object-cover 
          
          "
          />
        </div>
      </section>

      <section className="w-[80vw] h-auto flex flex-col items-center text-center mt-6 p-10 bg-gray-100 rounded-lg shadow-md">
  {/* Title */}
  <h2 className="text-4xl font-bold text-gray-800">
    Our Story
  </h2>

  {/* Subtext */}
  <p className="text-gray-700 mt-4 max-w-2xl">
    What started as a small passion project has now grown into a brand loved by thousands. 
    We believe in delivering high-quality, sustainable products that not only enhance your lifestyle 
    but also contribute to a healthier planet.  
  </p>

  {/* Image */}
  <div className="mt-6 w-full max-w-3xl">
    <img src="https://img.freepik.com/free-photo/sack-art-spoon-black-cup_1172-298.jpg?uid=R81063297&ga=GA1.1.19831031.1735988050&semt=ais_hybrid" alt="Our Journey" className="w-full h-64 object-cover rounded-lg shadow-md"/>
  </div>

  {/* Call-to-Action */}
  <div className="mt-6">
    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
      Learn More
    </button>
  </div>
</section>

      <section className="flex flex-col items-center p-10 gap-6 border text-white rounded-sm">
  <div className="text-center">
    <h2 className="text-4xl font-bold text-gray-800">
      Weekend Special Products
    </h2>
    <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
      Enjoy exclusive discounts on our handpicked products this weekend. Grab your favorites before the offer ends!
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full max-w-6xl">
    {/* Card 1 */}
    <div className="bg-white text-gray-900 rounded-lg shadow-lg p-5 transition-transform transform hover:scale-105">
      <img src={pouch}  alt="Product Pouch 1" className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-xl font-semibold mt-4">Herbal Green Tea Pouch</h3>
      <p className="text-gray-600 mt-2">A refreshing and healthy tea blend.</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-lg font-bold text-blue-600">$14.99</span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Buy Now</button>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white text-gray-900 rounded-lg shadow-lg p-5 transition-transform transform hover:scale-105">
      <img src={pouch}  alt="Product Pouch 2" className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-xl font-semibold mt-4">Organic Coffee Pouch</h3>
      <p className="text-gray-600 mt-2">Rich & aromatic organic coffee.</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-lg font-bold text-blue-600">$19.99</span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Buy Now</button>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white text-gray-900 rounded-lg shadow-lg p-5 transition-transform transform hover:scale-105">
      <img src={pouch} alt="Product Pouch 3" className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-xl font-semibold mt-4">Protein Powder Pouch</h3>
      <p className="text-gray-600 mt-2">Power-packed protein for a healthy lifestyle.</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-lg font-bold text-blue-600">$24.99</span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Buy Now</button>
      </div>
    </div>
  </div>
</section>


 {/* Join in and get 25% off section */}
<section className="flex flex-col md:flex-row justify-center items-center p-10 gap-6 border h-auto md:h-[60vh] bg-[#882903d0] text-white rounded-sm">
  {/* Left Section - Text */}
  <div className="left max-w-lg text-center md:text-left">
    <h1 className="text-4xl font-bold text-white">
      Join in and get <span className="text-yellow-300">25% off</span>!
    </h1>
    <p className="text-lg text-gray-200 mt-2">
      Sign up today and enjoy exclusive discounts on our premium services. 
      This is a limited-time offer, so don't miss out!
    </p>
    <div className="mt-4">
      <button className="flex items-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300">
        <span className="text-sm mr-2">Learn more</span>
        <span className="text-sm text-blue-800">about the offer</span>
      </button>
    </div>
  </div>

  {/* Right Section - Image */}
  <div className="right flex justify-center">
    <img
      src={beansBag}
      alt="Offer Image"
      className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] object-cover shadow-black rounded-lg shadow-lg"
    />
  </div>
</section>




    </div>
   
  );
};

export default App;
