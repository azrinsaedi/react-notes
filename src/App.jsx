import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LocalStorage from './pages/LocalStorage';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='local-storage' element={<LocalStorage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
