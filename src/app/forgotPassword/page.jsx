"use client";
import { forgotPasswordSendEmail } from "@/services/authService";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ForgotPAssword = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const sendEmail = async () => {
    const result = await forgotPasswordSendEmail(email);

    router.push("/forgotPassword/emailSendSuccess");
    console.log(result);
  };
  return (
    <div className="flex h-screen justify-center w-[90%] m-auto gap -5 items-center">
     <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2AmAstaETRmW8bL30kcHNjzEdlYKXzlnoZw&usqp=CAU" alt="" />
    </div>
    <div className="">
      <h1 className="text-center text-3xl mb-2">Forget Something?</h1>
      <p className="text-xs my-2 text-center text-gray-700">
        Enter your email below to receive password reset instructions.
      </p>
      <p className="text-xs my-2 text-center text-gray-400">
        Did't received instruction?<u>Try different method</u>
      </p>
      <label className="text-gray-600">Email*</label>
      <div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-sm my-1 px-2 py-2 w-full outline outline-gray-200 rounded-xl"
          type="email"
          placeholder="User Email"
        />
      </div>
      <div>
        <button
          onClick={sendEmail}
          className="bg-black w-full px-3 py-2 text-white mt-3  rounded-xl"
        >
          Sent OTP
        </button>
      </div>
    </div>
  
    </div>
  );
};

export default ForgotPAssword;
