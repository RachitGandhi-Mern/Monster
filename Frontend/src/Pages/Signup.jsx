// import React, { useState } from 'react';
// import { signup } from '../api/auth';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await signup(form);
//       alert("Signup successful");
//       navigate('/login');
//     } catch (err) {
//       alert(err.response?.data?.msg || "Signup error");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Signup</h2>
//       <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
//       <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
//       <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
//       <button type="submit">Signup</button>
//     </form>
//   );
// };

// export default Signup;



import React, { useState } from "react";
import { signup } from "../api/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(form);
      alert("Signup successful");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.msg || "Signup error");
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

        <h1 className="text-2xl font-bold text-black text-center mb-8">SIGNUP</h1>

        <div className="mb-5">
          <label htmlFor="name" className="block text-black font-bold mb-2">
            NAME
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full px-4 py-3 border-2 border-black bg-white text-base outline-none focus:shadow-[4px_4px_0px_#000] transition-all "
          />
        </div>

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
            className="w-full px-4 py-3 border-2 border-black bg-white text-base outline-none focus:shadow-[4px_4px_0px_#000] transition-all"
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
          SIGN UP
        </button>

        <div className="text-center mt-6 text-black">
          Already have an account?{" "}
          <a href="/login" className="font-bold underline">
            Login
          </a>
        </div>
      </form>
    </div>
  );
};

export default Signup;