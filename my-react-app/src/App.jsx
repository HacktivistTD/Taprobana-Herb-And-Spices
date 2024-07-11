
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Home from './Pages/Home';
import Tours from './Pages/Tours';
import Login from './Pages/Login';
import Fleets from './Pages/Fleets';
import Stay from './Pages/Stay';
import  Application  from './Pages/Application';
import Footerbar from './Components/Footerbar';


const App = () => {
  return (
  
  
        <div>
            <Header/>

<Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/tours" element={<Tours/>} />
        <Route path="/stay" element={<Stay/>} />
        <Route path="/fleet" element={<Fleets/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/application" element={<Application/>}/>
        


        
      </Routes>
</Router>
  
            <Footerbar/>
        </div>



);
    
    
};

export default App;