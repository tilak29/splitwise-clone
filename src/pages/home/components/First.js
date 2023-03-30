import React from 'react';
import '../home.css';
import svg2 from '../../../assets/images/SVG-2.svg';
import svg3 from '../../../assets/images/SVG-3.svg';
import svg4 from '../../../assets/images/SVG-4.svg';
import svg5 from '../../../assets/images/SVG-5.svg';
import svg6 from '../../../assets/images/SVG-6.svg';
import svg7 from '../../../assets/images/SVG-7.svg';


function First() {
  return (
    <>
   
      <div className='container mx-auto px-8'>
        <div className='lg:flex gap-6 lg:gap-16'>
          <div className='lg:w-5/12 xl:w-4/12 py-16'>
            <div className='flex flex-col max-lg:text-center h-full justify-center gap-6'>
            <h1 className='flex flex-wrap text-ellipsis overflow-hidden text-3xl lg:text-5xl font-bold gap'>
             <span> Less stress when sharing expenses  
                <span id="spin">
                </span>
                </span>
              </h1>
              <div className='flex flex-row max-lg:mx-auto gap-4 '>
                <img className='max-w-4 h-12' src={svg2} />
                <img className='max-w-4 h-12' src={svg3} />
                <img className='max-w-4 h-12' src={svg4} />
                <img className='max-w-4 h-12' src={svg5} />
              </div>

              <div>
                <p className='font-Lato text-xl'>Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.
                </p>
                </div>
            
              <button className='bg-[#2bc2a0] max-lg:mx-auto w-24 h-12 lg:w-40 lg:h-16 rounded border-b-[3px] border-b-[#9a9d9e] hover:h-[14] hover:border-b-0'> 
            <a href='#' className='text-white font-mont font-semibold'>
                Sign up 
            </a>
        </button>
              <p className='flex flex-row max-lg:mx-auto items-center gap-1'>Free for <span><img src={svg6}/></span> iphone, <span><img src={svg7}/></span> android and web.</p>
             
            </div>
          </div>

          <div className='lg:w-7/12 lg:py-16'>
            <div class="w-64 md:w-100 lg:w-full xl:w-150 mx-auto">
              <div>
                <img className='max-w-full h-auto' src={svg2}/>
              </div>
            </div>
          </div>

        </div>
      </div>
    
    </>
  );
}

export default First;
