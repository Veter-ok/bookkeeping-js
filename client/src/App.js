import './styles/App.scss'
import {Dashboard} from './pages/Dashboard/Dashboard'
import {History} from './pages/History/History'
import {Management} from './pages/Management/Management'
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
            </Routes>
          </MainLayout>
        </BrowserRouter>
    </>
  );
}

export default App;
