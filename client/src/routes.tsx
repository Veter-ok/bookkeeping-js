import React from 'react'
import { Links } from 'Links'
import {Dashboard} from './pages/Dashboard/Dashboard'
import {History} from './pages/History/History'
import {Management} from './pages/Management/Management'
import {Profile} from './pages/Profile/Profile'
import {Login} from './pages/Login/Login'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MainLayout} from './components/layouts/mainLayout'
import {useSelector} from 'react-redux'
import {selectAuth } from 'store/slices/userSlice'

export const Navigation = () => {
  const Auth = useSelector(selectAuth)
  return (
    <>
        <BrowserRouter>
          <MainLayout>
            {Auth ? 
              <Routes>
                <Route path={Links.DASHBOARD} element={<Dashboard/>}/>
                <Route path={Links.MANAGEMENT} element={<Management/>}/>
                <Route path={Links.HISTORY} element={<History/>}/>
                <Route path={Links.PROFILE} element={<Profile/>}/>
                <Route path={Links.LOGIN} element={<Login/>}/>
              </Routes>
              :
              <Routes>
                <Route path={Links.LOGIN} element={<Login/>}/>
              </Routes>
            }
          </MainLayout>
        </BrowserRouter>
    </>
  );
}