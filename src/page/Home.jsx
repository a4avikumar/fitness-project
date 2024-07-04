import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import React from 'react'

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="relative bg-black text-white h-screen flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1612090295965-e506249ccecc?q=80&w=1524&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Fitness Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity duration-500"
        />
        <div className="relative z-10 text-center p-6 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 mb-4 transition duration-500">Transform Your Life with Our Fitness Programs</h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-8 transition duration-500">Personalized Training, Group Classes, and Nutrition Plans</p>
          <Link to='/' className="bg-yellow-400 shadow-lg text-black py-2 px-4 rounded-md text-lg hover:bg-yellow-500 transition duration-300">Join Now</Link>
        </div>
      </div>
      <div className="bg-gray-900 text-white py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 text-center mb-10">Featured Programs</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-gray-800 shadow-lg rounded-lg p-6 transition transform hover:scale-105">
        <h3 className="text-xl font-bold  mb-4">Weight Loss Bootcamp</h3>
        <p className="text-gray-400 mb-4">A comprehensive program designed to help you shed pounds and get in shape.</p>
        <button className="bg-yellow-400 text-gray-900 py-2 px-4 rounded-md text-lg hover:bg-yellow-500 transition duration-300">Learn More</button>
      </div>
      <div className="bg-gray-800 shadow-lg rounded-lg p-6 transition transform hover:scale-105">
        <h3 className="text-xl font-bold mb-4">Strength Training</h3>
        <p className="text-gray-400 mb-4">Build muscle and increase your strength with our expert trainers.</p>
        <button className="bg-yellow-400 text-gray-900 py-2 px-4 rounded-md text-lg hover:bg-yellow-500 transition duration-300">Learn More</button>
      </div>
      <div className="bg-gray-800 shadow-lg rounded-lg p-6 transition transform hover:scale-105">
        <h3 className="text-xl font-bold  mb-4">Yoga and Meditation</h3>
        <p className="text-gray-400 mb-4">Find your inner peace and improve flexibility with our yoga and meditation classes.</p>
        <button className="bg-yellow-400 text-gray-900 py-2 px-4 rounded-md text-lg hover:bg-yellow-500 transition duration-300">Learn More</button>
      </div>
    </div>
  </div>
</div>

      <div className="bg-black text-white py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl text-yellow-400 font-extrabold text-center mb-10">Success Stories</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-gray-800 text-white shadow-lg rounded-lg p-6">
        <p className="mb-4">"I've never felt better since joining this fitness center. The trainers are amazing and the atmosphere is so motivating!"</p>
        <p className="text-gray-400">- Emily R.</p>
      </div>
      <div className="bg-gray-800 text-white shadow-lg rounded-lg p-6">
        <p className="mb-4">"The weight loss bootcamp changed my life. I lost 20 pounds in 3 months and feel healthier than ever!"</p>
        <p className="text-gray-400">- John D.</p>
      </div>
      <div className="bg-gray-800 text-white shadow-lg rounded-lg p-6">
        <p className="mb-4">"Yoga and meditation classes have been a game changer for my mental health and flexibility."</p>
        <p className="text-gray-400">- Sarah K.</p>
      </div>
      <div className="bg-gray-800 text-white shadow-lg rounded-lg p-6">
        <p className="mb-4">"Strength training sessions helped me gain muscle and boost my confidence."</p>
        <p className="text-gray-400">- Michael T.</p>
      </div>
    </div>
  </div>
</div>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
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
