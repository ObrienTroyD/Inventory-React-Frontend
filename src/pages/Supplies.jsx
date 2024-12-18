import SuppliesList from "../components/SuppliesList"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Banner from "../components/Banner"

import { useContext } from "react"
import { LoginContext } from '../App';


export default function Supplies() {

    const [isLoggedIn, setIsLoggedIn, user, setUser, mobileNavOpen, setMobileNavOpen] = useContext(LoginContext);
    
    return (
        <>  
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} setUser={setUser} mobileNavOpen={mobileNavOpen} setMobileNavOpen={setMobileNavOpen} />
            <main id="page-content" className="flex max-w-full flex-auto flex-col">
                <Banner user={user} />
                <div className="container mx-auto p-4 lg:p-8 xl:max-w-7xl">
                    <div className="flex flex-col  rounded-xl bg-gray-100  text-gray-400 dark:border-gray-700 dark:bg-gray-800">
                        <SuppliesList/>
                    </div>
                </div>
            </main>
            {/* <Footer /> */}
            
        </>
    )
}
