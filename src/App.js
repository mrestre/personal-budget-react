import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

import './App.css';

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Menu/>
      <Hero/>
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/login' element={<LoginPage/>} />
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
