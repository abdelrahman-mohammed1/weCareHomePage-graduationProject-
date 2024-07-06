

import featureImg from '../assets/images/feature-img.png'
import bookIcon from '../../public/booking.png'
import avatarIcon from '../assets/images/avatar-icon.png'

export default function Feature() {
    return (
        <section>
            <div className="max-w-full w-[1440px] px-5 mx-auto">
                <div className="flex items-center justify-between flex-col lg:flex-row">
                    <div className="xl:w-[670px]">
                        <h2 className="text-[44px] leading-[54px] font-[700] text-headingColor">
                            Get Nursing Care <br /> Anytime.
                        </h2>
                        <ul className="pl-4">
                            <li className="text-[18px] leading-[30px] font-[400] text-textColor mt-[18px]">
                                1. Schedule an Appointment
                            </li>
                            <li className="text-[18px] leading-[30px] font-[400] text-textColor mt-[18px]">
                                2. Search for a Nurse and Contact Them
                            </li>
                            <li className="text-[18px] leading-[30px] font-[400] text-textColor mt-[18px]">
                                3. View Available Nurses, Use the Online Scheduling Tool to Select an Appointment Time
                            </li>
                        </ul>
                    </div>

                    <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                        <img src={featureImg} className="w-3/4" alt="feature-image" />

                        <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px]
                         md:left-4 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] shadow-lg shadow-indigo-500/40
                         ">
                            <div className="flex items-center justify-between ">
                                <div className="flex items-center gap-[6px] lg:gap-3">
                                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                                        Tue, 24
                                    </p>
                                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[400]">
                                        10:00 AM
                                    </p>
                                </div>
                                <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center  rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                                    <img className='max-w-[200%]' src={bookIcon} alt="book-icon" />
                                </span>
                            </div>

                            <div className="w-[50px] lg:w-[96px] bg-[#CCF0F3] py-1 px-1 flex justify-center lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                                Nurse
                            </div>

                            <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                                <img src={avatarIcon} alt="avatar-icon" />
                                <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor'>Ahmed Mohamed</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
