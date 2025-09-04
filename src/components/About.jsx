import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div className='container flex flex-col items-center justify-center mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden ' id="about" >
            <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 font-light'>Our Brand</span></h1>
            <p className='text-gray-500 text-center mb-8'>Passionate About Properties, Dedecated to Your Vision</p>
            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
                <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg' />
                <div className='flex flex-col md:flex-row items-center md:items-start mt-10 text-gray-600'>
                    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>10+</p>
                            <p>Years of Excellence</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>12+</p>
                            <p>Projects Completed</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>20+</p>
                            <p>Mn. Sq. Ft. Delivered</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>25+</p>
                            <p>Onging Projects</p>
                        </div>
                        <div className="flex flex-col w-full items-center justify-center">
                            <p className="my-10 max-w-lg "> In beatae consequatur, aperiam quo quaerat cumque facere ab, molestiae impedit illo corrupti similique, quod corporis consectetur dolore neque porro eos. Tenetur magni minus eius a minima eum modi, debitis necessitatibus asperiores expedita. Repudiandae dolore ratione id porro eos perspiciatis temporibus quo, neque consequatur facilis dolorum labore quos!</p>
                            <button className='bg-blue-600 text-white px-8 py-2 '>Learn more</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About
