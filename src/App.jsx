import './index.css'
import Navbar from './assets/Components/NavBar/Navbar.jsx';
import { FrontPageButton } from './Buttons.jsx';

function App() {
  return (
    <>
      <Navbar/>

      <div className='buttonContainer'> 
          <FrontPageButton buttonText ="2D ARTIST" clickMessage=" "></FrontPageButton>
          <FrontPageButton buttonText ="3D GENERALIST" clickMessage=" "></FrontPageButton>
      </div>


      <p className='footerElement'>Amy Wu's Portfolio 2024</p>
    </>
  );
}

export default App
