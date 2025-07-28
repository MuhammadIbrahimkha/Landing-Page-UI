import React from 'react'

const Hero = () => {
    return (
        <section id='home' className='bg-blue-50 py-20'>
            <div className='max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between'>
                {/* Left conent  */}
                <div className='text-center md:text-left md:w-1/2'>
                    <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>Build Stunning Websites Easily.</h1>
                    <p className='text-gray-600 mb-6'>Create professional websites with just a few lines of code using modern tools and design principles.</p>
                    <button className='bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition cursor-pointer'>Learn More</button>
                </div>


                {/* Right Content  */}

                <div className='md:w-1/2 mb-10 md:mb-0'>
                    <img
                        src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg"
                        alt=""
                        className='w-full rounded-lg shadow-lg' />
                </div>

            </div>
        </section>
    )
}

export default Hero