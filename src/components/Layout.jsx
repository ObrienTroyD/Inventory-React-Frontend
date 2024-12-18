


export default function Layout({ children }) {

    return (
        <div className="min-h-screen h-full bg-gray-100">
                    <div
                        id="page-container"
                        className="mx-auto flex w-full min-w-[320px] flex-col bg-gray-100 dark:bg-gray-900 dark:text-gray-100"
                    >
                        {children}
                    </div>
            

            {/* END Page Container */}
        </div>)
}
