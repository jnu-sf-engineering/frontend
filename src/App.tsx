import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Yunn from './pages/Yunn';
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
  return (
    <>
      {location.pathname !== '/login' && location.pathname !== '/join' && (
        <NavBar />
      )}
      <Routes>
        <Route path='/yunn' element={<Yunn />} />
        <Route path='/min' element={<Klomachenko />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/project' element={<Project />} />
        <Route path='/retro' element={<Retro />} />
        <Route path='/lastsprint' element={<LastSprint />} />
        <Route path='/retrocreate' element={<RetroCreate />} />
        <Route path='/retrodetail' element={<RetroDetail />} />
        <Route path='/retropick' element={<RetroPick />} />
      </Routes>
    </>
  );
}

export default App;
