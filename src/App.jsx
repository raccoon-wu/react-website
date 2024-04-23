import {FrontPageButton} from './Buttons.jsx';
import GalleryItem from './GalleryItem';
import angryBee from './assets/angryBee.png/';
import happyBee from './assets/happyBee.png/';
import sadBee from './assets/sadBee.png/';
import './index.css'
import Navbar from './assets/Components/NavBar/Navbar.jsx';

function App() {
      /*this is an experimental branch*/
  const beeFileNames = ['angryBee.png', 'happyBee.png', 'sadBee.png'];
  return (
    <>
      <Navbar/>
      <div className = 'titleDiv'>
      <h1 className='titleFont'> My Portfolio </h1>
      </div>

      <div className='buttonContainer'>
      <button>2D Collection</button>
      <button>3D Collection</button>
      </div>

      <GalleryItem src={angryBee}></GalleryItem>
      <GalleryItem src={happyBee}></GalleryItem>
      <GalleryItem src={sadBee}></GalleryItem>
      <p className='footerElement'>Amy Wu's Portfolio 2024</p>
    </>
  );
}

export default App
