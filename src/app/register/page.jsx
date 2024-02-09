"use client";
import { registerUser } from "@/services/authService";
import Link from "next/link";
import React, { useState } from "react";

const RegisterPage = () => {
  const [inputForm, setInputForm] = useState({
    user: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputForm({ ...inputForm, [name]: value });
  };

  const handleRegister = async () => {
    const result = await registerUser(inputForm.email, inputForm.password);

    console.log("res", result);
  };
  return (
    <div className="grid grid-cols-2 justify-center w-[90%] m-auto gap -5 items-center">
      <div className="w-3/4">
        <h1 className="text-center text-3xl mb-2">
          Welcome, Create Your Account
        </h1>
        <p className="text-xs my-2 text-center text-gray-500">
          Please enter your details to signup.
        </p>
        <label  className="text-gray-600">User</label>
        <div className="mb-1">
          <input
            name="user"
            value={inputForm.user}
            onChange={handleChange}
            className="text-sm my-1 px-2 py-2 w-full outline outline-gray-200 rounded-xl"
            
            type="text"
            placeholder="User Name.."
          />
        </div>
        <label  className="text-gray-600">Email</label>
        <div className="mb-1">
          <input
            name="email"
            value={inputForm.email}
            onChange={handleChange}
            className="text-sm my-1 px-2 py-2 w-full outline outline-gray-200 rounded-xl"
           type="text"
            placeholder="User Email"
          />
        </div>
        <label  className="text-gray-600">Password</label>
        <div>
          <input
            name="password"
            value={inputForm.password}
            onChange={handleChange}
            className="text-sm my-1 px-2 py-2 w-full outline outline-gray-200 rounded-xl"
            
            type="text"
            placeholder="Password"
          />
        </div>
        <div>
          <button
             className="bg-black w-full px-3 py-2 text-white mt-3  rounded-xl"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
        <div>
          <p className="text-center text-sm mt-2 text-gray-700">
            Already Have An Account ? <Link href={"/login"} className="text-gray-400">Login</Link>
          </p>
        </div>
      </div>
      <div>
      <img className="w-full" src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png?f=webp" alt="" />
      </div>
    </div>
  );
};

export default RegisterPage;
