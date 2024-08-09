import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Home from './Pages/Home';
import Spice from './Pages/Spice';
import Login from './Pages/Login';
import Herb from './Pages/Herb';
import Teas from './Pages/Teas';
import Stay from './Pages/Stay';
import Black from './Pages/Black';
import Cart from './Pages/Cart';
import Dashboard from './Pages/Dashboard';
import Application from './Pages/Application';
import Footerbar from './Components/Footerbar';

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/spice" element={<Spice />} />
          <Route path="/teas" element={<Teas />} />
          <Route path="/stay" element={<Stay />} />
          <Route path="/herb" element={<Herb />} />
          <Route path="/login" element={<Login />} />
          <Route path="/application" element={<Application />} />
          <Route path="/black" element={<Black />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart"    element={<Cart />} />

        </Routes>
      </Router>
      <Footerbar />
    </div>
  );
};

export default App;
