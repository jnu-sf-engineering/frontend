import './App.css';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Klomachenko from './pages/Klomachenko';
import Project from './pages/Project';
import Retro from './pages/Retro';
import LastSprint from './pages/LastSprint';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import RetroCreate from './pages/RetroCreate';
import RetroDetail from './pages/RetroDetail';
import Join from './pages/Join';
import RetroPick from './pages/RetroPick';
import CompleteSprint from './pages/CompleteSprint';
import { useEffect } from 'react';
import { setupAxiosInterceptor } from './api/axiosInstance';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

function AppRoutes() {
  const location = useLocation();
  const navigate = useNavigate()

  useEffect(() => {
    setupAxiosInterceptor(navigate)
  }, [navigate])

  return (
    <>
      {location.pathname !== '/login' && location.pathname !== '/join' && (
        <NavBar />
      )}
      <Routes>
        <Route path='/min' element={<Klomachenko />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/project' element={<Project />} />
        <Route path='/retro' element={<Retro />} />
        <Route path='/lastsprint' element={<LastSprint />} />
        <Route path='/retrocreate' element={<RetroCreate />} />
        <Route path='/retrodetail' element={<RetroDetail />} />
        <Route path='/retropick' element={<RetroPick />} />
        <Route path='/completesprint' element={<CompleteSprint />} />
      </Routes>
    </>
  );
}

export default App;
