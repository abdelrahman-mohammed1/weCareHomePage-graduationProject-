
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import Swal from 'sweetalert2';
import Vector from '../../public/Vector.svg'
import { useNavigate } from 'react-router-dom';






const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    background-color: #f7f7f7;
`;
const FormVerification = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px; 
    height: 75vh;
    background-color: #f7f7f7;


`

const FormVerificationInput = styled.form`
   background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    width: 100%;


`
const Form = styled.form`
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    width: 100%;
`;

const Label = styled.label`
    display: block;
    position: relative;
    margin-bottom: 8px;
    font-weight: bold;
    color: #097B94;
`;

const Input = styled.input`
    color: black;
    width: 100%;
    padding: 10px;
    margin-bottom: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border: 3px solid #097B94;
    }
`;

const Select = styled.select`
    color: black;
    width: 100%;
    padding: 10px;
    margin-bottom: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border: 3px solid #097B94;
    }
`;

const Textarea = styled.textarea`
    color: black;
    width: 100%;
    padding: 10px;
    margin-bottom: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border: 3px solid #097B94;
    }
`;

const SelectPlace = styled.select`
    color: black;
    width: 181px;
    padding: 10px;
    margin-bottom: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
    margin-left: 10px;

    &:focus {
        outline: none;
        border: 3px solid #097B94;
    }
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Error = styled.p`
color:red ; 
font-size:16px ; 
font-weight:bold ; 
`
const Button = styled.button`
    width: 30%;
    padding: 10px;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    font-weight: bold;
    ${props => props.type === 'submit' && css`
        background-color: #097B94;
        &:hover {
            background-color: #196171;
        }
    `};
    ${props => props.type === 'reset' && css` 
        width:20% ; 
        background-color: #FE3F40;
        &:hover {
            background-color: #951818;
        }
    `};
`;
const Img = styled.img`
width: 21px;
height: 29px;
`
const OpenEye = styled(HiOutlineEye)`
    position: absolute;
    top: 20%;
    right: 3%;
    font-size: 17px;
    cursor: pointer; 
     color: #097B94;
`;

const CloseEye = styled(HiOutlineEyeOff)`
    position: absolute;
    top:20% ; 
    right: 3%;
    font-size: 17px;
    cursor: pointer; 
     color: #097B94;
