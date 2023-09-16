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
            aliquam id eros. </p>
        </div>

      </div>

    </div>
    {/*----------footer top end----------*/}
    
    </footer>
}

export default Footer