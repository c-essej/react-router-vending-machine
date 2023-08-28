import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Snacks from './Snacks';
import VendingMachine from './VendingMachine';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<VendingMachine />} />
          <Route path='/:snacks' element={<Snacks />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
