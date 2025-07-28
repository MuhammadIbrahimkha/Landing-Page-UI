import React from 'react'

const Navbar = () => {
  return (
    
        <nav className='bg-white shadow-md sticky top-0 z-50'>
            <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
                <h1 className='text-2xl font-bold text-blue-600 hover:text-blue-700 cursor-pointer'>DotUX</h1>
                <ul className='hidden md:flex space-x-6 text-gray-700 font-medium'>
                    <li className='hover:text-blue-600 cursor-pointer'><a href="#home">Home</a></li>
                    <li className='hover:text-blue-600 cursor-pointer'><a href="#features">Features</a></li>
                    <li className='hover:text-blue-600 cursor-pointer'><a href="#pricing">Pricing</a></li>
                    <li className='hover:text-blue-600 cursor-pointer'><a href="#contact">Contact</a></li>
                </ul>

                <button className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 hidden md:block cursor-pointer'>Get Started</button>
            </div>
        </nav>




  )
}

export default Navbar