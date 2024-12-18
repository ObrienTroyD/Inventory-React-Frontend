import { useState, useEffect } from "react"
import { baseUrl } from "../endpoints";
import { useNavigate, useLocation } from "react-router-dom";
import Pagination from "./Pagination";
import Spinner from "./Spinner";

import DeteleSupply from "./DeteleSupply";


export default function SuppliesList() {

    const [supplies, setSupplies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [searchQuery, setSearchQuery] = useState(''); 
    const [filteredData, setFilteredData] = useState(supplies)

    const [currentPage, setCurrentPage] = useState(1);
    const [suppliesPerPage] = useState(2);



    const navigate = useNavigate();
    const location = useLocation();

    const url = baseUrl + 'api/supplies/';

    useEffect(() => {
        setIsLoading(true);
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access')
            },

        })
            .then((response) => {
                if (response.status == 401) {

                    navigate('/Login', {
                        state: {
                            previousUrl: location.pathname
                        }
                    })
                }

                if (!response.ok) {
                    throw new Error('Something went wrong')
                }

                return response.json();
            })
            .then((data) => {
                console.log(data);
                setSupplies(data.supplies);
                setFilteredData(data.supplies);
                setIsLoading(false);

            })
            .catch((e) => console.log(e))
    }, [])

    
    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.trim() === '') {
            // If search query is empty, show all supplies
            setFilteredData(supplies);
        } else {
            // Filter supplies based on the query
            const filtered = supplies.filter((item) =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredData(filtered);
        }

        setCurrentPage(1);
    };


    const indexOfLastPage = currentPage * suppliesPerPage;
    const indexOfFirstPage = indexOfLastPage - suppliesPerPage;
    const currentData = filteredData.slice(indexOfFirstPage, indexOfLastPage);

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);



    return (

        <div className="relative overflow-x-auto sm:rounded-lg">
            <div className="relative overflow-auto">
                <div className="py-3 px-1">
        
                    <div className="flex flex-row gap-3">
                            <div className="relative max-w-xs">
                        <label className="sr-only">Search</label>
                        <input  value={searchQuery} onChange={handleSearch} type="text" name="hs-table-with-pagination-search" id="hs-table-with-pagination-search" className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Search for items" />
                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                            <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        </div>
                    </div>

        

                    </div>
                    
                </div>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-16 py-3">
                            <span className="sr-only">Image</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Product
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Property Number
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Qty
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        isLoading ? <Spinner /> : ( currentData.map((supply, index) => {
                            return <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="p-4">
                                    <img src={`${baseUrl}${supply.image}`} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple iMac" />
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    {supply.name}
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    {supply.property_number}
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    P {supply.price}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <button className="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                            <span className="sr-only">Quantity button</span>
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                            </svg>
                                        </button>
                                        <div className="ms-3">
                                            <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
                                        </div>
                                        <button className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                            <span className="sr-only">Quantity button</span>
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>

                                <td className="px-6 py-4">                                   
                                    <DeteleSupply />
                                </td>
                            </tr>
                        })
                    )
                    }



                </tbody>
            </table>
                    <Pagination suppliesPerPage={suppliesPerPage} totalSupplies={filteredData.length} paginate={paginate} />
        
        </div>
    )

}
