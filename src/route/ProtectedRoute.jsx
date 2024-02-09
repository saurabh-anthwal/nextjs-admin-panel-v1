"use client";
import { useRouter } from 'next/navigation'

const ProtectedRoute = ({children}) => {
    const router = useRouter()

    if(localStorage.getItem("userInfo")){
        return children
    }
    return router.push('/login')
}

export default ProtectedRoute