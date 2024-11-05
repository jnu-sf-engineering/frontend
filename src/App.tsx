import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Yunn from './pages/Yunn';
import Klomachenko from './pages/Klomachenko';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/yunn' element={<Yunn />} />
          <Route path='/min' element={<Klomachenko />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