`;

export default function SignUp() {
    const [isShowFirst, setIsShowFirst] = useState(true);
    const [isShowSecond, setIsShowSecond] = useState(true);
    const [governments, setGovernments] = useState([]);
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cityLoading, setCityLoading] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');
    const [isVerificationStep, setIsVerificationStep] = useState(false);
    const [authToken, setAuthToken] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [errorData, setErrorData] = useState([])
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    const [errorVerification, setErrorVerification] = useState([])
    const navgate = useNavigate()
    console.log(errorData)
    console.log(errorVerification)
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        dateOfBirth: '',
        phone: '',
        email: '',
        photo: null,
        idCardFront: null,
        idCardBack: null,
        certificate: null,
        governorate: '',
        city: '',
        password: '',
        passwordConfirm: '',
        stripeAccountId: '',
        specialization: '',
        about: '',
        yearsOfExperience: ''
    });

    useEffect(() => {
        async function getAllGovernments() {
            setLoading(true);
            const res = await fetch('https://we-care-server-seven.vercel.app/api/v1/governorates');
            const data = await res.json();
            setGovernments(data.data);
            setLoading(false);
        }
        getAllGovernments();
    }, []);

    useEffect(() => {
        if (!formData.governorate) return;

        async function getAllCitiesBySpecificGovernment() {
            setCityLoading(true);
            const res = await fetch(`https://we-care-server-seven.vercel.app/api/v1/governorates/${formData.governorate}/cities`);
            const data = await res.json();
            setCities(data.data);
            setCityLoading(false);
        }
        getAllCitiesBySpecificGovernment();
    }, [formData.governorate]);

    const handleIconClickFirst = () => {
        setIsShowFirst(!isShowFirst);
    };

    const handleIconClickSecond = () => {
        setIsShowSecond(!isShowSecond);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        if (name === 'passwordConfirm') {
            setPasswordsMatch(value === formData.password);
        }
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        console.log(files[0]);
        setFormData(prevState => ({
            ...prevState,
            [name]: files[0]
        }));
    };

    const handleGovernmentChange = (e) => {
        const { value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            governorate: value,
            city: ''  // Reset city when governorate changes
        }));
    };

    const handleCityChange = (e) => {
        const { value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            city: value
        }));
    };


    const handleReset = () => {
        setFormData({
            name: '',
            gender: '',
            dateOfBirth: '',
            phone: '',
            email: '',
            photo: null,
            idCardFront: null,
            idCardBack: null,
            certificate: null,
            governorate: '',
            city: '',
            password: '',
            passwordConfirm: '',
            stripeAccountId: '',
            specialization: '',
            about: '',
            yearsOfExperience: ''
        });
        setPasswordsMatch(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setSubmitting(true)
            const formDataToSend = new FormData();
            for (const key in formData) {
                if (formData.hasOwnProperty(key)) {
                    formDataToSend.append(key, formData[key]);
                }
            }

            const signupResponse = await fetch('https://we-care-server-seven.vercel.app/api/v1/nurseAuth/signup', {

                method: 'POST',
                body: formDataToSend,
            });

            if (!signupResponse.ok) {
                const errorData = await signupResponse.json(); // Parse the error response
                console.error('Signup failed:', errorData);
                setErrorData(errorData);
                throw new Error('Signup failed: ' + (errorData.message || 'Unknown error'));
            }

            const responseData = await signupResponse.json();
            const token = responseData.token; // Assuming the token is returned as 'token' in the response

            // Store authToken in state
            setAuthToken(token);

            // Perform email verification request here (as in the original code)
            await fetch('https://we-care-server-seven.vercel.app/api/v1/nurseAuth/emailVerification/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ email: formData.email }),
            });

            setIsVerificationStep(true); // Move to verification step
        } catch (error) {
            console.error('Error during signup or email verification:', error);
        } finally {
            setSubmitting(false)
        }
    };

    const handleVerificationSubmit = async (e) => {
        e.preventDefault();
        try {
            setSubmitting(true)
            const verificationResponse = await fetch('https://we-care-server-seven.vercel.app/api/v1/nurseAuth/verifyEmailVerificationCode/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify({
                    verificationCode,
                }),
            });

            if (!verificationResponse.ok) {
                const errorData = await verificationResponse.json(); // Parse the error response
                console.error('Verification failed:', errorData);
                setErrorVerification(errorData.message)
                throw new Error('Verification failed: ' + (errorData.message || 'Unknown error'));
            }

            // Handle successful verification
            console.log('Email verified successfully');
            setErrorVerification([])
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Your Email verified successfully ",
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                navgate('/');  // Replace '/home' with the correct path to your home page
            });


            // Optionally, you can redirect or show a success message here 

        } catch (error) {
            console.error('Error during email verification:', error);
        } finally {
            setSubmitting(false)
        }
    };


    return (



        <>

            {!isVerificationStep && <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <Label>Name</Label>
                    <Input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <Label>Gender</Label>
                    <Select
                        name="gender"
                        required
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </Select>

                    <Label>Date of Birth</Label>
                    <Input
                        required
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                    />

                    <Label>Phone</Label>
                    <Input
                        required
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    {errorData?.message && errorData?.message?.includes("phone") && <Error>{errorData?.message}</Error>}
                    <Label>Email</Label>
                    <Input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}

                    />
                    {errorData?.message && errorData?.message?.includes("email") && <Error>{errorData?.message}</Error>}
                    <Label>Photo</Label>
                    <Input
                        required
                        type="file"
                        name="photo"
                        onChange={handleFileChange}
                    />

                    <Label>ID Card Front</Label>
                    <Input
                        required
                        type="file"
                        name="idCardFront"
                        onChange={handleFileChange}
                    />

                    <Label>ID Card Back</Label>
                    <Input
                        required
                        type="file"
                        name="idCardBack"
                        onChange={handleFileChange}
                    />

                    <Label>Certificate</Label>
                    <Input
                        required
                        type="file"
                        name="certificate"
                        onChange={handleFileChange}
                    />

                    <Row>
                        <div>
                            <Label>Governorate</Label>
                            <SelectPlace
                                required
                                name="governorate"
                                value={formData.governorate}
                                onChange={handleGovernmentChange}
                            >
                                <option value="">Select Governorate</option>
                                {loading ? (
                                    <option>Loading...</option>
                                ) : (
                                    governments.map((gov) => (
                                        <option key={gov._id} value={gov._id}>
                                            {gov.name}
                                        </option>
                                    ))
                                )}
                            </SelectPlace>
                        </div>
                        {formData.governorate &&
                            <>
                                <div>
                                    <Label>City</Label>
                                    <SelectPlace
                                        required
                                        name="city"
                                        value={formData.city}
                                        onChange={handleCityChange}
                                        disabled={!formData.governorate}
                                    >
                                        <option value="">Select City</option>
                                        {cityLoading ? (
                                            <option>Loading...</option>
                                        ) : (
                                            cities.map((city) => (
                                                <option key={city._id} value={city._id}>
                                                    {city.name}
                                                </option>
                                            ))
                                        )}
                                    </SelectPlace>
                                </div>
                            </>
                        }
                    </Row>

                    <Label>Password (min 8 characters)</Label>
                    <div style={{ position: 'relative' }}>
                        <Input
                            required
                            type={isShowFirst ? "password" : "text"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <div onClick={handleIconClickFirst}>
                            {isShowFirst ? <CloseEye /> : <OpenEye />}
                        </div>
                    </div>

                    <Label>Confirm Password</Label>
                    <div style={{ position: 'relative' }}>
                        <Input
                            required
                            type={isShowSecond ? "password" : "text"}
                            name="passwordConfirm"
                            value={formData.passwordConfirm}
                            onChange={handleChange}
                        />
                        <div onClick={handleIconClickSecond}>
                            {isShowSecond ? <CloseEye /> : <OpenEye />}
                        </div>
                        {!passwordsMatch && formData.passwordConfirm && (
                            <Error>Passwords do not match</Error>
                        )}
                    </div>

                    <Label>Stripe Account ID</Label>
                    <Input
                        type="text"
                        required
                        name="stripeAccountId"
                        value={formData.stripeAccountId}
                        onChange={handleChange}
                    />

                    <Label>Specialization</Label>
                    <Input
                        required
                        type="text"
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                    />

                    <Label>About</Label>
                    <Textarea
                        required
                        name="about"
                        value={formData.about}
                        onChange={handleChange}
                    ></Textarea>

                    <Label>Years of Experience</Label>
                    <Input
                        required
                        type="number"
                        min={1}

                        name="yearsOfExperience"
                        value={formData.yearsOfExperience}
                        onChange={handleChange}
                    />
                    <Row>
                        <Button disabled={submitting} type="submit">{submitting ? 'Submitting...' : 'Sign Up'}</Button>
                        <Button type="reset" onClick={handleReset} >Reset</Button>
                    </Row>
                </Form>
            </FormContainer>}

            {isVerificationStep &&
                <FormVerification>
                    <FormVerificationInput onSubmit={handleVerificationSubmit} >
                        <Row>
                            <Label>Verification Code</Label>
                            <Img src={Vector} alt='logo' />
                        </Row>
                        <Input
                            type="text"
                            placeholder='enter verificationCode'
                            name="verificationCode"
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                        />
                        {errorVerification && <Error>{errorVerification}</Error>}
                        <Button type="submit">Verify Email</Button>
                    </FormVerificationInput>
                </FormVerification>

            }

        </>
    );
}

