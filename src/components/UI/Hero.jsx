import React from "react";
import heroImg from "../../assets/images/image.png";
import CountUp from "react-countup";


const Hero = () => {
    return(
        <section className="pt-0" id="about">
            <div className="container pt-14">
                <div className="md:flex items-center justify-beetween sm:flex-col md:flex-row">
                    {/*============hero left content=========== */}
                <div className="w-full md:basis-1/2">
                    <h5
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    className="text-headingColor font-[600] text-[16px]"
                    >
                        Hola, Bienvenidos
                    </h5>
                    <h1 
                    data-aos="fade-up"
                    data-aos-duration="2500"
                    className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
                    >
                        Mi nombre es Jesus Lobato <br/>Sofware Developer
                    </h1>
                    <div
                          data-aos="fade-right"
                          data-aos-duration="1500"
                          className="flex items-center gap-6 mt-7">

                            <a href="#contact">
                                <button className="bg-primaryColor  text-white font-[500] flex items-center gap-2
                                    hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300 py-2 px4 rounded-[8px]"><i class="ri-mail-line"></i>Contacto</button>
                            </a>
                            <a href="#portfolio">
                                <button className=" text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"><i class="ri-profile-line"></i>Ver porfolio</button>
                            </a>
                            </div>
                            <p    
                            data-aos="fade-left"
                            data-aos-duration="1500"
                            className="flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
                            >
                                <span><i class="ri-apps-2-line"></i></span>
                                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500
                            </p>

                <div
                className="flex items-center gap-9 mt-14">
                    <span className="text-smallTextColor ml-1  text-[15px] font-[600]">
                        
                    Follow me: 
                    
                    </span>
                    <span>
                       <a href="#linkedin" className="text-smallTextColor text-[18px] font-[600]">
                        <i class="ri-linkedin-box-line"></i></a>
                    </span>
                    <span>
                       <a href="#Instagram" className="text-smallTextColor text-[18px] font-[600]">
                       <i class="ri-instagram-line"></i></a>
                    </span>  
                    <span>
                       <a href="#Facebook" className="text-smallTextColor text-[18px] font-[600]">
                       <i class="ri-facebook-line"></i></a>
                    </span>
                </div>
                            
                    
                </div>
                {/*============hero left end=========== */}
                {/*============img=========== */}
                <div className="basis-1/3 mt-10 sm:mt-0">
                    <figure className="flex  items-center justify-center">
                        <img src={heroImg} alt=""/>
                    </figure>
                </div>
                {/*============img end=========== */}
                {/*============hero content right=========== */}
                <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0
                 md:flex-col md:justify-end md:text-end">
                    <div className="mb-10">
                        <h2 className="text-headingColor font-[700] text-[32px]">
                            <CountUp start={0} end={8} duration={2} suffix="+"/>
                        </h2>
                        <h4 className="text-headingColor font-[600] text-[18px]">
                            Months of Experience
                        </h4>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-headingColor font-[700] text-[32px]">
                            <CountUp start={0} end={5} duration={2} suffix="+"/>
                        </h2>
                        <h4 className="text-headingColor font-[600] text-[18px]">
                            Programming Languages 
                        </h4>
                    </div>  
                    <div className="mb-10">
                        <h2 className="text-headingColor font-[700] text-[32px]">
                            <CountUp start={0} end={6} duration={2} suffix="+"/>
                        </h2>
                        <h4 className="text-headingColor font-[600] text-[18px]">
                            Proyects Completed
                        </h4>
                    </div>  
                 </div>
                {/*============hero content right end=========== */}
                </div>
            </div>
        </section>
    );
};

export default Hero