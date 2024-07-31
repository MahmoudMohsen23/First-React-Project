import React from 'react'

import avataaars from '../../assets/images/avataaars-BNoonRVv.svg';

export default function Home() {
    return (

        <div className='min-h-screen bg-[#1abc9c]  flex justify-center items-center flex-col pt-20'>
            <img src={avataaars} className='size-64' alt="Avatar" />
            <h2 className='text-5xl font-bold text-white mt-6'>START FRAMEWORK</h2>
            <div className='flex justify-between gap-5 items-center text-xl mt-3'>
                <div className="line w-20 h-1 bg-white"></div>
                <i class="fa-solid fa-star text-white "></i>
                <div className="line w-20 h-1 bg-white"></div>
            </div>

            <p className='mt-3 text-white'>Graphic Artist - Web Designer - Illustrator</p>
        </div>


    );
}

