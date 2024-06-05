import React, { useState } from "react";
import NavBar from "../NavBar/Navbar.jsx";
import '../../../index.css'
import { Link } from "react-router-dom";

function MainPage() {
  const [toggleRenderer, setToggleRenderer] = useState('');

  return (
    <>
      {/* <NavBar /> */}
      <Link to="/3DGallery"><button onClick={toggle3D}>3D</button></Link>
      <Link to="/2DGallery"><button onClick={toggle2D}>2D</button></Link>
    </>
  );
}
export default MainPage;

// import './index.css'
// import './MainPage.css'
// import Navbar from './assets/Components/NavBar/Navbar.jsx';
// import { Link } from "react-router-dom";

// function handleMouseEnter(event, text) {
//   const target = event.target;
//   const div = document.querySelector('.hoverText');
//   div.textContent = text;
// }

// function handleMouseLeave(event) {
//   const target = event.target;
//   const div = document.querySelector('.hoverText');
//   div.textContent = '';
// }

// function App() {
//   return (
//     <>

//       <div className='mainPageColor'>
//       <Navbar />
//         <div className='pageContainer'>
//           <div className='frontPageContainer'>
//             <Link to="/2Dpage"><img
//               className="frontPageSelection"
//               src="src/assets/Images/2DFont.svg"
//               onMouseEnter={(e) => handleMouseEnter(e, 'Illustrations, Concept Design (Character, Creature + Assets), Animation')}
//               onMouseLeave={handleMouseLeave}
//             /></Link>
//             <Link to="/3Dpage"><img
//               className="frontPageSelection"
//               src="src/assets/Images/3DFont.svg"
//               onMouseEnter={(e) => handleMouseEnter(e, 'Low Poly Modelling, High Poly Sculpting, Texture Painting, Animation + fx')}
//               onMouseLeave={handleMouseLeave}
//             /></Link>
//           </div>
//         </div>
//         <div className="hoverText"></div>
//       </div>
//     </>
//   );
// }

// export default App
