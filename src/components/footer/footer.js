import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='logo'>
                <Link to='/'>
                <img src={`${process.env.PUBLIC_URL}/images/catlogo.svg`} />
                </Link>
            </div>
            <div className='copyright'>
                © created by Harshkumar vishwakarma - devChallenge.io 2021
            </div>
        </div>
    )
}

export default Footer;