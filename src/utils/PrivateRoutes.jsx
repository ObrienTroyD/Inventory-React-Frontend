
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../App";

export default function PrivateRoutes() {

    const [isLoggedIn, handleLoggedIn, user, setUser, mobileNavOpen, setMobileNavOpen] = useContext(LoginContext);
    // const [isLoggedIn] = useState(localStorage.access ? true : false)

    return (
        isLoggedIn ? <Outlet /> : <Navigate to='/Login' replace />     
    )
}
