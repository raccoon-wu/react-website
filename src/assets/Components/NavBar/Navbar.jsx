import './Navbar.css'
import homeIcon from './homeIcon.png'

const Navbar = () => {
    return (
        <nav>
            <button><img className='homeButton' src={homeIcon}></img></button>
            <ul>
                <li>AMY WU</li>
            </ul>
        </nav>

    )
}

export default Navbar