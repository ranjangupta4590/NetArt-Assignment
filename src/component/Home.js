import React from 'react';
import img1 from '../asserts/1.png';
import img2 from '../asserts/2.png';
import img3 from '../asserts/3.png';

const Home = () => {
    return (
        <>
            <div className='grid md:grid-cols-3 sm:grid-cols-1 pl-10 mr-5'>
                <div className='mt-5 sm:justify-center sm:items-center'>
                    <img className='w-full lg:h-[105vh] object-cover  sm:h-auto ' src={img1} alt='img1' />
                </div>


                <div className='mx-auto col-span-2 sm:w-full'>
                    <div className='my-5'>
                        <h1><p className='text-left font-semibold'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p></h1>
                        <ul className='px-5 space-y-1 space-x-0 list-disc'>
                            <li>
                                C.R.I.'s energy-efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                            </li>
                            <li>
                                C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy-efficient smart pumps with IoT enabled control panel.
                            </li>
                        </ul>
                    </div>
                    <div className='w-full'>
                        <img className='w-[60rem]' src={img2} alt='img2' />
                    </div>
                    <div className='my-5'>
                        <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                    </div>
                </div>
            </div>

            <div className='px-16 my-5'>
                <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
                <div className='mx-auto w-full lg:px-40 lg:mt-8'>
                    <img className='w-full h-full object-cover' src={img3} alt="img3" />
                    <p className='flex flex-wrap mx-auto lg:px-40 sm:text-sm justify-center'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
                </div>


            </div>
            <hr className="w-200 mx-10 h-px my-6 bg-red-500 border-0" />

            <div className='mx-auto'>
                <div className=''><p className='text-center mx-auto font-bold'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p></div>
                <div className='mx-14 justify-center text-center my-6'>
                    CHEMICALS & PROCESS <span className='text-red-500'>|</span> POWER WATER & WASTE WATER <span className='text-red-500'>|</span> OILS & GAS <span className='text-red-500'>|</span>
                    PHARMA <span className='text-red-500'>|</span> SUGARS & DISTILLERIES <span className='text-red-500'>|</span> PAPER & PULP <span className='text-red-500'>|</span> MARINE & DEFENCE <span className='text-red-500'>|</span> METAL & MINING <span className='text-red-500'>|</span> FOOD & BEVERAGE <span className='text-red-500'>|</span> PETROCHEMICAL & REFINERIES <span className='text-red-500'>|</span> SOLAR <span className='text-red-500'>|</span> BUILDING <span className='text-red-500'>|</span> HVAC <span className='text-red-500'>|</span> FIRE FIGHTING <span className='text-red-500'>|</span> AGRICULTURE & RESIDENTIAL
                </div>
            </div>
        </>
    )
}

export default Home;
