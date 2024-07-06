
import { useNavigate } from 'react-router-dom'
import '../styles/home.css'
import heroImg01 from '../../public/img1.png'
import heroImg02 from '../../public/img3@2x.png'
import heroImg03 from '../../public/rafiki.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import Contact from './Contact'
import Services from '../components/Services'
import Feature from '../components/Feature'




export default function Home() {
    const navigate = useNavigate();
    return (
        <>

            <section id='home' className='hero-section pl-[30px] pt-[60px] 2xl:h-[800px]'>
                <div className='max-w-full w-[1440]px px-5 mx-auto'>
                    <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between pl'>
                        <div>
                            <div className='lg:w-[570px] mb-[413px]'>
                                <h1 className='text-[36px] leading-[46px] text-headingColor font-[700] md:text-[60px] md:leading-[70px]'>
                                    Welcome to We Care .
                                </h1>
                                <p className='text-[18px] leading-[30px] font-[400] text-textColor mt-[18px]'>
                                    At We Care, we are dedicated to being your comprehensive guide in the world of nursing. Our website provides up-to-date and detailed information on various aspects of nursing, from daily healthcare tips to the latest medical research. We aim to enhance the knowledge of nurses and empower them to provide the best care for their patients. Join us to be part of a distinguished nursing community, where you will find educational resources and the support you need to succeed in your profession.
                                </p>
                                <button className='bg-[#097B94]   py-[15px] px-[35px] rounded-[50px] text-white font-[600] mt-[38px]' onClick={() => navigate('/register')}>Join As a nurse </button>
                            </div>




                        </div>

                        <div className='flex gap-[30px] justify-end'>
                            <div>
                                <img className='w-full' src={heroImg01} alt='doctor-image' />
                            </div>
                            <div className='mt-[30px]'>
                                <img src={heroImg02} alt='doctor-image' className='w-full mb-[30px]' />
                                <img src={heroImg03} alt='doctor-image' className='w-full' />
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            {/*  first Section end */}
            {/* second section start */}
            <section  >
                <div className='max-w-full w-[1440]px px-5 mx-auto'>
                    <div className='lg:w-[470px] mx-auto'>
                        <h2 className='text-[44px] leading-[54px] font-[700] text-headingColor text-center'>
                            Providing the best medical services
                        </h2>
                        <p className='text-[18px] leading-[30px] font-[400] text-textColor mt-[18px] text-center'>
                            World-class care for everyone. Our health System offers unmatched,expert health care.
                        </p>

                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>


                        <div className='py-[30px] px-5'>
                            <div className='flex items-center justify-center'>
                                <img src={icon02} alt='image' />
                            </div>
                            <div className='mt-[30px]'>
                                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Location</h2>
                                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                                    Use our advanced search features to find nursing resources and facilities by government or city, making it easier for you to access the information you need quickly and efficiently.
                                </p>

                            </div>
                        </div>

                        <div className='py-[30px] px-5'>
                            <div className='flex items-center justify-center'>
                                <img src={icon01} alt='image' />
                            </div>
                            <div className='mt-[30px]'>
                                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Nurse</h2>
                                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                                    Select the nurse you need with our tailored search options, allowing you to find the right professional based on specialty, experience, and location.
                                </p>

                            </div>
                        </div>





                        <div className='py-[30px] px-5'>
                            <div className='flex items-center justify-center'>
                                <img src={icon03} alt='image' />
                            </div>
                            <div className='mt-[30px]'>
                                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Book Appointment </h2>
                                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                                    Book an appointment with ease, connecting you directly with the nurse you need at your preferred time and location.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Services />
            <Feature />
            <Contact />

        </>
    )
}