// import { useState, useEffect } from 'react';
// import styled, { css } from 'styled-components';
// import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
// import Swal from 'sweetalert2';
// import Vector from '../../public/Vector.svg';
// import { useNavigate } from 'react-router-dom';

// const FormContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 10px;
//     background-color: #f7f7f7;
// `;

// const FormVerification = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 10px;
//     height: 75vh;
//     background-color: #f7f7f7;
// `;

// const FormVerificationInput = styled.form`
//    background: #fff;
//     padding: 20px;
//     border-radius: 8px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     max-width: 800px;
//     width: 100%;
// `;

// const Form = styled.form`
//     background: #fff;
//     padding: 20px;
//     border-radius: 8px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     max-width: 800px;
//     width: 100%;
// `;

// const Label = styled.label`
//     display: block;
//     position: relative;
//     margin-bottom: 8px;
//     font-weight: bold;
//     color: #097B94;
// `;

// const Input = styled.input`
//     color: black;
//     width: 100%;
//     padding: 10px;
//     margin-bottom: 16px;
//     border: 1px solid #ddd;
//     border-radius: 4px;
//     box-sizing: border-box;

//     &:focus {
//         outline: none;
//         border: 3px solid #097B94;
//     }
// `;

// const Select = styled.select`
//     color: black;
//     width: 100%;
//     padding: 10px;
//     margin-bottom: 16px;
//     border: 1px solid #ddd;
//     border-radius: 4px;
//     box-sizing: border-box;

