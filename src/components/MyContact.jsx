import React from 'react'
import { Mail, MapPin, Phone } from 'lucide-react';

const MyContact = () => {
  return (
    
     <section id='contact' className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Contact <span className='text-blue-600'>Us</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="text-blue-600" />
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">dotux@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-blue-600" />
              <div>
                <h4 className="font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">+92 123 456 7890</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-blue-600" />
              <div>
                <h4 className="font-semibold text-gray-800">Location</h4>
                <p className="text-gray-600">Timergara, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-100 p-6 rounded-lg shadow space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-2 border rounded"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                rows="4"
                className="w-full mt-1 p-2 border rounded"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default MyContact