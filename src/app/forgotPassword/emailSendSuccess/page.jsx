"use client"
import Link from 'next/link';
import React from 'react';

const ForgotPasswordMessage = () => {
  return (
    <div className="flex items-center justify-center h-[80%]">
      <div className="bg-white p-8 rounded-lg shadow-md w-1/2">
        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
        <p className="text-gray-700 mb-6">
          A reset password link has been sent to your email address. Please check your inbox.
        </p>
        <Link className='bg-blue-400 px-4 py-2 rounded-sm text-white' href={'/login'}>
          Return to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordMessage;
