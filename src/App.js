import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Snacks from './Snacks';
import VendingMachine from './VendingMachine';
import NavBar from './NavBar';

const DEFAULT_SNACKS = ['chips', 'soda', 'sardines'];

/** Renders NavBar and Routes
 *
 * params: none
 *
 * state: none
 *
 * App > NavBar & VendingMachine & Snacks
 */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar snacks={DEFAULT_SNACKS}/>

        <Routes>
          <Route path='/' element={<VendingMachine snacks={DEFAULT_SNACKS} />} />
          <Route path='/:snacks' element={<Snacks snacks={DEFAULT_SNACKS} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
