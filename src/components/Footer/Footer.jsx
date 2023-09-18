import React from 'react'

const Footer = () => {
  return <footer className='bg-[#12141e]  pt-12'>
    {/*----------footer top ----------*/}
    <div className="container">
      <div className='sm:flex items-center justify-between md:gap-8'>
        <div className="w-full sm:w-1/2">
          <h2 className='leading-10 text-white mb-3 md:text-[1.7rem]'>
            ¿Necesitas un programador formal y serio? 
            </h2>
            <a href='#contact'>
              <button className='bg-primaryColor text-white font-[500] flex items-center gap-2
              hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
              <i className='ri-mail-line'></i> Contratame  
              </button>
            </a>
        </div>

        <div className='w-full sm:w-1/2'>
          <p className='text-gray-300 leading-7 mt-4 sm:mt-0'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas justo lectus, bibendum quis condimentum nec,
            aliquam id eros. 
          </p>
          <div className='flex  items-center gap-4 flex-wrap md:gap-8 mt-10'>
            <span className='text-gray-300 font-[600] text-[15px]'>
              Follow Me:
            </span>

            <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
              <a href='github' className='text-gray-300 font-[500] text-[18px]'>
                <i class='ri-github-line'></i></a>
            </span>
            <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
              <a href='youtube' className='text-gray-300 font-[500] text-[18px]'>
              <i class="ri-youtube-fill"></i></a>
            </span>
            <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
              <a href='instagram' className='text-gray-300 font-[500] text-[18px]'>
              <i class="ri-instagram-line"></i></a>
            </span>
            <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
              <a href='linkedin' className='text-gray-300 font-[500] text-[18px]'>
              <i class="ri-linkedin-box-fill"></i></a>
            </span>
          </div>
        </div>
      </div>
    </div>
    {/*----------footer top end----------*/}
    
    </footer>
}

export default Footer