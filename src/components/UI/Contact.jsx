import React from 'react'



const Contact = () => {
  return <section id="contact" className='pb-16'>
    <div className='container'>
      <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>
        Contacto
        </h2>
      <div  className='md:flex justify-between items-center'>
        <div className='w-full  md:w-1/2 h-[300px] sm:h-[450px]'>
          <iframe
            title='google maps' 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50729.78732479994!2d-5.996257709027867!
            3d37.375363604484804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c1114be6291%3A0x34f018621cfe5648!
            2sSevilla!5e0!3m2!1ses!2ses!4v1694708251684!5m2!1ses!2ses" 
            className='border-0 w-full h-full'
            allowFullscreen="" 
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div className='w-full  mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
          <form className='w-full'>
            <div className='mb-5'>
              <input
                type='text'
                placeholder='Introduzca su nombre'
                className='w-full p-3 focus:outline-none rounded-[5px]'
                />
            </div>
            <div className='mb-5'>
              <input
                type='mail'
                placeholder='Introduzca su correo'
                className='w-full p-3 focus:outline-none rounded-[5px]'
                />
            </div> 
            <div className='mb-5'>
              <textarea
                type='text'
                rows={3}
                placeholder='Introduzca su asunto'
                className='w-full p-3 focus:outline-none rounded-[5px]'
                />
            </div>
            <button className='w-full p-3 focus:outline-none rounded-[5px] bg:smallTextColor text-white bg-smallTextColor hover:bg-headingColor text-center ease-linear duration-150'>
              Enviar
            </button>
          </form>
        </div>
      </div>

    </div>
  </section>
  
}

export default Contact