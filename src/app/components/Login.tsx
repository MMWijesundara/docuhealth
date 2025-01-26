'use client';
import React, { useState } from 'react';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (

        <div className="h-screen flex flex-row lg:flex-row justify-center items-center font-sans px-4 sm:px-6 lg:px-8 bg-custom-bg overflow-hidden">
            <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
            <img src="/docuhealth logo .png" alt="Logo" className="absolute top-4 left-4 w-[150px] sm:w-[181px] md:w-[181px] lg:w-[181px] h-auto"/>

                
                <img src="/doctor.png" alt="doctor" className="max-w-[740px] w-full h-auto object-cover" />
                
            </div>


            <div className="w-full lg:w-1/2 p-6 font-sans sm:px-6 lg:px-8">
                <form>
                    <h1 className="text-[40px] md:text-[40px] lg:text-[96px] text-customTeal mb-4 text-center">Login</h1>
                    <div className="mb-10">
                        <label htmlFor="username" className="block text-[#606060] text-[20px] md:text-[20px] lg:text-[30px] font-sans mb-4">Username</label>
                        <input type="text" id="username" name="username" className="w-full max-w-[574px] h-[55px] p-3 border bg-[#F1F1F1] text-black rounded-md" />
                    </div>


                    <div className="mb-4">
                        <label htmlFor="password" className="block text-[#606060] text-[20px] md:text-[20px] lg:text-[30px] font-sans mb-6">Password</label>
                        <div className="relative w-full max-w-[574px]">
                            <input type={showPassword ? "text" : "password"} id="password" name="password" className="w-full h-[55px] p-3 pl-4 pr-10 border bg-[#F1F1F1] text-black rounded-md mb-10" placeholder="• • • • • • • • • • • • •" />
                            <button type="button" className="absolute inset-y-0 right-10 bottom-10 flex items-center text-gray-500" onClick={togglePasswordVisibility}>
                                <img src={showPassword ? "https://cdn-icons-png.flaticon.com/128/565/565655.png" : "https://cdn-icons-png.flaticon.com/128/159/159604.png"} alt="Toggle password visibility" className="w-6 h-6" />
                            </button>
                        </div>
                    </div>


                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <input type="checkbox" id="rememberMe" className="mr-2" />
                            <label htmlFor="rememberMe" className="text-[#606060] text-[10px] md:text-[10px] lg:text-[19px]">Remember me</label>
                        </div>
                        <a href="#" className="text-[#00B6D7] text-[10px] md:text-[10px] lg:text-[19px]">Forgot password?</a>
                    </div>
                    <div className="flex justify-center items-center">
                        <button type="submit" className="w-full max-w-[184px] h-[54px] bg-[#0A7594] text-white text-[15px] md:text-[15px] lg:text-[26px] font-semibold p-3 rounded-md">Login</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;
