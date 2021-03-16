import { Link } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/'>
                <img src={process.env.PUBLIC_URL+'/images/catlogo.svg'} alt="LOGO" />
            </Link>
        </div>
    )
}

export default Navbar;