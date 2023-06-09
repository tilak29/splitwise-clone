import React from 'react';
import logo from '../../../assets/images/logo.svg';
import {Link} from "react-router-dom";

function Home() {
  return (
    <>
     <div className='container mx-auto'>
        <div className='flex items-center justify-between px-8 py-5 font-mont mx-auto'>
          <a href='#' className='flex items-center w-[105px] h-[36px] sm:w-[140px] sm:h-[48px]'>
        <img src={logo} />
         </a>
        <div className='flex items-center text-xs sm:text-sm md:text-normal font-normal'>
        <button>
        <Link to="login" className='block font-mont font-semibold text-[#2bc2a0]'>
            Log in
        </Link>
        </button>
        <button className='bg-[#2bc2a0] ml-4 w-24 h-12 rounded border-b-[3px] border-b-[#9a9d9e] hover:h-[46px] hover:border-b-0'> 
            <Link to='signup' className='text-white font-mont font-semibold'>
                Sign up 
            </Link>
        </button>
        </div>
     </div> 
     </div>
    </>
  );
}

export default Home;
