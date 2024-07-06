

import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'
import { BiMenu } from 'react-icons/bi'
import logo from '../../public/Vector.svg'
import userImg from '../assets/images/avatar-icon.png'
import '../styles/header.css'

const navLinks = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'services',
        display: 'Services'
    },
    {
        path: 'contact',
        display: 'Contact'
    }
]

export default function Header({ currentLocation }) {
    const [activeLink, setActiveLink] = useState('home'); // Initialize with default active link
    const navigate = useNavigate();
    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const handleStickyHeader = function () {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky-header');
            } else {
                headerRef.current.classList.remove('sticky-header');
            }
        })
    }

    useEffect(function () {
        handleStickyHeader();
        return () => window.removeEventListener('scroll', handleStickyHeader)
    });

    const toggleMenu = () => menuRef.current.classList.toggle('show');

    return (
        <header className="header flex items-center shadow-lg shadow-indigo-500/40 " ref={headerRef} >
            <div className='container'>
                <div className='flex items-center justify-between '>
                    <div className='pl-6 flex items-center gap-x-[20px]'>
                        <img src={logo} className='max-w-[11%]' alt='website-logo' />
                        <p className='text-xl text-[#097B94] font-semibold '>We Care</p>
                    </div>

                    <div className='navigation' ref={menuRef} onClick={toggleMenu}>
                        <ul className='menu flex font-bold text-xl items-center gap-[2.7rem]'>
                            {navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.path}
                                    smooth={true}
                                    duration={500}
                                    className={`text-[18px] leading-7 font-[600] cursor-pointer ${activeLink === link.path ? 'text-blue-500' : 'text-[#097B94]'}`}
                                    onClick={() => setActiveLink(link.path)}
                                >
                                    {link.display}
                                </Link>
                            ))}
                            {currentLocation && <button className='bg-[#097B94] px-2 py-4  hover:bg-[#065f6c] text-white rounded-full text-base font-sans transition-colors duration-300' onClick={() => navigate('/')} >&larr; Back to Home </button>}
                        </ul>
                    </div>

                    <div className='flex items-center gap-4 lg:hidden'>
                        <div className='hidden'>
                            <Link to='/'>
                                <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                                    <img src={userImg} alt='user-avatar' className='w-full rounded-full' />
                                </figure>
                            </Link>
                        </div>
                        <span className='md:hidden' onClick={toggleMenu}>
                            <BiMenu className='w-6 h-6 cursor-pointer' />
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}
