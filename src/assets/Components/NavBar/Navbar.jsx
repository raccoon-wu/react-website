import './Navbar.css'
import React, { useEffect, useState, createContext, useContext} from "react";
import { Link, useLocation } from "react-router-dom";
import homeIcon from "../../Images/home_icon.png";

//preset selection for 3D page using context and provider
    //Provides a way to pass 'global' data without having to pass it down manually at every level
    export const PresetContext = createContext();

    //Wraps a portion, creates a <></> component to make the context avaliable
    export const PresetProvider = ({children}) => {
        const [selectPreset, setSelectPreset] = useState(presetsOfCharacters);
        const selectNew = (preset) => {setSelectPreset(preset);};

    return(
        <PresetContext.Provider value={{selectPreset, selectNew}}>
            {children}
        </PresetContext.Provider>
        );
    }

const Navbar = () => {

    const location = useLocation();

    //consuming the above context
    const { selectPreset, selectNew } = useContext(PresetContext);

    return (
        <>
    <PresetProvider>
        {/* navBar component */}
            <nav>
                {/* Left NavBar icon */}
                <div className='NavIcon'>
                    {location.pathname.toLowerCase() === "/3dpage" && <Link to="/"><img className='homeButton' src={homeIcon}></img></Link>}
                </div>

                {/* Right NavBar options */}
                <div className='NavOptions'>
                    {location.pathname === "/" && <p className = 'mainPageTitle'>AMY WU</p>}
                    {location.pathname.toLowerCase() === "/2Dpage" && <li>2D Page</li>}
                    {location.pathname.toLowerCase() === "/3dpage" &&
                        <>
                            <button onClick={() => {
                                setSelectPreset(presetsOfCharacters),
                                console.log(`${selectPreset} is selected`);
                                }}>CHARACTERS</button>
                            <button>OBJECTS</button>
                            <button>ENVIRONMENT</button>
                        </>
                    }
                </div>
            </nav>
            </PresetProvider>
        </>
    )
}

//Wrapping the Navbar with the context provider to ensure that it always has the right context
const App = () => {
    return (
        <PresetProvider> 
            <Navbar />
        </PresetProvider>
    );
};

export default App;