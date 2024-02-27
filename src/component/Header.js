import React from 'react'
import logo from '../asserts/logo.png';

const Header = () => {
    return (
        <>
            <div className='py-6 '>
                <div className='mx-auto justify-center items-center flex h-16'>
                    <img className='h-30 w-80' src={logo} alt='logo/png' />
                </div>
            </div>
        </>
    )
}

export default Header;