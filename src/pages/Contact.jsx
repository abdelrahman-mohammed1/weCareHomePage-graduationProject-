

import { useState } from 'react';
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
export default function Contact() {
    const [firstNameFocus, setFirstNameFocus] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false);
    const [messageFocus, setMessageFocus] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleFirstNameFocus = () => {
        setFirstNameFocus(true);
    };

    const handleFirstNameBlur = () => {
        setFirstNameFocus(false);
    };

    const handleLastNameFocus = () => {
        setLastNameFocus(true);
    };

    const handleLastNameBlur = () => {
        setLastNameFocus(false);
    };

    const handleMessageFocus = () => {
        setMessageFocus(true);
    };

    const handleMessageBlur = () => {
        setMessageFocus(false);
    };
    const handleReset = (e) => {
        e.preventDefault();
        setName('');
        setEmail('');
        setMessage('');
    };

    function handleSubmit(e) {
        e.preventDefault();
        if (!name || !email || !message) return
        const data = {
            to_name: 'WeCare Team ',
            from_name: name,
            email,
            message
        }
        console.log(data)
        emailjs.send('service_jdc8d5s', 'template_13vkwbo', data, 'N70kntE7oDT4jwU_A').then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
                toast.success('The Message send successfully')

            },
            (error) => {
                console.log('FAILED...', error);
                toast.error('The error happend when sending the message place try again')
            },
        );


    }

    return (
        <>
            <h1 className="text-3xl font-bold mb-6 text-[#097B94] text-center">Contact Us</h1>
            <p className="text-xl mb-6 text-gray-700/60 font-bold	 text-center">If you want to get in touch with us, please fill out the form below.</p>
            <div id='contact' className="max-w-[50%] border-2 border-[#097B94] mx-auto my-10 p-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-[#097B94]">Contact Us</h2>
                <form>
                    <div className={`mb-4 relative ${firstNameFocus ? 'border-[#097B94]' : 'border-gray-300'}`}>
                        <label htmlFor="name" className="block text-md font-medium text-[#097B94]">Name:</label>
                        <input
                            type="text"
                            id="name"
                            required
                            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#097B94] focus:border-[#097B94] sm:text-sm transition-all duration-300 ${firstNameFocus ? 'border-[#097B94]' : 'border-gray-300'}`}
                            onFocus={handleFirstNameFocus}
                            onBlur={handleFirstNameBlur}
                            defaultValue={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={`mb-4 relative ${lastNameFocus ? 'border-[#097B94]' : 'border-gray-300'}`}>
                        <label htmlFor="email" className="block text-md font-medium text-[#097B94]">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#097B94] focus:border-[#097B94] sm:text-sm transition-all duration-300 ${lastNameFocus ? 'border-[#097B94]' : 'border-gray-300'}`}
                            onFocus={handleLastNameFocus}
                            onBlur={handleLastNameBlur}
                            defaultValue={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={`mb-4 relative ${messageFocus ? 'border-[#097B94]' : 'border-gray-300'}`}>
                        <label htmlFor="message" className="block text-md font-medium text-[#097B94]">Message:</label>
                        <textarea
                            id="message"
                            rows={4}
                            required
                            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#097B94] focus:border-[#097B94] sm:text-sm transition-all duration-300 ${messageFocus ? 'border-[#097B94]' : 'border-gray-300'}`}
                            onFocus={handleMessageFocus}
                            onBlur={handleMessageBlur}
                            defaultValue={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div className='flex justify-between'>

                        <button
                            type="submit"
                            className="bg-[#097B94] text-white py-2 px-4 rounded hover:bg-[#097B94]/70 focus:outline-none focus:ring-2 focus:ring-[#097B94] focus:ring-offset-2 transition-colors duration-300"
                            onClick={(e) => handleSubmit(e)}
                        >
                            Submit
                        </button>
                        <button
                            className="bg-[#ee1a1a] text-white py-2 px-4 rounded hover:bg-[#7b1717] focus:outline-none focus:ring-2   focus:ring-offset-2 transition-colors duration-300"
                            onClick={(e) => handleReset(e)}>Reset</button>
                    </div>
                </form>
            </div>
        </>
    );
}
