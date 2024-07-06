import NursesList from "./NursesList";


export default function NursesSection() {
    return (
        <section >
            <div className=" max-w-full w-[1440]px px-5 mx-auto">
                <div className="xl:w-[470px] mx-auto">

                    <h2 className="text-[44px] leading-[54px] font-[700] text-headingColor text-center">
                        Our great Nurses
                    </h2>
                    <p className="text-[18px] leading-[30px] font-[400] text-textColor mt-[18px] text-center">
                        World-class care of everyone .Our health System offers umatched,
                        expert health care.
                    </p>
                </div>
                <NursesList />
            </div>
        </section>
    )
}
