import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState(window.location.pathname);

  const handleLinkClick = (link : any) => {
    setSelectedLink(link);
  };

  return (
    <div className='w-full h-[50px] z-20 mb-10 lg:mb-0 text-md lg:text-2xl'>
      <div className='w-full flex flex-col lg:flex-row gap-10 justify-evenly items-center mx-auto text-white'>
        <div className='text-2xl font-black lg:text-4xl text-white justify-start'>
          QuoteVista
        </div>

        <div className='flex justify-center gap-9 items-center  lg:mr-[10%]'>
          <Link to='/home' onClick={() => handleLinkClick('/home')}>
            <div className={`h-[50px] flex justify-center items-center cursor-pointer 
              transition-all duration-200 ease-in-out hover:scale-110  
              ${selectedLink === '/home' ? 'font-bold bg-[#05050580] rounded-full lg:w-[150px] w-[80px]' : ''}`}>
              Home
            </div>
          </Link>

          <Link to='/bookmark' onClick={() => handleLinkClick('/bookmark')}>
            <div className={`h-[50px] flex justify-center items-center cursor-pointer 
              transition-all duration-200 ease-in-out hover:scale-110  
              ${selectedLink === '/bookmark' ? 'font-bold bg-[#05050580] rounded-full lg:w-[200px] w-[120px]' : ''}`}>
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
