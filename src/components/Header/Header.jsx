import React from 'react'

const Header = () => {
  return ( 
    <header className='w-full h-[80px] leading-[80px] flex items-center'>
        <div className='container'>
            <div className='flex items-center justify-between'>
                {/*-----------logo--------------*/}
                <div className='flex items-center gap-[10px]'>
                    <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18] font-[500] rounded-full flex items-center justify-center'>
                        JL
                    </span>
                    <div className='leading-[20px]'>
                        <h2 className='text-xl text-smallTextColor font-[700]'>Jesus Lobato</h2>
                        <p className='text-smallTextColor text-[16px] font-[500]'>Personal</p>  
                    </div>
                </div>
                {/*========logo end =======*/ }
                {/*========menu start =======*/ }
                <div className='menu'>
                    <ul className='flex items-center gap-10'>
                        <li>
                            <a className='text-smallTextColor font-[600]' href="#about"></a>About
                            </li>
                        <li>
                            <a className='text-smallTextColor font-[600]' href="#services"></a>Service
                            </li>
                        <li>
                            <a className='text-smallTextColor font-[600]' href="#porfolio"></a>Portfolio
                            </li>
                        <li>
                            <a className='text-smallTextColor font-[600]' href="#contact"></a>Contact
                            </li>
                    </ul>
                </div>

                {/*========menu end =======*/ }
                {/*========menu right =======*/ }
                <div className='flex items-center gap-4'>
                    <button className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid
                     border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor 
                     hover:text-white hover:font-[500] ease-in duration-300'>
                        <i class="ri-send-plane-line"></i>Let's talk 
                    </button>

                    <span className='text-2xl text-smallTextColor md:hidden cursor-pointer'>
                        <i class="ri-menu-5-line"></i> 
                    </span>
                </div>
                {/*========menu end =======*/ }

            </div>
        </div>
    </header>
  );
};

export default Header;