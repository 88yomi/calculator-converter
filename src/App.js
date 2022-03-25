import React, { useEffect } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import './App.scss';

import Header from './components/header/header.component';
import Sidebar from './components/sidebar/sidebar.component';
import Footer from './components/footer/footer.component';

import Calculator from './components/calculator/calculator.component';
import CurrencyConverter from './components/currency-converter/currency.converter.component';
import BmiCalculator from './components/bmi-calculator/bmi.calculator.component';
import { About, Contact } from './components/bmi-calculator/pages/pages.component';

function App() {

  useEffect(() => {
    document.title = 'Calculator & Converter'

    // navbar toggle
    document.querySelector("body").addEventListener("click", (e) => {
      if (e.target.id === "switch" || e.target.classList.contains('line')) {
        document.querySelector('#sidebar').classList.toggle("hide");
        document.querySelectorAll('.bar1, .bar2, .bar3').forEach(elem => 
          elem.classList.toggle('off')
        );
      }
      else {
        document.querySelector('#sidebar').classList.add("hide");
      }
    });


  }, [])

  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Wrapper>
        <Routes>
          <Route path='calculator' element={<Calculator />} />
          <Route path='/'
            element={<Navigate to="calculator" />}
          />
          <Route path='currency' element={<CurrencyConverter />} />
          <Route path='bmi' element={<BmiCalculator />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Wrapper>
      <Footer />
    </div>
  );
}

function Wrapper({ children }) {
  return (
    <main>
      {children}
    </main>
  )
}

export default App;