import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginUser, loginError, isLoginLoading, updateLogin, loginInfo } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateLogin({ ...loginInfo, [name]: value });
  };

  return (
    <section className="h-screen bg-gray-900 text-white">
      <div className="h-full flex flex-wrap items-center justify-center lg:justify-between px-6">
        <div className="mb-12 lg:mb-0 lg:w-6/12 xl:w-6/12 hidden lg:block">
          <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="w-full" alt="Login visual" />
        </div>
        <div className="w-full max-w-md">
          <form className="bg-gray-800 p-8 rounded-lg shadow-lg" onSubmit={loginUser}>
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm mb-2">Username</label>
              <input
                type="text"
                name="username"
                value={loginInfo.username}
                onChange={(e)=>{
                  updateLogin({...loginInfo,username:e.target.value})
                }}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={loginInfo.password}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            {loginError && <p className="text-red-500 text-sm text-center">{loginError.error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white py-2 rounded-lg font-semibold"
              disabled={isLoginLoading}
            >
              {isLoginLoading ? 'Logging in...' : 'Login'}
            </button>
            <div className="mt-4 text-center text-sm font-semibold">
              <p>Don't have an account? <Link to="/register" className="text-blue-400 hover:underline">Register</Link></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
