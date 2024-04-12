import Header from './Header.jsx';
import Footer from './Footer.jsx';
import GalleryItem from './GalleryItem';
import angryBee from './assets/angryBee.png/';
import happyBee from './assets/happyBee.png/';
import sadBee from './assets/sadBee.png/';
import './index.css'

function App() {
      /*this is an experimental branch*/
  const beeFileNames = ['angryBee.png', 'happyBee.png', 'sadBee.png'];
  return (
    <>
      <Header></Header>

      {/* {beeFileNames.map(filename => (
        <GalleryItem key={filename} src={require(`./assets/${filename}`).default}></GalleryItem>
      ))} */}

      <GalleryItem src={angryBee}></GalleryItem>
      <GalleryItem src={happyBee}></GalleryItem>
      <GalleryItem src={sadBee}></GalleryItem>
      <Footer></Footer>
    </>
  );
}

export default App
