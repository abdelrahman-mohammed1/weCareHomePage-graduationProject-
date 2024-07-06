
export default function Footer() {
    const date = new Date().getFullYear();
    return (
        <div className="max-w-[100%]  bg-[#097B94] text-white text-lg text-center px-2 py-4">
            <p>&copy; {date} weCare.  All rights reserved.</p>
        </div>
    )
}
