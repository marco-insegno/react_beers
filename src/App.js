import './App.css';

import Navigation from './UI/Navigation/Navigation';
import MainHeader from './UI/Header/MainHeader';
import Home from './views/Home/Home';
import AllBeers from './views/AllBeers/AllBeers';
import ShowBeer from './views/ShowBeer/ShowBeer';
import Pricing from './views/Pricing/Pricing';

import { Routes, Route } from "react-router-dom";
import Footer from './UI/Footer/Footer';

function App() {
  return (
    <>

      <Navigation />

      <MainHeader />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/all-beers" element={<AllBeers />}></Route>
        <Route path="/beer/:id" element={<ShowBeer />}></Route>
        <Route path="/pricing" element={<Pricing/>}></Route>
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
