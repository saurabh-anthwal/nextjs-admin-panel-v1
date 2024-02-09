"use client";
import ProtectedRoute from '@/route/ProtectedRoute'
import React from 'react'

const page = () => {
  return (
    <ProtectedRoute>
        <div>
            Setting page
        </div>
    </ProtectedRoute>
  )
}

export default page