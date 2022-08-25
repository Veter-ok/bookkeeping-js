import './styles/App.scss'
import React from 'react'
import {Dashboard} from './pages/Dashboard/Dashboard'
import {History} from './pages/History/History'
import {Management} from './pages/Management/Management'
import {Profile} from './pages/Profile/Profile'
import {Login} from './pages/Login/Login'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MainLayout} from './components/layouts/mainLayout'

function App() {
  return (
    <>
        <BrowserRouter>
          <MainLayout>
            <Routes>
              <Route path="dashboard" element={<Dashboard/>}/>
              <Route path="management" element={<Management/>}/>
              <Route path="history" element={<History/>}/>
              <Route path="profile" element={<Profile/>}/>
              <Route path="login" element={<Login/>}/>
            </Routes>
          </MainLayout>
        </BrowserRouter>
    </>
  );
}

export default App;
