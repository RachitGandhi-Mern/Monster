

//! Original Code With Perfect/Correct Logics But There Is NO UI/STYLING In this 
// import React, { useState } from 'react';
// import { login } from '../api/auth';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(form);
//       alert("Login successful");
//       navigate('/dashboard');
//     } catch (err) {
//       alert(err.response?.data?.msg || "Login error");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
//       <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;










//! Current Code With Styling/UI
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../api/auth"; // 👈 Make sure this API exists
import Navbar from "../Components/Navbar";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form); // 👈 call API
      alert("Login successful");
      navigate("/dashboard"); // 👈 redirect after success
    } catch (err) {
      alert(err.response?.data?.msg || "Login error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#83af9b] px-4 font-[JoganSoft]">
      <Navbar/>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-10 bg-[#f9cdad] border border-black rounded-xl relative shadow-[8px_8px_0px_#000]"
      >
        <div className="absolute top-1.5 left-1.5 w-full h-full rounded-xl border border-black -z-10"></div>

        <h1 className="text-2xl font-bold text-black text-center mb-8">LOGIN</h1>

        <div className="mb-5">
          <label htmlFor="email" className="block text-black font-bold mb-2">
            EMAIL
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className="w-full px-4 py-3 border-2 border-black bg-white text-base outline-none focus:shadow-[4px_4px_0px_#000] transition-all "
          />
        </div>

        <div className="mb-5">
          <label htmlFor="password" className="block text-black font-bold mb-2">
            PASSWORD
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
            required
            className="w-full px-4 py-3 border-2 border-black bg-white text-base outline-none focus:shadow-[4px_4px_0px_#000] transition-all"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-[#FF5E5B] text-white border-2 border-black font-bold text-base mt-2 transition-all hover:shadow-[4px_4px_0px_#000] hover:-translate-x-[2px] hover:-translate-y-[2px]"
        >
          SIGN IN
        </button>

        

        <div className="text-center mt-6 text-black">
          Don't have an account?{" "}
          <NavLink to='/signup' className="font-bold underline">
            Sign up
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;