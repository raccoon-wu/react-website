import './index.css'
import Navbar from './assets/Components/NavBar/Navbar.jsx';
import { FrontPageButton } from './Buttons.jsx';


function App() {
  return (
    <>
      <Navbar />
    <div className='fillerDiv'>
    <div className='buttonContainer'>
        <div className='topRow'>
          <FrontPageButton buttonText="2D ARTIST" clickMessage=" " hoverText="Illustration"></FrontPageButton>
          <span className="andDisplay"> & </span>
        </div>
        <div className='bottomRow'>
          <FrontPageButton buttonText="3D GENERALIST" clickMessage=" " hoverText="UV"></FrontPageButton>
        </div>
      </div>
    </div>

      

    </>
  );
}

export default App
