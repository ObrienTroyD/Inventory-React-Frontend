import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';

export default function Pagination( { suppliesPerPage, totalSupplies, paginate }) {

    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalSupplies / suppliesPerPage); i++) {
        pageNumber.push(i);
    }

    const [activePage, setActivePage] = useState(1);

    const handlePageClick = (number) => {
        setActivePage(number);
        paginate(number);
    }

    const handlePrevious = () => {
        if (activePage > 1) {
            handlePageClick(activePage - 1);
        }
    };

    const handleNext = () => {
        if (activePage < pageNumber.length) {
            handlePageClick(activePage + 1);
        }
    };

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <button
                    onClick={handlePrevious}
                    disabled={activePage === 1}
                    className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${activePage !== 1 ? "" : "opacity-50 cursor-not-allowed"}`}
            
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    disabled={activePage === pageNumber.length}
                    className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${activePage !== pageNumber.length ? "" : "opacity-50 cursor-not-allowed"}`}
                
                >
                    Next
                </button>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{suppliesPerPage}</span> to <span className="font-medium"> {Math.min(activePage * suppliesPerPage, totalSupplies)}</span> of{' '}
                        <span className="font-medium">{totalSupplies}</span> results
                    </p>
                </div>
                <div>
                    <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                    <a
                            onClick={handlePrevious} 
                            className={`relative inline-flex items-center rounded-r-md px-2 py-2  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${activePage !== 1 ? "text-gray-900" : "opacity-50 cursor-not-allowed"}`}
                        
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon aria-hidden="true" className="size-5" />
                        </a>
                        {
                            pageNumber.map((number) => {
                                return   <a
                                key={number}
                                onClick={() => {
                                    handlePageClick(number);
                                    paginate(number);
                                }}
                                aria-current="page"
                                className={`relative z-10 inline-flex items-center ${activePage === number ? "bg-blue-700 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700" : "bg-white px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 " }  `}
                            >
                                {number}
                            </a>
                            })
                        }
                    
                        <a
                            onClick={handleNext}
                            disabled={activePage === totalSupplies.length} 
                            className={`relative inline-flex items-center rounded-r-md px-2 py-2  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${activePage !== pageNumber.length ? "text-gray-900" : "opacity-50 cursor-not-allowed"}`}
                            
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon aria-hidden="true" className="size-5" />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}
