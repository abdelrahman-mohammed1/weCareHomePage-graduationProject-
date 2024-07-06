import { nurses } from '../assets/data/doctors'
import NursesCard from './NursesCard'
export default function NursesList() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg-mt-[55px] '>
            {nurses.map((nurse, index) => <NursesCard key={index} nurse={nurse} />)}

        </div>
    )
}
