import { useEffect } from 'react';
import Aos from 'aos';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from "./components/UI/Hero";
import Service from './components/UI/Service';
import Porfolio from './components/UI/portfolio'
import Contact from './components/UI/Contact';
function App() {

  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div>
      <Header />
        <main>
          <Hero />
          <Service />  
          <Porfolio /> 
          <Contact />
        </main>
      <Footer />
    </div>
    );
  }

export default App;
