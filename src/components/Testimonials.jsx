import React from 'react'
import { Star } from 'lucide-react'
import testimonials from './data/Testimonial'

const Testimonials = () => {
    return (

        <section id='testimonials' className='bg-white py-20'>
            <div className='max-w-6xl mx-auto px-4 text-center'>
                <h2 className='text-3xl font-bold text-gray-800 mb-4'>What Our <span className='text-blue-600'>
                    Customers</span> Say</h2>
                <p className='text-gray-600 mb-12'>
                    Real voices from real users who love our service.
                </p>



                <div className='grid gap-10 sm:grid-cols-1 md:grid-cols-4'>
                    {
                        testimonials.map((t, index) => (
                            <div key={index}
                                className='bg-white border-1 border-b-yellow-600 p-6 rounded-xl shadow hover:shadow-lg transition'>


                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className='w-20 h-20 rounded-full mx-auto mb-4'
                                />

                                <h3 className='text-lg font-semibold text-gray-800'>{t.name}</h3>
                                <p className='text-sm text-gray-500 mb-4'>{t.role}</p>


                                {/* star  */}

                                <div className='flex justify-center mb-4 text-yellow-500'>
                                    {
                                        [...Array(5)].map((_, i) => (
                                            <Star key={i} size={20} fill='currentColor' />
                                        ))
                                    }
                                </div>



                                <p className='text-gray-700 text-sm italic'>{t.quote}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>


    )
}

export default Testimonials