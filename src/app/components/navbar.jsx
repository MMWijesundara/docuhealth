'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';





const Navbar = () => {

    const[menuOpen , setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <nav className="fixed w-full h-24 shadow-xl bg-white">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                
                <Link href='/' >
                    <Image src="/images/image.png" alt='logo' width={150} height={150}>

                    </Image>
                </Link>

                <div className='hidden sm:flex'>
                    <ul className="hidden sm:flex">
                        <Link href="/">
                            <li className="ml-10  hover:border-b text-xl">Home</li>
                        </Link>
                        <Link href="/patient_profile">
                            <li className="ml-10  hover:border-b text-xl">Patient</li>
                        </Link>
                        <Link href="/doctor_profile">
                            <li className="ml-10  hover:border-b text-xl">Doctor</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10  hover:border-b text-xl">Pharmacy</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10  hover:border-b text-xl">Lab</li>
                        </Link>
                    </ul>
                </div>
                <div onClick = {handleNav} className='sm:hidden cursor-pointer pl-24'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            <div className={
                menuOpen
                ? "fixed left-0 top-0 w-[65%]  sm-hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 h-full ease-in duration-500"
            }>
                <div className='flex w-full items-center justify-end'>
                    <div onClick={handleNav} className='cursor-pointer'>
                        <AiOutlineClose size={25} />
                    </div>
                </div>
                <div className='flex-col py-4'>
                <ul>
                        <Link href="/">
                            <li onClick={()=> setMenuOpen(false)} className="py-4 cursor-pointer">Home</li>
                        </Link>
                        <Link href="/patient_profile">
                            <li onClick={()=> setMenuOpen(false)} className="py-4 cursor-pointer">Patient</li>
                        </Link>
                        <Link href="/doctor_profile">
                            <li onClick={()=> setMenuOpen(false)} className="py-4 cursor-pointer">Doctor</li>
                        </Link>
                        <Link href="/">
                            <li onClick={()=> setMenuOpen(false)} className="py-4 cursor-pointer">Pharmacy</li>
                        </Link>
                        <Link href="/">
                            <li onClick={()=> setMenuOpen(false)} className="py-4 cursor-pointer">Lab</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;