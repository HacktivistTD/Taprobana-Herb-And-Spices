
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faWhatsapp, faInstagram, faFacebook, faTiktok, faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import  './Footerbar.css';
const Footerbar = () => {
  return (
    <footer className="footbar">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-6 px-4">
      <div>
        
        <FontAwesomeIcon icon={faAppStore} size="xl" className='px-3' />
        
        
        <FontAwesomeIcon icon={faGooglePlay} size="xl" className='px-3'/> 

       
           
             
                  {/* Optionally add text if desired: Get it on the App Store */}

            </div>
      <nav className="leftside">
      
        <div>
        <a href="#" className="leftitems px-2"> T & C</a>
            <a href="#" className="leftitems px-2">Privacy Policy</a>
            <a href="#" className="leftitems px-2">Contact Us</a>
            <a href="#" className="leftitems px-2">Careers </a>
           

        </div>
           
             
          </nav>
        <div className="centeritems">
          <p className="text-sm">&copy;  Copyright 2024 - Taprobana Cab Service.<br/>
                                 All rights reserved - Realistion: "HACKTIVIST"<br/>
                                 Using this website means you accept our terms and conditions. </p>
        
        </div>
        <div className="mt-4 md:mt-0">
         
              <a href="#" className='item'> <FontAwesomeIcon icon={faYoutube} size="xl" />  {/* YouTube icon */} </a>
              <a href='#' className='item'> <FontAwesomeIcon icon={faWhatsapp} size="xl" />  {/* WhatsApp icon */}</a>
              <a href='#' className='item'>  <FontAwesomeIcon icon={faInstagram} size="xl" />  {/* Instagram icon */}</a>
              <a href='#' className='item'> <FontAwesomeIcon icon={faFacebook} size="xl" /></a>
              <a href='#' className='item'><FontAwesomeIcon icon={faTiktok} size="xl" /></a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footerbar;
