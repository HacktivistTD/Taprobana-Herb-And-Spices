import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Footerbar from './Components/Footerbar';
import Cat from './Pages/Cat';
import Login from './Pages/Login'
import Application from './Pages/Application';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/category/:category" element={<Cat />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/application" element={<Application/>}/>
        </Routes>
        <Footerbar />
      </div>
    </Router>
  );
};

export default App;
