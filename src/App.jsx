import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './components/Login'
import Dashboard from './pages/Dashboard'
import PrivateRoutes from './utils/PrivateRoutes'
import Supplies from './pages/Supplies'
import Register from './components/Register'
import Layout from './components/Layout'
import NotFound from './components/NotFound'

import { createContext, useEffect } from 'react'
import { useState } from 'react'
import { baseUrl } from './endpoints'



export const LoginContext = createContext();

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.access ? true : false);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [user, setUser] = useState('');

  function handleLoggedIn(data) {
    setIsLoggedIn(data)

    if (data === false) {
      localStorage.clear();
    }
  }

  useEffect(() => {

    const minutes = 1000 * 60;
    const url = baseUrl + 'api/token/refresh/';

    function refreshToken() {

      if (localStorage.refresh) {
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            refresh: localStorage.refresh
          })
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.status);
            }

            return response.json();
          })
          .then((data) => {
            console.log(data);
            localStorage.access = data.access;
            localStorage.refresh = data.refresh;
            setIsLoggedIn(true);

          })
          .catch((err) => {
            console.log(err)
            localStorage.clear();
          })
      }
    }

    refreshToken();
    setInterval(refreshToken, minutes*3)


    

    
  }, [])

  return (
    <>
      <LoginContext.Provider value={[isLoggedIn, handleLoggedIn, user, setUser, mobileNavOpen, setMobileNavOpen]}>
        <BrowserRouter>

        <Layout>
        <Routes> 
              <Route path='/Login' element={<Login />} />
              <Route path='/Register' element={<Register />} />
              <Route path='/404' element={<NotFound />} />
              <Route path='*' element={<NotFound />} />


              <Route element={<PrivateRoutes />}>
                <Route path='/' element={<Home />} />
                <Route path='/Dashboard' element={<Dashboard />} />
                <Route path='/Supplies' element={<Supplies />} />
              </Route>

            </Routes>
        </Layout>
  

        </BrowserRouter>
      </LoginContext.Provider>
    </>
  )
}

export default App
