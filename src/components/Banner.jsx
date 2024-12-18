
export default function Banner({ user }) {


    return (
        <>
            <div className=" bg-gray-100 dark:bg-gray-800/50">
                    <div className="container mx-auto p-4 lg:px-8 lg:py-4  xl:max-w-7xl">
                        <div className="space-y-2 py-2 text-center sm:flex sm:items-center sm:justify-between sm:space-y-0 sm:text-left lg:py-0">
                            <div className="grow">
                                <h1 className="mb-1 text-xl font-bold">Dashboard</h1>
                                <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Welcome{" "}
                                    <a
                                        href="#"
                                        className="text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
                                    >
                                        {user}
                                    </a>
                                    , everything seems great!
                                </h2>
                            </div>
                            <div className="flex flex-none items-center justify-center gap-2 rounded px-2 py-3 sm:justify-end sm:bg-transparent sm:px-0">
                            <a
                                    href="#"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-700 bg-blue-700 px-3 py-2 text-sm font-semibold leading-5 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400/50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400/90"
                                >
                                    <svg
                                        className="hi-mini hi-plus inline-block size-5 opacity-50"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                    </svg>
                                    <span>New Item</span>
                                </a>
                            
                            </div>
                        </div>
                    </div>
                </div>
        
        </>
    )
}
