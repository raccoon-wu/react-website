import './index.css'
import Navbar from './assets/Components/NavBar/Navbar.jsx';
import { FrontPageButton } from './Buttons.jsx';
import { Link } from "react-router-dom";

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
                          hoverText="Illustrations, Concept Design (Character, Creature + Assets), Animation"
                      >
                        <Link to="/2DPage"></Link>
                        </FrontPageButton>

                      <span className="andDisplay"> & </span>
                  </div>
                  <div className='bottomRow'>
                      <FrontPageButton
                          buttonText="3D GENERALIST"
                          hoverText="Low Poly Modelling, High Poly Sculpting, Texture Painting, Animation"
                      />
                  </div>

              </div>
          </div>
      </>
  );
}

export default App
