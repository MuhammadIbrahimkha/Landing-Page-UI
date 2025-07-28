import React from 'react'
import pricingPlans from './data/PricingPlans'

const Pricing = () => {
    return (

        <section id='pricing' className='bg-gray-100 py-20'>
            <div className='max-w-7xl mx-auto px-4 text-center'>
                <h2 className='text-3xl font-bold text-gray-800 mb-6'>Pricing Plans</h2>
                <p className='text-gray-600 mb-12'>Choose a plan that fits your needs. Upgrade or cancel anytime.</p>


                <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-3'>
                    {
                        pricingPlans.map((plan, index) => (
                            <div key={index}
                                className={`p-6 rounded-lg bg-white border-2  ${plan.isPopular ? 'border-blue-600 scale-105' : 'border-transparent'} transition duration-300`}
                            >

                                {
                                    plan.isPopular && (
                                        <span className='inline-block px-3 py-1 mb-3 text-xs font-semibold text-white bg-blue-600 rounded-full'>
                                            Most Popular
                                        </span>
                                    )
                                }

                                <h3 className='text-xl font-semibold text-gray-800 mb-2'>{plan.title}</h3>
                                <p className='text-3xl font-bold text-blue-600 mb-4'>{plan.price}</p>
                                <ul className='text-gray-600 space-y-2 mb-6'>
                                    {
                                        plan.features.map((feature, idx) => (
                                            <li key={idx}>✔ {feature}</li>
                                        ))
                                    }
                                </ul>

                                <button className='w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer'>
                                    Choose Plan
                                </button>
                            </div>
                        ))}

                </div>

            </div>
        </section>




    )
}

export default Pricing