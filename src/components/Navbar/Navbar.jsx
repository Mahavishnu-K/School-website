import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/s_logo.png'; 
import './Navbar.css';

const Navbar = () => {
    const [isNavActive, setIsNavActive] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {
        setIsNavActive(false);
    }, [pathname]);
    
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isNavActive && !e.target.closest('.navbar')) {
                setIsNavActive(false);
            }
        };
        
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isNavActive]);
    
    const isActive = (path) => 
        path === '/' ? pathname === '/' : pathname.startsWith(path);
    
    return (
        <nav className="navbar">
            <div className='logo-container' onClick={() => {navigate('/')}}>
                <img src={logo} alt="Logo" className="logo" />
                <h3>Jayam Vidyashram School CBSE</h3>
            </div>
            <div className={`nav-links ${isNavActive ? 'nav-active' : ''}`}>
                {[
                    { path: '/', label: 'Home' },
                    { path: '/about', label: 'Academics' },
                    { path: '/team', label: 'Management' },
                    { path: '/gallery', label: 'Gallery' },
                    { path: '/contact', label: 'Contact' }
                ].map((link) => (
                    <Link 
                        key={link.path}
                        to={link.path} 
                        className={isActive(link.path) ? 'active' : ''}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
            <div
                className={`hamburger ${isNavActive ? 'toggle' : ''}`}
                onClick={() => setIsNavActive(!isNavActive)}
            >
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
};

export default Navbar;