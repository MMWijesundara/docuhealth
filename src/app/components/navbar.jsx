import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
    return (
        <nav className="fixed w-full h-24 shadow-xl bg-white">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                
                <Link href='/' >
                    <Image src="/images/image.png" alt='logo' width='200' height='200' >

                    </Image>
                </Link>

                <div>
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
            </div>
        </nav>
    );
};

export default Navbar;