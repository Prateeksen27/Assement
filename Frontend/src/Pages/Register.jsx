import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";
const Register = () => {
    const { registerUser, registerError, isRegisterLoading, updateRegister, registerInfo } = useContext(AuthContext);
    return (
        <section className="h-screen bg-gray-900 text-white">
            <div className="h-full flex flex-wrap items-center justify-center lg:justify-between px-6">
                <div className="mb-12 lg:mb-0 lg:w-6/12 xl:w-6/12 hidden lg:block">
                    <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="w-full" alt="Register visual" />
                </div>
                <div className="w-full max-w-md">
                    <form className="bg-gray-800 p-8 rounded-lg shadow-lg" onSubmit={registerUser}>
                        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm mb-2">Username</label>
                            <input
                                type="text"
                                name="name"
                                value={registerInfo.name}
                                onChange={(e)=>{
                                    updateRegister({...registerInfo,username:e.target.value})
                                }}
                                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your username"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm mb-2">Email address</label>
                            <input
                                type="email"
                                name="email"
                                value={registerInfo.email}
                                onChange={(e)=>{
                                  updateRegister({...registerInfo,email:e.target.value})
                              }}
                                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={registerInfo.password}
                                onChange={(e)=>{
                                  updateRegister({...registerInfo,password:e.target.value})
                              }}
                                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                            />
                        </div>
                        {registerError && <p className="text-red-500 text-sm text-center">{registerError.error}</p>}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white py-2 rounded-lg font-semibold"
                            disabled={isRegisterLoading}
                        >
                            {isRegisterLoading ? 'Registering...' : 'Register'}
                        </button>
                        <div>
                          <p>Already have an account ? <Link to="/login">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Register;
