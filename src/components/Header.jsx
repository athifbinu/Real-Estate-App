import React from 'react';

import Logo from "../asssets/img/logo.svg"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <header className='py-6 mb-12 border-b'>
         <div className="container mx-auto flex justify-between items-center">
            <Link to='/'>
                <img src={Logo} alt="" />
            </Link>
            {/* buttons */}
            <div className='flex items-center gap-6'>
                <Link className='hover:text-violet-900
                 transition' to='#'>Log in</Link>
                <Link className='bg-violet-700 hover:bg-violet-800 text-white p-2 
                rounded-lg transition' to="#">Signup</Link>
            </div>
         </div>
      </header>
  );
}

export default Header;
