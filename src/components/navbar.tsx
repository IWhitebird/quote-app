import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [selectedLink, setSelectedLink] = useState(window.location.pathname);

  const handleLinkClick = (link : any) => {
    setSelectedLink(link);
  };

  return (
    <div className='w-full h-[50px] z-20 text-2xl'>
      <div className='w-full flex gap-10 justify-evenly items-center mx-auto text-white'>
        <div className='text-4xl text-white justify-start'>
          QuoteVista
        </div>

        <div className='flex justify-center gap-9 items-center mr-[10%]'>
          <Link to='/home' onClick={() => handleLinkClick('/home')}>
            <div className={`h-[50px] flex justify-center items-center cursor-pointer 
              transition-all duration-200 ease-in-out hover:scale-110  
              ${selectedLink === '/home' ? 'font-bold bg-[#05050580] rounded-full w-[150px]' : ''}`}>
              Home
            </div>
          </Link>

          <Link to='/bookmark' onClick={() => handleLinkClick('/bookmark')}>
            <div className={`h-[50px] flex justify-center items-center cursor-pointer 
              transition-all duration-200 ease-in-out hover:scale-110  
              ${selectedLink === '/bookmark' ? 'font-bold bg-[#05050580] rounded-full w-[200px]' : ''}`}>
              Bookmarks
            </div>
          </Link>
        </div>

        <div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
