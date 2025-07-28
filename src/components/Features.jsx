import React from 'react'
import features from './data/Feature'
import {CheckCircle} from 'lucide-react'

const Features = () => {
    return (

        <section id='features' className='bg-white py-20'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-800 '>Awesome Features</h2>
                    <p className='text-gray-600 mt-4'>Everything you need to build powerful and modern websites.</p>
                </div>


                <div className='grid gap-10 md:grid-cols-3'>
                    {
                        features.map((feature, index) => (
                            <div key={index} className='text-center bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition'>
                                <div className='mb-4 flex justify-center'>
                                    <CheckCircle  className='h-10 w-10 text-blue-600'/>
                                </div>

                                <h3 className='text-xl font-semibold text-gray-800'>{feature.title}</h3>
                                <p className='text-gray-600 mt-2'>{feature.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Features