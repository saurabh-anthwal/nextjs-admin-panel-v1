"use client";
import { userLogin } from "@/redux/features/authSlice";
import { signinUser } from "@/services/authService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [inputForm, setInputForm] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputForm({ ...inputForm, [name]: value });
  };

  const handleLogin = async () => {
    const result = await signinUser(inputForm.email, inputForm.password);
    if (result?.user) {
      localStorage.setItem("userInfo", JSON.stringify(result.user));
      dispatch(userLogin(result));
      router.push("/");
    } else {
      alert("Wrong Input Please Try Again!!");
    }
  };
  return (
    <div className="grid grid-cols-2 justify-center w-[90%] m-auto gap -5 items-center">
      <div className="w-3/4">
        <h1 className="text-center text-3xl mb-2">Welcome Back!</h1>
        <p className="text-xs my-2 text-center text-gray-500">
          Simplify Your Workflow and boost your productivity with Us.<br/>
          Get started for free.
        </p>
        <label className="text-gray-600">Email</label>
        <div className="mb-3">
          <input
            name="email"
            value={inputForm.email}
            onChange={handleChange}
            className="text-sm my-1 px-2 py-2 w-full outline outline-gray-200 rounded-xl"
            type="text"
            placeholder="Username"
          />
        </div>
        <label className="text-gray-600">Password</label>
        <div>
          <input
            name="password"
            value={inputForm.password}
            onChange={handleChange}
            className="text-sm my-1 px-2 py-2 w-full outline outline-gray-200 rounded-xl"
            type="password"
            placeholder="Password"
          />
        </div>
        <p className="text-right my-2 text-xs text-blue-400">
          <u className="cursor-pointer">
            <Link href={"/forgotPassword"}>Forget Password?</Link>
          </u>
        </p>
        <div>
          <button
            className="bg-black w-full px-3 py-2 text-white mt-3  rounded-xl"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
        <div>
          <p className="text-center text-sm mt-2 text-gray-700">
            Don't Have An Account ? <Link href={"/register"} className="text-gray-400">Register</Link>{" "}
          </p>
        </div>
      </div>
      <div>
        <img className="w-full" src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png?f=webp" alt="" />
      </div>
    </div>
  );
};

export default LoginPage;