//     &:focus {
//         outline: none;
//         border: 3px solid #097B94;
//     }
// `;

// const Textarea = styled.textarea`
//     color: black;
//     width: 100%;
//     padding: 10px;
//     margin-bottom: 16px;
//     border: 1px solid #ddd;
//     border-radius: 4px;
//     box-sizing: border-box;

//     &:focus {
//         outline: none;
//         border: 3px solid #097B94;
//     }
// `;

// const SelectPlace = styled.select`
//     color: black;
//     width: 181px;
//     padding: 10px;
//     margin-bottom: 16px;
//     border: 1px solid #ddd;
//     border-radius: 4px;
//     box-sizing: border-box;
//     margin-left: 10px;

//     &:focus {
//         outline: none;
//         border: 3px solid #097B94;
//     }
// `;

// const Row = styled.div`
//     display: flex;
//     justify-content: space-between;
// `;

// const Error = styled.p`
//     color:red;
//     font-size:16px;
//     font-weight:bold;
// `;

// const Button = styled.button`
//     width: 30%;
//     padding: 10px;
//     color: #fff;
//     border: none;
//     cursor: pointer;
//     font-size: 16px;
//     border-radius: 5px;
//     font-weight: bold;
//     ${props => props.type === 'submit' && css`
//         background-color: #097B94;
//         &:hover {
//             background-color: #196171;
//         }
//     `};
//     ${props => props.type === 'reset' && css`
//         width:20%;
//         background-color: #FE3F40;
//         &:hover {
//             background-color: #951818;
//         }
//     `};
// `;

// const Img = styled.img`
//     width: 21px;
//     height: 29px;
// `;

// const OpenEye = styled(HiOutlineEye)`
//     position: absolute;
//     top: 20%;
//     right: 3%;
//     font-size: 17px;
//     cursor: pointer;
//     color: #097B94;
// `;

// const CloseEye = styled(HiOutlineEyeOff)`
//     position: absolute;
//     top:20%;
//     right: 3%;
//     font-size: 17px;
//     cursor: pointer;
//     color: #097B94;
// `;

// const ImagePreview = styled.img`
//     width: 100px;
//     height: 100px;
//     object-fit: cover;
//     margin-bottom: 16px;
// `;

// export default function SignUp() {
//     const [isShowFirst, setIsShowFirst] = useState(true);
//     const [isShowSecond, setIsShowSecond] = useState(true);
//     const [governments, setGovernments] = useState([]);
//     const [cities, setCities] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [cityLoading, setCityLoading] = useState(false);
//     const [verificationCode, setVerificationCode] = useState('');
//     const [isVerificationStep, setIsVerificationStep] = useState(false);
//     const [authToken, setAuthToken] = useState('');
//     const [submitting, setSubmitting] = useState(false);
//     const [errorData, setErrorData] = useState([]);
//     const [passwordsMatch, setPasswordsMatch] = useState(false);
//     const [errorVerification, setErrorVerification] = useState([]);
//     const [imagePreviews, setImagePreviews] = useState({
//         photo: null,
//         idCardFront: null,
//         idCardBack: null,
//         certificate: null
//     });
//     const navgate = useNavigate();

