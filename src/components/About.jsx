import { Link } from "react-router-dom";
import aboutImg from '../assets/images/about.png'
import aboutCardImg from '../assets/images/about-card.png'
export default function About() {
    return (
        <section>
            <div className="max-w-full w-[1440]px px-5 mx-auto">
                <div className=" about flex justify-between gap-[50px] lg:gap[130px] xl:gap-0 flex-col lg:flex-row">
                    <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                        <img src={aboutImg} alt="nurse-image" />
                        <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                            <img src={aboutCardImg} alt="nurse-image" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                        <h2 className="text-[44px] leading-[54px] font-[700] text-headingColor">
                            Proud to be one of the nations best
                        </h2>
                        <p className="text-[18px] leading-[30px] font-[400] text-textColor mt-[18px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptates debitis ipsam, soluta incidunt itaque fugiat fugit tempora iste earum alias quos animi aliquid vel hic, nulla nesciunt ut labore.s

                        </p>
                        <p className="text-[18px] leading-[30px] font-[400] text-textColor mt-[30px]">

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia excepturi aliquid et eligendi reprehenderit perspiciatis quidem adipisci harum eum amet ad vel fuga, rerum consequuntur blanditiis ab beatae repudiandae doloremque!
                        </p>
                        <Link to='/'><button className="bg-primaryColor py-[15px] px-[35px] rounded-[50px] text-white font-[600] mt-[38px]">Learn More</button></Link>
                    </div>
                </div>

            </div>
        </section>
    )
}
