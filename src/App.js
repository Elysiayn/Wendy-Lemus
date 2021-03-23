import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  const [currentPage, handlePageChange] = useState('About');



  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    switch(currentPage) {
      case 'About': 
        return <About />;
        // break;
      case 'Portfolio':
        return <Portfolio />
        // break;
      case 'Contact':
        return <Contact />;
        // break;
      case 'Resume':
        return <Resume />;
        // break;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          // Render the component returned by 'renderPage()'
          renderPage()
        }
      </div>
    </div>
  );
}

export default App;
