import { services } from '../assets/data/services'
import ServiceCard from './ServiceCard'

export default function ServiceList() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
            {services.map((item, index) => <ServiceCard item={item} key={index} index={index + 1} />)}
        </div>
    )
}
