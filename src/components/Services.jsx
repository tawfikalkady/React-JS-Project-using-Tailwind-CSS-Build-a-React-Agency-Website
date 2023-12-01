import React from 'react';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants'; '../variants.js'


const Services = () => {
    const services=[
        {id:1,title:'Membership Organisations',description:'Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, ',image:'/src/assets/icons/membership.png'},
        {id:2,title:'National Associations',description:'Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, ',image:'/src/assets/icons/associations.png'},
        {id:3,title:'Clubs And Groups',description:'Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, ',image:'/src/assets/icons/group-clubs.png'},

    ]



    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto  ' id='service'>
            <motion.div 

            variants={fadeIn('up',0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.7}}

            className='text-center my-8 '>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2  '>Our Clients</h2>
                <p className='text-neutralGrey'>We have been working with some Fortune 500+ clients</p>
            
                {/* company logo */}
                <div className='my-12 flex flex-wrap justify-between items-center gap-8 '>
                    <img src="/src/assets/company1.png" alt="" />
                    <img src="/src/assets/company2.png" alt="" />
                    <img src="/src/assets/company3.png" alt="" />
                    <img src="/src/assets/company4.png" alt="" />
                    <img src="/src/assets/company5.png" alt="" />
                    <img src="/src/assets/company6.png" alt="" />
                    <img src="/src/assets/company7.png" alt="" />
                </div>
            </motion.div>

            {/* services card */}
            <motion.div 
            
            variants={fadeIn('left',0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.7}}

            className='mt-20 md:w-1/2 mx-auto text-center   '>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-3  '>Manage your entire community in a single system</h2>
                <p className='text-neutralGrey'>Who is Nextcent suitable for?</p>
            </motion.div>

            {/* cards */}
            <motion.div 
            
            variants={fadeIn('right',0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.5}}
            
            className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12 '>
                {
                    services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full  '>
                        <div>
                            <div className='bg-[#e8f5e9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl  '>
                                <img src={service.image} alt="" className='-ml-5' />
                            </div>
                            <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2 '>{service.title}</h4>
                            <p className='text-sm text-neutralGrey '>{service.description}</p>
                        </div>
                    </div>)
                }
            </motion.div>
        </div>
    );
};

export default Services;