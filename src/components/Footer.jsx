import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (

        <section id='footer' className='bg-gray-900 text-white py-10 px-4'>
            <div className='max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-8'>

                {/* Branding  */}

            <div>
                <h3 className='text-xl font-bold mb-4'>DotUX</h3>
                <p className='text-gray-400 text-sm'>
                    Building quality digital experiences with passion.
                </p>
            </div>

            {/* Quick Links  */}

            <div>
                <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>

                <ul className='space-y-2 text-gray-400 text-sm'>
                    <li><a href="#home" className="hover:text-white">Home</a></li>
                    <li><a href="#features" className="hover:text-white">About</a></li>
                    <li><a href="#pricing" className="hover:text-white">Services</a></li>
                    <li><a href="#contact" className="hover:text-white">Contact</a></li>
                   
                </ul>
            </div>

            {/* Social Icons  */}


            <div>
                <h4 className='text-lg font-semibold mb-4'>Follow Us</h4>
                <div className='flex  space-x-4'>
                    <a href="#" className='hover:text-blue-500'><Facebook /></a>
                    <a href="#" className='hover:text-sky-400'><Twitter /></a>
                    <a href="#" className='hover:text-blue-500'><Linkedin /></a>
                    <a href="#" className='hover:text-pink-500'><Instagram /></a>
                    <a href="#" className='hover:text-red-600'><Youtube /></a>
                </div>
            </div>
            </div>


                <div className='mt-10 text-center text-sm text-gray-500'>
                <hr className='mb-4 mx-auto'/>  
                   <p> &copy; {new Date().getFullYear()} DotUX. All rights reserved.</p>
                </div>

        </section>
    )
}

export default Footer