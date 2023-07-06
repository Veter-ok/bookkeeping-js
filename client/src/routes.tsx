import React, { useEffect, useState } from 'react'
import { Links } from 'variables/Links'
import Dashboard from './pages/Dashboard/Dashboard'
import History from './pages/History/History'
import Management from './pages/Management/Management'
import Profile from './pages/Profile/Profile'
import Login from './pages/Login/Login'
import Registration from './pages/Registration/registration'
import AdminPanel from 'pages/Admin/AdminPanel'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MainLayout} from './components/layouts/mainLayout'
import {useDispatch} from 'react-redux'
import {DEFAULT_URL} from './utils/constants/routerLinks'
import axios from 'axios'

export const Navigation = () => {
  const [auth, setAuth] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`${DEFAULT_URL}/auth/isAuth`, 
    {
      headers: {
        token: localStorage.getItem("token")
      }
    }).then((response) => {
      if (response.status === 200){
        setAuth(true)
        console.log(response.headers.user)
      }
    })
  })

  return (
    <>
        <BrowserRouter>
          <MainLayout>
            {auth ? 
              <Routes>
                <Route path={Links.DASHBOARD} element={<Dashboard/>}/>
                <Route path={Links.MANAGEMENT} element={<Management/>}/>
                <Route path={Links.HISTORY} element={<History/>}/>
                <Route path={Links.PROFILE} element={<Profile/>}/>
                <Route path={Links.ADMIN} element={<AdminPanel/>}/>
              </Routes>
              :
              <Routes>
                <Route path={Links.LOGIN} element={<Login/>}/>
                <Route path={Links.REGISTRATION} element={<Registration/>}/>
              </Routes>
            }
          </MainLayout>
        </BrowserRouter>
    </>
  );
}