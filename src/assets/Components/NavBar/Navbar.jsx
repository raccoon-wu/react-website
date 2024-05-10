import './Navbar.css'
import homeIcon from './homeIcon.png'

const Navbar = () => {
    return (
        <nav>
            <img className='homeButton' src={homeIcon}></img>
            <ul>
                <li>AMY WU</li>
            </ul>
        </nav>

    )
}

export default Navbar