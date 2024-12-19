import { useContext } from "react"
import { LoginContext } from "../App"
import Image from '../comelec.png'


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
                <div className="container mx-auto p-4 lg:p-8 grid grid-cols-1 gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-20 xl:max-w-7xl">
                <div className="flex items-center text-center lg:text-left">
                        <div className="space-y-8">
                            {/* Heading */}
                            <div>
                                <div className="mb-1 text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-500">
                                    Get Started
                                </div>
                                <h2 className="mb-4 text-4xl font-black text-black dark:text-white">
                                Streamline Your {" "}
                                    <span className="text-blue-600 dark:text-blue-500">Inventory</span>!
                                </h2>
                                <h3 className="text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300">
                                Monitor stock levels, avoid shortages, and manage supplies effectively.
                                </h3>
                            </div>
                            {/* END Heading */}

                            {/* Action */}
                            <div>
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-700 bg-blue-700 px-6 py-3 font-semibold leading-6 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400/50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400/90"
                                >
                                    <svg
                                        className="hi-mini hi-plus-circle inline-block size-5 opacity-50"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>View Inventory</span>
                                </a>
                            </div>
                            {/* END Action */}
                        </div>
                    </div>
                </div>

                
            </main>
            {/* <Footer /> */}
        </>

    )
}
