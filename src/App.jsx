import React from "react";
import coffeeSplash from "../public/coffee splash.png";
import pouch from "../public/pouch.png";
import beans from "../public/beans.png";
import beansBag from "../public/beans bag.png";
import { FaSearch, FaShoppingCart } from 'react-icons/fa'; // Importing icons from react-icons

const App = () => {
  return (
    <div className="w-full sm:w-[90%] sm:m-auto min-h-screen">
      <header className=" flex sm:justify-around justify-between mb- items-center p-4">
        <div>
          <h1 className="sm:text-4xl text-2xl font-bold text-gray-800">Coffee</h1>
        </div>

        <ul className="sm:flex hidden justify-center items-center gap-6 capitalize">
          <li>product</li>
          <li>Special offers</li>
          <li>The process</li>
          <li>Packing</li>
          <li>About</li>
        </ul>

        <div className="flex   sm:flex-row gap-4 sm:items-center">
      {/* Search Input */}
      <div className="flex items-center gap-2 sm:w-auto w-full">
     <input type="text" 
     className="border border-gray-600 rounded-full px-4 py-2 w-full sm:w-auto hidden sm:block"
     placeholder="Search for products..."
     />
        {/* Search Icon for Larger Screens */}
        <div className="sm:hidden">
          <FaSearch className="text-xl" />
        </div>
      </div>

      {/* Cart Button with Text on Small Screens */}
      <div className="flex items-center gap-2">
   

        {/* Cart Icon on Larger Screens */}
        <div className=" sm:block">
          <FaShoppingCart className="text-xl" />
        </div>
      </div>
    </div>

        <button className="bg-[#482010] px-4 p-2  hidden  sm:block text-sm text-white sm:px-6 sm:py-3 rounded-full">
          Log in / Sign up
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col  sm:flex-row justify-center sm:justify-between items-center sm:px-10 px-4 py-10">
        <div className="left sm:w-[50%] w-full flex flex-col justify-center gap-4">
          <h1 className="text-3xl sm:text-6xl font-bold bg-gradient-to-r from-[#482010] to-[#9A6651] bg-clip-text text-transparent uppercase">
            {"coffeo".split("").map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </h1>
          <h3 className="sm:text-5xl text-xl font-bold">An online coffee store</h3>
          <p className="sm:text-lg text-sm text-gray-700">
            Straight to your doorstep. We don't roast our beans until we have
            your order. Every order is roasted and shipped the same day.
          </p>

          <button className="bg-[#482010] text-white sm:px-6 sm:py-3 rounded-full w-full sm:w-1/2">
            Explore our products
          </button>

          <div className="flex gap-6 mt-6">
            <div className="flex flex-col items-center">
              <p className="sm:text-lg font-semibold text-gray-700">Our Products</p>
              <p className="sm:text-3xl font-bold text-blue-500">+1000</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="sm:text-lg font-semibold text-gray-700">Our Customers</p>
              <p className="sm:text-3xl font-bold text-green-500">+500</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="sm:text-lg font-semibold text-gray-700">Orders Completed</p>
              <p className="sm:text-3xl font-bold text-red-500">+2000</p>
            </div>
          </div>
        </div>
        <div className="right sm:block hidden w-[40%]">
          <img
            src={coffeeSplash}
            alt="coffeeSplash"
            className="z-20 object-cover rotate-[290deg] w-full"
          />
        </div>
      </section>

      <h1 className="w-full p-2 bg-[#482010] text-white text-sm text-center font-bold sm:tracking-[1rem] mt-6">
        {"coffeo ".repeat(4).trim()}
      </h1>

      {/* Recent Products Section */}
      <section className="w-full sm:w-[90%] mx-auto p-10">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Explore the Recent Products
        </h2>
        <p className="text-center text-gray-700 mt-4 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id turpis,
          consectetur at velit. Sed auctor, eros vel sollicitudin.
        </p>

        <div className="flex flex-wrap justify-center gap-10 mt-10">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="relative w-full sm:w-[20%] bg-white border-slate-200 border p-6 text-center shadow-lg rounded-lg"
            >
              <img
                src={pouch}
                alt="pouch"
                className="w-[140px] h-[140px] object-cover absolute -top-12 left-1/2 transform -translate-x-1/2"
              />
              <div className="mt-14">
                <h3 className="text-xl font-bold text-gray-800">Product {i + 1}</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="mt-2">
                  <span className="text-sm font-semibold text-gray-600 mr-2">Price:</span>
                  ₹{(i + 1) * 100}
                </p>

                <div className="flex justify-center items-center gap-4 mt-4">
                  <button className="text-red-500 hover:text-red-700 text-2xl">❤️</button>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Beans Section */}
      <section className="flex justify-between items-center p-10 gap-4 border h-[30vh] bg-[#882903d0] text-white rounded-sm">
        <div className="left">
          <h1 className="text-4xl font-bold">Check out our best Beans</h1>
          <button className="mt-4 text-sm font-semibold text-slate-100">
            See all <span className="text-blue-500">products</span>
          </button>
        </div>
        <div className="right">
          <img
            src={beans}
            alt="Beans"
            className="w-[250px] h-[250px] object-cover"
          />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-[90vw] sm:w-[80%] max-w-7xl mx-auto text-center p-10 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-gray-800">Our Story</h2>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          What started as a small passion project has now grown into a brand loved by thousands.
          We believe in delivering high-quality, sustainable products that not only enhance your lifestyle
          but also contribute to a healthier planet.
        </p>
        <div className="mt-6 sm:m-auto w-full max-w-3xl">
          <img
            src="https://img.freepik.com/free-photo/sack-art-spoon-black-cup_1172-298.jpg?uid=R81063297&ga=GA1.1.19831031.1735988050&semt=ais_hybrid"
            alt="Our Journey"
            className="w-full h-64 object-cover  rounded-lg shadow-md"
          />
        </div>
        <div className="mt-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Weekend Special Section */}
      <section className="flex flex-col items-center p-10 gap-6 border text-white rounded-sm">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">Weekend Special Products</h2>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Enjoy exclusive discounts on our handpicked products this weekend. Grab your favorites before the offer ends!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full max-w-6xl">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white text-gray-900 rounded-lg shadow-lg p-5 transition-transform transform hover:scale-105">
              <img src={pouch} alt={`Product Pouch ${i + 1}`} className="w-full h-48 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mt-4">Product {i + 1}</h3>
              <p className="text-gray-600 mt-2">Product description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-blue-600">₹{(i + 1) * 100}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join and Get Offer Section */}
      <section className="flex flex-col md:flex-row justify-center  items-center p-10 gap-6 border h-auto md:h-[60vh] bg-[#882903d0] text-white rounded-sm">
        <div className="left max-w-lg text-center md:text-left">
          <h1 className="text-4xl font-bold text-white">
            Join in and get <span className="text-yellow-400">20%</span> off
          </h1>
          <p className="mt-4 text-gray-100">
            Sign up for exclusive deals and discounts delivered straight to your inbox.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Join Now
          </button>
        </div>
        <div className="right flex justify-center items-center w-full max-w-xs md:w-[50%]">
          <img
            src={beansBag}
            alt="Beans Bag"
            className="w-[180px] h-[250px] object-cover"
          />
        </div>
      </section>

      <footer className="bg-[#482010]  text-white py-6 sm:p-20 ">
        <div className="container mx-auto text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
            {/* Footer Logo */}
            <div className="mb-4 sm:mb-0">
              <h2 className="text-2xl font-bold">Coffee Shop</h2>
            </div>

            {/* Footer Links */}
            <div className="flex gap-4 mb-4 sm:mb-0">
              <a href="#" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">Products</a>
              <a href="#" className="hover:underline">About Us</a>
              <a href="#" className="hover:underline">Contact</a>
            </div>

            {/* Footer Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-300">Facebook</a>
              <a href="#" className="hover:text-gray-300">Instagram</a>
              <a href="#" className="hover:text-gray-300">Twitter</a>
            </div>
          </div>

          {/* Footer Copyright */}
          <div className="mt-4 text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Coffee Shop. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
