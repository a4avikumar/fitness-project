import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import React from 'react'


export const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="relative bg-black text-white h-screen flex items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1612090295965-e506249ccecc?q=80&w=1524&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Fitness Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity duration-500"
      />
      <div className="relative z-10 text-center p-6">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-300 mb-4 transition duration-500">Transform Your Life with Our Fitness Programs</h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8 transition duration-500">Personalized Training, Group Classes, and Nutrition Plans</p>
        <button className="bg-transparent shadow-lg  text-white py-2 px-4 rounded-md text-lg hover:bg-gray-700 transition duration-300">Join Now</button>
      </div>
      <style>

      </style>
    </div>
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Welcome to Our Fitness Center</h2>
          <p className="text-lg text-gray-600 mb-8">At our fitness center, we are dedicated to helping you achieve your health and wellness goals. With our personalized approach and expert guidance, you'll be on your way to a healthier lifestyle in no time.</p>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Services</h3>
          <ul className="text-lg text-gray-600">
            <li className="mb-2">Personal Training</li>
            <li className="mb-2">Group Classes</li>
            <li className="mb-2">Nutrition Coaching</li>
            {/* Add more services as needed */}
          </ul>
        </div>
      </div>
    </div>
    <div className="bg-gray-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">Featured Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Featured Program Cards */}
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Weight Loss Bootcamp</h3>
            <p className="text-gray-600 mb-4">A comprehensive program designed to help you shed pounds and get in shape.</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md text-lg hover:bg-blue-700 transition duration-300">Learn More</button>
          </div>
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Weight Loss Bootcamp</h3>
            <p className="text-gray-600 mb-4">A comprehensive program designed to help you shed pounds and get in shape.</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md text-lg hover:bg-blue-700 transition duration-300">Learn More</button>
          </div>
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Weight Loss Bootcamp</h3>
            <p className="text-gray-600 mb-4">A comprehensive program designed to help you shed pounds and get in shape.</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md text-lg hover:bg-blue-700 transition duration-300">Learn More</button>
          </div>
          {/* Repeat this card structure for other featured programs */}
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-purple-700 to-blue-600 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial Cards */}
          <div className="bg-white shadow-md rounded-md p-6">
            <p className="text-gray-800 mb-4">"I've never felt better since joining this fitness center. The trainers are amazing and the atmosphere is so motivating!"</p>
            <p className="text-gray-600">- Emily R.</p>
          </div>
          <div className="bg-white shadow-md rounded-md p-6">
            <p className="text-gray-800 mb-4">"I've never felt better since joining this fitness center. The trainers are amazing and the atmosphere is so motivating!"</p>
            <p className="text-gray-600">- Emily R.</p>
          </div>

          {/* Repeat this card structure for other testimonials */}
        </div>
      </div>
    </div>
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-4">Follow us on social media for updates and promotions</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/3 px-4">
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <form>
              <div className="mb-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Your Email" className="w-full p-3 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring focus:border-blue-500"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300">Send Message</button>
            </form>
          </div>
        </div>
        <hr className="my-8 border-gray-800" />
        <p className="text-center text-gray-400">&copy; 2024 Your Fitness Center. All rights reserved.</p>
      </div>
    </footer>


    </>
  )
}
