import { useState } from 'react';
// import iphone from '../../assets/pictures/iPhone_12.png';
// import all from '../../assets/svg/all.svg';
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
    const [user, setUser] = useState({
        email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            console.log("access mode for active..", user);
            await axios.post('/user/login', {...user})

            // localStorage.setItem('firstLogin', true)
            console.log("all the user login..", user);
            
            window.location.href = "/admin/dashboard";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <section className="">
            <div className='bg-[#F4F7FA] h-screen'>
                <div className="grid md:grid-cols-2 xs:grid-cols-1 justify-center flex-row h-screen">
                    <div className='flex justify-start items-start bg-[#F4F7FA] md:flex sm:hidden xs:hidden '>
                        <div className='flex justify-center flex-col p-10 h-screen'>
                            <h2 className="text-[#000000] text-start font-bold md:text-5xl xs:text-3xl leading-[4rem] mb-6 font-poppins">
                                Welcome
                            </h2>
                            <div className='text-start font-medium text-[#61297F] text-[16.5px]'>
                                New Customer Offer
                            </div>
                            <div className='text-start font-medium text-[#474747] text-[16.5px] mt-6'>
                                Earn a $200 cash offer when you open a new personal
                            </div>
                            <div className='text-start font-medium text-[#474747] text-[16.5px]'>
                                checking account and make qualifying direct deposits
                            </div>

                            <div className="flex justify-start w-full mt-8">

                                <div className="flex justify-end">
                                    <Link to="/">
                                        <button className="bg-[#61297F] py-2 rounded text-white px-10 text-xs font-semibold">
                                            Get Started
                                        </button>
                                    </Link>
                                </div>
                            </div>



                        </div>
                    </div>
                    <div className="flex bg-[#F4F7FA] md:flex-1 min-h-screen flex-col w-full  justify-center items-center relative z-50">
                        <div className="flex  items-center justify-center h-screen  w-full">
                            <div className="w-full flex flex-col p-5 max-w-2xl">
                                <form
                                    className="border rounded-sm p-7 shadow-lg bg-white  w-full flex-1 mt-4"
                                    method="POST"
                                    onSubmit={loginSubmit}
                                >
                                    <div className="">
                                        <div className="flex justify-end items-center xs:flex-col md:flex-row mb-6">
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
                                                    Confirm Password: <span className="text-rose-700">*</span>
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

                                    <div className="my-3">
                                        <Link
                                            to="/auth/forgot-password"
                                            className="text-xs font-medium text-[#b8c3d2] my-6"
                                        >
                                            Forgot ID/Password?
                                        </Link>

                                    </div>

                                    <div className="flex justify-end w-full mt-8">

                                        <div className="flex justify-end">
                                            <button className="bg-[#61297F] py-2 rounded text-white px-8 text-xs font-semibold">
                                                Login
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
                                            Security & Help
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

export default SignUp;