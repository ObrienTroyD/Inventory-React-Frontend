import { useContext } from "react"
import { LoginContext } from "../App"


import Banner from "../components/Banner";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {

    const [isLoggedIn, setIsLoggedIn, user, setUser, mobileNavOpen, setMobileNavOpen] = useContext(LoginContext);

    return (
        <>
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} setUser={setUser} mobileNavOpen={mobileNavOpen} setMobileNavOpen={setMobileNavOpen} />

            <main id="page-content" className="flex max-w-full flex-auto flex-col ">
                <Banner user={user} />
                <div className="container mx-auto p-4 lg:p-8 xl:max-w-7xl">
                    <div className="flex flex-col justify-center rounded-xl border-gray-200 bg-gray-50 text-gray-400 dark:border-gray-700 dark:bg-gray-800">

                    <h1 className="text-7xl">Inventory System</h1>

                    </div>
                </div>
            </main>
            {/* <Footer /> */}
        </>

    )
}
