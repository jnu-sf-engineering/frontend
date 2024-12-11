import './App.css';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { setupAxiosInterceptor } from './api/axiosInstance';
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
import Kanban from './pages/Kanban';

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
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/' element={<Project />} />
        <Route path='/retro/:projectId' element={<Retro />} />
        <Route path='/lastsprint' element={<LastSprint />} />
        <Route path='/retrocreate' element={<RetroCreate />} />
        <Route path='/retrodetail/:retroId' element={<RetroDetail />} />
        <Route path='/retropick' element={<RetroPick />} />
        <Route path='/completesprint' element={<CompleteSprint />} />
        <Route path='/kanban/:projectId' element={<Kanban />} />
      </Routes>
    </>
  );
}

export default App;
