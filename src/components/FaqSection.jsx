import { useState } from 'react'
import { faqs } from '../assets/data/faqs'
import faqImg from '../assets/images/faq-img.png'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

export default function FaqSection() {
    return (
        <section>
            <div className="max-w-full w-[1440]px px-5 mx-auto">
                <div className="flex justify-between gap-[50px] lg:gap-0">
                    <div className="w-1/2 hidden md:block">
                        <img src={faqImg} alt="" />
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className='text-[44px] leading-[54px] font-[700] text-headingColor'>
                            Most questions by our beloved patients
                        </h2>
                        <FaqList />
                    </div>


                </div>
            </div>
        </section>
    )
}

function FaqList() {
    return <ul>
        {faqs.map((item, index) => <FaqItem item={item} key={index} />)}
    </ul>
}
function FaqItem({ item }) {
    const [isOpen, setIsOpen] = useState(false);
    function handelClick() {
        setIsOpen(isOpen => !isOpen)
    }
    return <div className='p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer' >
        <div className="flex items-center justify-between gap-5" onClick={() => handelClick()}>
            <h4 className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor'>
                {item.question}
            </h4>
            <div onClick={() => handelClick()} className={`${isOpen && 'bg-primaryColor text-white border-none'} w-7 h-7 lg:w-8 lg:w-8 border-solid border-[#141F21] rounded flex items-center justify-center`}>
                {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
        </div>

        {isOpen && <div className='mt-4'>

            <p className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>
                {item.content}
            </p>
        </div>}
    </div>
}