import './App.css';

import Navigation from './UI/Navigation/Navigation';
import MainHeader from './UI/Header/MainHeader';
import Home from './views/Home';
import AllBeers from './views/AllBeers';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>

      <Navigation />

      <MainHeader />

      <Routes>
        <Route path="/" element={ <Home/>}></Route>
        <Route path="/all-beers" element={<AllBeers/>}></Route>
      </Routes>
    </>
  );
}

export default App;
