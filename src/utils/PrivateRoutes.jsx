import { useState } from "react"
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {

    const [isLoggedIn] = useState(localStorage.access ? true : false)

    return (
        isLoggedIn ? <Outlet /> : <Navigate to='/Login' />     
    )
}
