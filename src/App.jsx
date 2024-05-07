import './index.css'
import Navbar from './assets/Components/NavBar/Navbar.jsx';
import { FrontPageButton } from './Buttons.jsx';

function App() {
  return (
      <>
      <div className='backgroundImage'></div>
          <Navbar />
          <div className='fillerDiv'>
              <div className='buttonContainer'>
                  <div className='topRow'>
                      <FrontPageButton
                          buttonText="2D ARTIST"
                          clickMessage=" "
                          hoverText="Illustration"
                      />
                      <span className="andDisplay"> & </span>
                  </div>
                  <div className='bottomRow'>
                      <FrontPageButton
                          buttonText="3D GENERALIST"
                          clickMessage=" "
                          hoverText="UV"
                      />
                  </div>
              </div>
          </div>
      </>
  );
}

export default App
