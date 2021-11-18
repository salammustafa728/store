import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer'
import Main from './Components/Main'
import Footer2 from './Components/Footer2';
import ScrollButton from './Components/ScrollButton';
function App() {
  return (
    <div className="App">
      <Header/>
      <Main />
      <ScrollButton/>
      <Footer />
      <Footer2/>
    </div>
  );
}

export default App;
