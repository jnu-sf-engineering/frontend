import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Yunn from './pages/Yunn';
import Klomachenko from './pages/Klomachenko';
import Project from './pages/Project';
import Retro from './pages/Retro';
import LastSprint from './pages/LastSprint';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/yunn' element={<Yunn />} />
          <Route path='/min' element={<Klomachenko />} />
          <Route path='/project' element={<Project />} />
          <Route path='/retro' element={<Retro />} />
          <Route path='/lastsprint' element={<LastSprint />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
