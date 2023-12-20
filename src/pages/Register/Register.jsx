import { useState } from 'react';
// import iphone from '../../assets/pictures/iPhone_12.png';
// import all from '../../assets/svg/all.svg';
import { Link } from "react-router-dom";
import axios from 'axios';

const Register = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',

    })
    // {
    //     "firstName": "string",
    //     "lastName": "string",
    //     "email": "user@example.com",
    //     "password": "string",
    //     "confirmPassword": "string"
    // }

    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    // const registerSubmit = async e => {
    //     e.preventDefault()
    //     try {
    //         const response = await axios.post('https://youshawebapi.onrender.com/account/register', { ...user })

    //         console.log("all the response..", response);


    //         // localStorage.setItem('firstLogin', true)


    //         window.location.href = "/auth/login";
    //     } catch (err) {
    //         console.log("response data for message..", err);
    //         alert(err.response.data.msg)
    //     }
    // }
    const handleRegistration = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('https://youshawebapi.onrender.com/account/register',
                { ...user },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'accept': '*'
                    }
                });
            console.log("all the response..", response);


            // localStorage.setItem('firstLogin', true)


            // window.location.href = "/auth/login";
            console.log(response.data); // Handle the API response data here
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // return (
    //     <button onClick={handleRegistration}>Register</button>
    // );

    return (
        <section className="">
            <div className='bg-[#F4F7FA] h-screen'>
                <div className="grid md:grid-cols-2 xs:grid-cols-1 justify-center flex-row h-screen">
                    <div className='flex justify-start items-start bg-[#F4F7FA] md:flex sm:hidden xs:hidden '>
                        <div className='flex justify-center flex-col p-10 h-screen'>
                            <h2 className="text-[#000000] text-start font-bold md:text-5xl xs:text-3xl leading-[4rem] mb-6 font-poppins">
                                Create an Account
                            </h2>


                            {/* You must be 18 or older and have the following to enroll in Personal Online Banking and Bill Pay
                            Valid Social Security Number
                            Valid Email Address */}
                            <div className='text-start font-medium text-[#191D2391] text-[16.5px]'>
                                To setup your online account, we need to confirm it’s really you.
                            </div>

                            <div className='text-start font-medium text-[#191D2391] text-[16.5px] mt-6'>
                                You must be 18 or older and have the following to enroll in Personal
                            </div>

                            <div className='text-start font-medium text-[#191D2391] text-[16.5px]'>
                                Online Banking and Bill Pay
                            </div>

                            <ul className="text-start font-medium text-[#191D2391] text-[16.5px] mt-3">
                                <li>• Valid Social Security Number</li>
                                <li>• Valid Email Address</li>
                            </ul>

                            <div className="flex justify-start w-full mt-10">

                                <div className="flex justify-end">
                                    <Link to="/">
                                        <button className="rounded text-gray-800 text-md font-semibold">
                                            Already enrolled? Sign On Now
                                        </button>
                                    </Link>
                                </div>
                            </div>



                        </div>
                    </div>
                    <div className="flex bg-[#F4F7FA] md:flex-1 min-h-screen flex-col w-full justify-center items-center relative z-50">
                        <div className="flex  items-center justify-center h-screen w-full">
                            <div className="w-full flex flex-col p-5 max-w-2xl">
                                <form
                                    className="border rounded-sm p-7 shadow-lg bg-white w-full flex-1 mt-4"
                                    method="POST"
                                    onSubmit={handleRegistration}
                                >
                                    <div className="">
                                        {/* <div className="flex justify-end items-center xs:flex-col md:flex-row mb-6">
                                            <span className="text-xs text-[#b8c3d2]">
                                                New user?
                                            </span>
                                            <span className="">
                                                <Link
                                                    to="/auth/register"
                                                    className="text-xs font-medium text-[#61297F] my-6 ml-2"
                                                >
                                                    Open An Account
                                                </Link>
                                            </span>
                                        </div> */}


                                        <div className="grid md:grid-cols-2 xs:grid-cols-1 gap-10 mb-5 ">
                                            <div className="block">
                                                <label
                                                    htmlFor="firstName"
                                                    className="block w-full pb-1 text-sm font-medium text-gray-700 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                                                >
                                                    First Name: <span className="text-rose-700">*</span>

                                                </label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    id="firstName"
                                                    value={user.firstName}
                                                    onChange={onChangeInput}
                                                    className="w-full pl-3 pr-3 py-3 border rounded-sm border-gray-200 outline-none focus:border-[#61297F] text-sm"
                                                    placeholder="First Name"
                                                    required
                                                />
                                            </div>
                                            <div className="block">
                                                <label
                                                    htmlFor="lastName"
                                                    className="block w-full pb-1 text-sm font-medium text-gray-700 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                                                >
                                                    Last Name: <span className="text-rose-700">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    id="lastName"
                                                    value={user.lastName}
                                                    onChange={onChangeInput}
                                                    className="w-full pl-3 pr-3 py-3 border rounded-sm border-gray-200 outline-none focus:border-[#61297F] text-sm"
                                                    placeholder="Last Name"
                                                    required
                                                />
                                            </div>

                                        </div>

                                        <div className="block">
                                            <label
                                                htmlFor="email"
                                                className="block w-full pb-1 text-sm font-medium text-gray-700 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                                            >
                                                Email Address: <span className="text-rose-700">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={user.email}
                                                onChange={onChangeInput}
                                                className="w-full pl-3 pr-3 py-3 border rounded-sm border-gray-200 outline-none focus:border-[#61297F] text-sm"
                                                placeholder="Email Address"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-5 w-full">

                                        <div className="">
                                            <div className="block">
                                                <label
                                                    htmlFor="password"
                                                    className="block w-full pb-1 text-sm font-medium text-gray-700 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                                                >
                                                    Password: <span className="text-rose-700">*</span>
                                                </label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    value={user.password}
                                                    onChange={onChangeInput}
                                                    placeholder="Password"
                                                    className="w-full pl-3 pr-3 py-3 rounded-sm border border-gray-200 outline-none focus:border-[#61297F] text-sm"
                                                    autoComplete="off"
                                                    required
                                                />

                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-5 w-full">

                                        <div className="">
                                            <div className="block">
                                                <label
                                                    htmlFor="confirmPassword"
                                                    className="block w-full pb-1 text-sm font-medium text-gray-700 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                                                >
                                                    Confirm Password: <span className="text-rose-700">*</span>
                                                </label>
                                                <input
                                                    type="password"
                                                    name="confirmPassword"
                                                    id="confirmPassword"
                                                    value={user.confirmPassword}
                                                    onChange={onChangeInput}
                                                    placeholder="Confirm Password"
                                                    className="w-full pl-3 pr-3 py-3 rounded-sm border border-gray-200 outline-none focus:border-[#61297F] text-sm"
                                                    autoComplete="off"
                                                    required
                                                />

                                            </div>
                                        </div>
                                    </div>



                                    <div className="flex justify-end w-full mt-8">

                                        <div className="flex justify-end">
                                            <button className="bg-[#61297F] py-2 rounded text-white px-8 text-xs font-semibold">
                                                Create Account
                                            </button>
                                            {/* <Link to="/">
                                            </Link> */}
                                        </div>
                                    </div>
                                </form>
                                <div className="flex justify-between mt-8">
                                    <div className="flex justify-center items-center xs:flex-col md:flex-row">
                                        <span className="text-xs text-[#191D2391]">
                                            Trouble signing in?{" "}
                                            <span className="text-xs text-[#191D2391]">
                                                Chat with us
                                            </span>
                                        </span>
                                    </div>

                                    <div>
                                        <span className="text-[#191D2391] text-xs ml-2">
                                            Privacy | Terms
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;