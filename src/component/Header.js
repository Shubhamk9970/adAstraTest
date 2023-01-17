import React from 'react'
import Domains from './Domains'
import Navbar from './Navbar'
import './Header.css';
const Header = () => {
    return (
        <>
            <div className='bg'>

                <Navbar />
                <Domains />
            </div>
        </>
    )
}

export default Header