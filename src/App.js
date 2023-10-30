import React, { useRef } from 'react';
import './App.css';
import Footer from './components/footer';
import About from './pages/about';
import Home from './pages/home';
import Products from './pages/products';
import Header from './components/header';
import Team from './pages/team';

function App() {
  const refHome = useRef();
  const refAbout = useRef();
  const refProduct = useRef();
  const refTeam = useRef();

  const HeaderComp = () => <Header refHome={refHome} refAbout={refAbout} refProduct={refProduct} refTeam={refTeam} />;

  return (
    <div className="App">
      <Home Header={HeaderComp} refs={refHome} />
      <About refs={refAbout} />
      <Products refs={refProduct} />
      <Team refs={refTeam} />
      <Footer refAbout={refAbout} refTeam={refTeam} />
    </div>
  );
}

export default App;
