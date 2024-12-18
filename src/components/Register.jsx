import { useEffect, useState,  } from "react";
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { useContext } from "react";
import { LoginContext } from '../App';
import { baseUrl }from '../endpoints';


export default function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    const [isLoggedIn, setIsLoggedIn, user, setUser ] = useContext(LoginContext);

    const navigate = useNavigate();
    const location = useLocation();


    function handleSubmit(){
        const url = baseUrl + 'api/register/';

        fetch(url, {
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                email : email,
                username : username,
                password : password
            })
        }
        )
        .then((response) => {

            if (response.status === 401){
                setIsLoggedIn(false);
                navigate('/Login', {
                    state : {
                        previousUrl : location.pathname
                    }
                })
            }
            if (!response.ok){
                throw new Error('Something went wrong')
            } 

            return response.json();
        })
        .then((data) => {
            console.log(data);
            setIsLoggedIn(true);
            setUser(data.username)
            localStorage.setItem('access', data.access);
            localStorage.setItem('refresh', data.refresh);
            navigate('/', {
                state : {
                    previousUrl : location.pathname
                }
            });
        })
        .catch((err) => console.log(err))
    }



    return (
        <>

            <main id="page-content" className="flex max-w-full flex-auto flex-col">
            
            <div className="container mx-auto p-4 lg:p-8 xl:max-w-7xl h-screen">
                <div className="flex justify-center items-center rounded-xl  bg-gray-100 min-h-full  text-gray-400 dark:border-gray-700 dark:bg-gray-800">
                <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }
            }
            className="space-y-6 dark:text-gray-100 w-[320px]"
            id="registerForm"
        >
            <div className="space-y-1">
                <label htmlFor="email" className="font-medium">
                    Email
                </label>
                <input
                    className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500  focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your Email.."
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </div>
            <div className="space-y-1">
                <label htmlFor="username" className="font-medium">
                    Username
                </label>
                <input
                    className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500  focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                    type="username"
                    id="username"
                    name="username"
                    placeholder="Enter your Username.."
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
            </div>
            <div className="space-y-1">
                <label htmlFor="password" className="font-medium">
                    Password
                </label>
                <input
                    className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500  focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password.."
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </div>
            <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-700 bg-blue-700 px-3 py-2 text-sm font-semibold leading-5 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400/50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400/90"
                form="registerForm"
            >
                Login
            </button>
            <div className="grow bg-gray-100 p-5 text-center text-sm md:px-16 dark:bg-gray-700/50">
                Already have an account?{" "}
                <Link
                    to={'/Login'}
                    className="font-medium text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
                >
                    Login
                </Link>
            </div>
        </form>
                </div>
            </div>
        </main>
        </>
    )
    
}
