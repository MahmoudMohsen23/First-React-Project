import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {

    let [scroll, setScroll] = useState(false)
    const [show, setShow] = useState(false);


    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    })

    return (

        <div className={`bg-[#2c3e50] z-50 text-white fixed w-full top-0 left-0 duration-500 ${scroll ? 'py-4' : 'py-7'}`}>
            <div className='container mx-auto flex justify-between font-bold flex-wrap items-center'>
                <h1 className='sm:text-3xl text-2xl mb-2'>
                    <Link to={""}>START FRAMEWORK</Link>
                </h1>

                <div
                    onClick={() => {
                        setShow(!show);
                    }}
                    className="icon px-3 py-1 border rounded-md cursor-pointer md:hidden "
                >
                    <i className="fa-solid fa-bars text-2xl"></i>
                </div>


                <ul className={`md:flex flex-col items-start  w-full md:gap-10 md:flex-row md:w-auto  gap-4 text-lg ${show ? "flex" : "hidden"}`}>
                    <li className=''>
                        <NavLink to={"about"}>ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink to={"portfolio"}>PORTFOLIO</NavLink>
                    </li>
                    <li>
                        <NavLink to={"contact"}>CONTACT</NavLink>
                    </li>
                </ul>

            </div>
        </div>

    )
}
