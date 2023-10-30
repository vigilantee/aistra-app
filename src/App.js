import React, { useRef } from 'react';
import './App.css';
import Footer from './components/footer';
import About from './pages/about';
import Home from './pages/home';
import Products from './pages/products';
import Header from './components/header';

function App() {
  const refHome = useRef();
  const refAbout = useRef();
  const refProduct = useRef();

  const HeaderComp = () => <Header refHome={refHome} refAbout={refAbout} refProduct={refProduct} />;

  return (
    <div className="App">
      <Home Header={HeaderComp} refs={refHome} />
      <About refs={refAbout} />
      <Products refs={refProduct} />
      <Footer />
    </div>
  );
}

export default App;
