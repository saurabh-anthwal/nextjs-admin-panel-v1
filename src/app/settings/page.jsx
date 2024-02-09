"use client";
import Setting from '@/components/Setting';
import ProtectedRoute from '@/route/ProtectedRoute'
import React from 'react'

const page = () => {
  return (
    <ProtectedRoute>
        <div>
            <Setting/>
        </div>
    </ProtectedRoute>
  )
}

export default page