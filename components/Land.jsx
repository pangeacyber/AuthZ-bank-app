import React from 'react';
import AnchorLink from './AnchorLink';


const Land = () => (
  <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-amber-300 via-orange-500 to-blue-500 pt-20">
     
        <div className="flex flex-col items-center align middle my-20 z-5">
            
              <AnchorLink
              className="z-50 inline-flex h-20 items-center justify-center rounded-md bg-[#00b2ff] px-10 text-xl font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#7f8487]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7f8487] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#7f8487] dark:text-[#0b0b0b] dark:hover:bg-[#7f8487]/90 dark:focus-visible:ring-[#7f8487]"
              href="/api/auth/login"
                tabIndex={0}
                testId="navbar-login-desktop">
              Join the Pango Bank!
              </AnchorLink>
      
        </div>
        <div className='align-bottom absolute bottom-0 z-0'>
          <img
          className='align-bottom w-full z-0'
          src='PangoTown.png'
          ></img>

        </div>
       
      
  </div>

);

export default Land;