//     const [formData, setFormData] = useState({
//         name: '',
//         gender: '',
//         dateOfBirth: '',
//         phone: '',
//         email: '',
//         photo: null,
//         idCardFront: null,
//         idCardBack: null,
//         certificate: null,
//         governorate: '',
//         city: '',
//         password: '',
//         passwordConfirm: '',
//         stripeAccountId: '',
//         specialization: '',
//         about: '',
//         yearsOfExperience: ''
//     });

//     useEffect(() => {
//         async function getAllGovernments() {
//             setLoading(true);
//             const res = await fetch('https://we-care-server-seven.vercel.app/api/v1/governorates');
//             const data = await res.json();
//             setGovernments(data.data);
//             setLoading(false);
//         }
//         getAllGovernments();
//     }, []);

//     useEffect(() => {
//         if (!formData.governorate) return;

//         async function getAllCitiesBySpecificGovernment() {
//             setCityLoading(true);
//             const res = await fetch(`https://we-care-server-seven.vercel.app/api/v1/governorates/${formData.governorate}/cities`);
//             const data = await res.json();
//             setCities(data.data);
//             setCityLoading(false);
//         }
//         getAllCitiesBySpecificGovernment();
//     }, [formData.governorate]);

//     const handleIconClickFirst = () => {
//         setIsShowFirst(!isShowFirst);
//     };

//     const handleIconClickSecond = () => {
//         setIsShowSecond(!isShowSecond);
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//         if (name === 'passwordConfirm') {
//             setPasswordsMatch(value === formData.password);
//         }
//     };

//     const handleFileChange = (e) => {
//         const { name, files } = e.target;
//         const file = files[0];
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: file
//         }));
//         setImagePreviews(prevState => ({
//             ...prevState,
//             [name]: URL.createObjectURL(file)
//         }));
//     };

//     const handleGovernmentChange = (e) => {
//         const { value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             governorate: value,
//             city: ''  // Reset city when governorate changes
//         }));
//     };

//     const handleCityChange = (e) => {
//         const { value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             city: value
//         }));
//     };

//     const handleReset = () => {
//         setFormData({
//             name: '',
//             gender: '',
//             dateOfBirth: '',
//             phone: '',
//             email: '',
//             photo: null,
//             idCardFront: null,
//             idCardBack: null,
//             certificate: null,
//             governorate: '',
//             city: '',
//             password: '',
//             passwordConfirm: '',
//             stripeAccountId: '',
//             specialization: '',
//             about: '',
//             yearsOfExperience: ''
//         });
//         setImagePreviews({
//             photo: null,
//             idCardFront: null,
//             idCardBack: null,
//             certificate: null
//         });
//         setPasswordsMatch(false);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setSubmitting(true);

//         const formDataObj = new FormData();
//         Object.keys(formData).forEach(key => {
//             formDataObj.append(key, formData[key]);
//         });

//         try {
//             const res = await fetch('https://we-care-server-seven.vercel.app/api/v1/users/signup', {
//                 method: 'POST',
//                 body: formDataObj
//             });
//             const data = await res.json();

//             if (data.status === 'Success') {
//                 setAuthToken(data.token);
//                 setVerificationCode(data.verificationCode);
//                 setIsVerificationStep(true);
//             } else {
//                 setErrorData(data.errors);
//             }
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setSubmitting(false);
//         }
//     };

//     const handleVerificationSubmit = async (e) => {
//         e.preventDefault();
//         setSubmitting(true);

//         try {
//             const res = await fetch('https://we-care-server-seven.vercel.app/api/v1/users/verify-email', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${authToken}`
//                 },
//                 body: JSON.stringify({ verificationCode })
//             });
//             const data = await res.json();

//             if (data.status === 'Success') {
//                 Swal.fire('Success', 'Your email has been verified!', 'success');
//                 navgate('/some-route');  // Redirect to a different route after verification
//             } else {
//                 setErrorVerification(data.errors);
//             }
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setSubmitting(false);
//         }
//     };

