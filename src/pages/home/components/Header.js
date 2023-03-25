import React from 'react';
import logo from '../../../assets/images/logo.svg';

function Home() {
  return (
    <>
     <div className='flex mx-auto max-w-full h-auto mt-4 '>
        <div className='ml-36'>
        <img src={logo} />
        </div>
        <div className=''>
        <button>
        <a href="#" className='block font-mont font-semibold text-[#2bc2a0]'>
            Log in
        </a>
        </button>
        <button className='bg-[#2bc2a0] ml-4 w-24 h-12 rounded border-b-[3px] border-b-[#9a9d9e] hover:h-[46px] hover:border-b-0'> 
            <a href='#' className='text-white font-mont font-semibold'>
                Sign up 
            </a>
        </button>
        </div>
     </div> 
    </>
  );
}

export default Home;
