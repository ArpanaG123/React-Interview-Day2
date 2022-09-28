import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About';
import Child from './Component/Child';
import Day2 from './Component/Day2.jsx';
import Home from './Component/Home';
import Navbar from './Component/Navbar';

function App() {
  const data = "Arpana kashyap";
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/about' element = {<About />} />
    </Routes>
    </BrowserRouter>
    <h5> Question4:implementation - Ways to pass data from Parent to Child</h5>
    <Child name = {data} />
    <Day2 />
    </>
  );
}

export default App;