//     return (
//         <FormContainer>
//             {!isVerificationStep ? (
//                 <Form onSubmit={handleSubmit}>
//                     <Label>Name:</Label>
//                     <Input type="text" name="name" value={formData.name} onChange={handleChange} />

//                     <Label>Gender:</Label>
//                     <Select name="gender" value={formData.gender} onChange={handleChange}>
//                         <option value="">Select Gender</option>
//                         <option value="male">Male</option>
//                         <option value="female">Female</option>
//                     </Select>

//                     <Label>Date of Birth:</Label>
//                     <Input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />

//                     <Label>Phone:</Label>
//                     <Input type="text" name="phone" value={formData.phone} onChange={handleChange} />

//                     <Label>Email:</Label>
//                     <Input type="email" name="email" value={formData.email} onChange={handleChange} />

//                     <Label>Photo:</Label>
//                     <Input type="file" name="photo" onChange={handleFileChange} />
//                     {imagePreviews.photo && <ImagePreview src={imagePreviews.photo} alt="Photo Preview" />}

//                     <Label>ID Card Front:</Label>
//                     <Input type="file" name="idCardFront" onChange={handleFileChange} />
//                     {imagePreviews.idCardFront && <ImagePreview src={imagePreviews.idCardFront} alt="ID Card Front Preview" />}

//                     <Label>ID Card Back:</Label>
//                     <Input type="file" name="idCardBack" onChange={handleFileChange} />
//                     {imagePreviews.idCardBack && <ImagePreview src={imagePreviews.idCardBack} alt="ID Card Back Preview" />}

//                     <Label>Certificate:</Label>
//                     <Input type="file" name="certificate" onChange={handleFileChange} />
//                     {imagePreviews.certificate && <ImagePreview src={imagePreviews.certificate} alt="Certificate Preview" />}

//                     <Label>Governorate:</Label>
//                     <Select name="governorate" value={formData.governorate} onChange={handleGovernmentChange}>
//                         <option value="">Select Governorate</option>
//                         {governments.map(gov => (
//                             <option key={gov._id} value={gov._id}>{gov.name}</option>
//                         ))}
//                     </Select>

//                     {formData.governorate && (
//                         <>
//                             <Label>City:</Label>
//                             <Select name="city" value={formData.city} onChange={handleCityChange}>
//                                 <option value="">Select City</option>
//                                 {cities.map(city => (
//                                     <option key={city._id} value={city._id}>{city.name}</option>
//                                 ))}
//                             </Select>
//                         </>
//                     )}

//                     <Label>Password:</Label>
//                     <Input type={isShowFirst ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} />
//                     {isShowFirst ? <CloseEye onClick={handleIconClickFirst} /> : <OpenEye onClick={handleIconClickFirst} />}

//                     <Label>Confirm Password:</Label>
//                     <Input type={isShowSecond ? 'text' : 'password'} name="passwordConfirm" value={formData.passwordConfirm} onChange={handleChange} />
//                     {isShowSecond ? <CloseEye onClick={handleIconClickSecond} /> : <OpenEye onClick={handleIconClickSecond} />}
//                     {!passwordsMatch && <Error>Passwords do not match</Error>}

//                     <Button type="submit" disabled={submitting}>Sign Up</Button>
//                     <Button type="reset" onClick={handleReset}>Reset</Button>

//                     {errorData.length > 0 && (
//                         <Error>
//                             {errorData.map((error, index) => (
//                                 <p key={index}>{error.message}</p>
//                             ))}
//                         </Error>
//                     )}
//                 </Form>
//             ) : (
//                 <FormVerification>
//                     <FormVerificationInput onSubmit={handleVerificationSubmit}>
//                         <Label>Verification Code:</Label>
//                         <Input type="text" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />

//                         <Button type="submit" disabled={submitting}>Verify</Button>

//                         {errorVerification.length > 0 && (
//                             <Error>
//                                 {errorVerification.map((error, index) => (
//                                     <p key={index}>{error.message}</p>
//                                 ))}
//                             </Error>
//                         )}
//                     </FormVerificationInput>
//                 </FormVerification>
//             )}
//         </FormContainer>
//     );
// }

