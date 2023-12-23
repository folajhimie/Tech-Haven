/* eslint-disable react/no-unescaped-entities */
// import React, { useEffect, useRef, useState } from 'react';
// import iphone from '../../assets/pictures/iPhone_12.png';
// import all from '../../assets/svg/all.svg';
import { Link } from "react-router-dom";
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import Download from "../../assets/svg/business/download.svg"
import axios from "axios";

import "react-datepicker/dist/react-datepicker.css";
// import PreviousMap from "postcss/lib/previous-map";

const VerifyPage = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [currentFormKey, setCurrentFormKey] = useState(0);
    
    const [accountData, setAccountData] = useState({
        accountNumber: '',
        address: '',
        socialSecurityNumber: '',
        dateOfBirth: startDate,
        taxNumber: '',
        employerNumber: '',
        frontId: null,
        backId: null,
        selfieId: null,
        applicantId: null,
    });

    const handleFileChange = (event, field) => {
        const file = event.target.files[0];
        setAccountData({
            ...accountData,
            [field]: file,
        });
    };

    const handleInputChange = (event, field) => {
        setAccountData({
            ...accountData,
            [field]: event.target.value,
        });
    };

    const onChangeInput = e => {
        const { name, value } = e.target;
        setAccountData({...accountData, [name]: value })
    }
    


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        console.log("all the account ...", accountData);
    
        const formData = new FormData();
        formData.append('accountNumber', accountData.accountNumber);
        formData.append('address', accountData.address);
        formData.append('socialSecurityNumber', accountData.socialSecurityNumber);
        formData.append('dateOfBirth', startDate);
        formData.append('taxNumber', accountData.taxNumber);
        formData.append('employerNumber', accountData.employerNumber);
        formData.append('frontId', accountData.frontId);
        formData.append('backId', accountData.backId);
        formData.append('selfieId', accountData.selfieId);
        formData.append('applicantId', accountData.applicantId);
    
        
        try {
            const response = await axios.post('http://localhost:5151/api/accounts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log("account in the code...", response.data, "item data...", response); // Handle the API response data here
        } catch (error) {
            console.error('Error:', error);
        }
    };

    

    const [formSteps] = useState([
        { name: "User Registration", index: 0 },
        { name: "Choose Business", index: 1 },
        { name: "Business Details", index: 2 },
    ]);

    const renderNextButtonForm = () => {
        setCurrentFormKey(currentFormKey + 1);
    };

    const renderPreviousForm = () => {
        setCurrentFormKey(currentFormKey - 1);
    };

    const isThisForm = (formStepIndex) => {
        return currentFormKey === formSteps[formStepIndex].index;
    };

    return (
        <section className="">
            {isThisForm(0) && (
                <div className='bg-[#F4F7FA] h-screen'>
                    <div className="grid md:grid-cols-2 xs:grid-cols-1 justify-center flex-row h-screen">
                        <div className='flex justify-start items-start bg-[#F4F7FA] md:flex sm:hidden xs:hidden '>
                            <div className='flex justify-center flex-col p-10 h-screen'>
                                <h2 className="text-[#000000] text-start font-bold md:text-5xl xs:text-3xl leading-[4rem] mb-6 font-poppins">
                                    Verifying your Identity
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
                                    <div className="text-black mb-1 text-xs text-end">Your application process should take around 10 minutes.</div>
                                    <div
                                        className="border rounded-sm p-7 shadow-lg bg-white w-full flex-1 mt-4"

                                    >
                                        <div className="">
                                            <div className="block">
                                                <label
                                                    htmlFor="accountNumber"
                                                    className="block w-full pb-1 text-sm font-medium text-gray-700 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                                                >
                                                    Card or  accountNumber Number:
                                                </label>
                                                <input
                                                    type="text"
                                                    name="accountNumber"
                                                    id="accountNumber"
                                                    value={accountData.accountNumber}
                                                    onChange={onChangeInput}
                                                    className="w-full pl-3 pr-3 py-3 border rounded-sm border-gray-200 outline-none focus:border-[#61297F] text-sm"
                                                    placeholder="Card or Account Number"
                                                    required
                                                />
                                            </div>
                                        </div>



                                        <div className="mt-5 w-full">
                                            <div className="block">
                                                <label
                                                    htmlFor="text"
                                                    className="block w-full pb-1 text-sm font-medium text-gray-700 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                                                >
                                                    Date of Birth:
                                                </label>
                                                <div
                                                    className={`flex flex-cols lg:flex-row lg:justify-between p-[0rem] lg:p-0 lg:mb-0 mt-0 cursor-pointer`}
                                                >
                                                    <div className='date-picker-wrapper w-full ' >
                                                        <DatePicker className='date-picker-wrapper date-picker-wrapper  w-full pl-3 pr-3 py-3 border rounded-sm border-gray-200 outline-none focus:border-[#61297F] text-sm ' selected={startDate} onChange={(date) => setStartDate(date)} />
                                                    </div>


                                                </div>
                                            </div>
                                        </div>


                                        <div className="mt-5 w-full">
                                            <div className="block">
                                                <label
                                                    htmlFor="address"
                                                    className="block w-full pb-1 text-sm font-medium text-gray-700 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                                                >
                                                    Physical U.S. Address:
                                                </label>
                                                <div className="">
                                                    <div className="flex">
                                                        <input
                                                            type="text"
                                                            name="address"
                                                            id="address"
                                                            value={accountData.address}
                                                            onChange={onChangeInput}
                                                            className="w-full pl-3 pr-3 py-3 border rounded-sm border-gray-200 outline-none focus:border-[#61297F] text-sm"
                                                            placeholder="Physical U.S. Address"
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                            </div>

                                        </div>



                                        <div className="flex justify-end w-full mt-8">

                                            <div className="flex justify-end">
                                                <button
                                                    className="bg-[#61297F] py-2 rounded text-white px-8 text-xs font-semibold"
                                                    onClick={renderNextButtonForm}
                                                >
                                                    Next
                                                </button>

                                            </div>
                                        </div>

                                    </div>
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
            )}

            {isThisForm(1) && (
                <div className='bg-[#F4F7FA] h-screen'>
                    <div className="grid md:grid-cols-2 xs:grid-cols-1 justify-center flex-row h-screen">
                        <div className='flex justify-start items-start bg-[#F4F7FA] md:flex sm:hidden xs:hidden '>
                            <div className='flex justify-center flex-col p-10 h-screen'>
                                <h2 className="text-[#000000] text-start font-bold md:text-5xl xs:text-3xl leading-[4rem] mb-6 font-poppins">
                                    Verifying your Identity
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
                                    <div className="text-black mb-1 text-xs text-end">Your application process should take around 10 minutes.</div>
                                    <div
                                        className="border rounded-sm p-7 shadow-lg bg-white w-full flex-1 mt-4"

                                    >
                                        <div className="">
                                            <div className="block">
                                                <label
                                                    htmlFor="socialSecurityNumber"
                                                    className="block w-full pb-1 text-sm font-medium text-gray-700 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                                                >
                                                    Social Security Number (SSN)<span className="text-rose-700">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="socialSecurityNumber"
                                                    id="socialSecurityNumber"
                                                    value={accountData.socialSecurityNumber}
                                                    onChange={onChangeInput}
                                                    className="w-full pl-3 pr-3 py-3 border rounded-sm border-gray-200 outline-none focus:border-[#61297F] text-sm"
                                                    placeholder="Social Security Number (SSN)*"
                                                    required
                                                />
                                            </div>
                                        </div>



                                        <div className="mt-5 w-full">
                                            <div className="block">
                                                <label
                                                    htmlFor="taxNumber"
                                                    className="block w-full pb-1 text-sm font-medium text-gray-700 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                                                >
                                                    Individual Taxpayer Identification Number (ITIN)
                                                </label>
                                                <input
                                                    type="text"
                                                    name="taxNumber"
                                                    id="taxNumber"
                                                    value={accountData.taxNumber}
                                                    onChange={onChangeInput}
                                                    className="w-full pl-3 pr-3 py-3 border rounded-sm border-gray-200 outline-none focus:border-[#61297F] text-sm"
                                                    placeholder="Individual Taxpayer Identification Number (ITIN)"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-5 w-full">
                                            <div className="block">
                                                <label
                                                    htmlFor="employerNumber"
                                                    className="block w-full pb-1 text-sm font-medium text-gray-700 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                                                >
                                                    Employer Identification Number (EIN)
                                                </label>
                                                <input
                                                    type="text"
                                                    name="employerNumber"
                                                    id="employerNumber"
                                                    value={accountData.employerNumber}
                                                    onChange={onChangeInput}
                                                    className="w-full pl-3 pr-3 py-3 border rounded-sm border-gray-200 outline-none focus:border-[#61297F] text-sm"
                                                    placeholder="Employer Identification Number (EIN)"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="flex justify-between w-full mt-8">
                                            <div className="flex justify-end">
                                                <button
                                                    className="bg-[#61297F] py-2 rounded text-white px-8 text-xs font-semibold"
                                                    onClick={renderPreviousForm}
                                                >
                                                    Previous
                                                </button>

                                            </div>

                                            <div className="flex justify-end">
                                                <button
                                                    className="bg-[#61297F] py-2 rounded text-white px-8 text-xs font-semibold"
                                                    onClick={renderNextButtonForm}
                                                >
                                                    Next
                                                </button>

                                            </div>
                                        </div>

                                    </div>
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
            )}

            {isThisForm(2) && (
                <div className='bg-[#F4F7FA] h-screen'>
                    <div className="grid md:grid-cols-2 xs:grid-cols-1 justify-center flex-row h-screen">
                        <div className='flex justify-start items-start bg-[#F4F7FA] md:flex sm:hidden xs:hidden '>
                            <div className='flex justify-center flex-col p-10 h-screen'>
                                <h2 className="text-[#000000] text-start font-bold md:text-5xl xs:text-3xl leading-[4rem] mb-6 font-poppins">
                                    Verifying your Identity
                                </h2>
                                {/* We take your privacy and security seriously. That's why we may ask to you to upload and verify two forms of ID.
                            You'll need one primary and one secondary ID per applicant.

                            Your primary ID is a government-issued photo ID like a U.S. driver's license, learner's permit, state ID card or passport.
                            Your secondary ID can include a student or work ID, proof of insurance, or bank card from another financial institution. */}
                                <div className='text-start font-medium text-[#000000] text-[16.5px]'>
                                    Helping you stay protected with ID verification
                                </div>

                                <div className='text-start font-medium text-[#191D2391] text-[16.5px] mt-6'>
                                    We take your privacy and security seriously. That is why we may
                                </div>
                                <div className='text-start font-medium text-[#191D2391] text-[16.5px] '>
                                    ask to you to upload and verify two forms of ID.
                                </div>

                                <div className='text-start font-medium text-[#000000] text-[16.5px] mt-6'>
                                    Accepted forms of ID
                                </div>

                                <div className='text-start font-medium text-[#191D2391] text-[16.5px]'>
                                    You will need one primary and one secondary ID per applicant.
                                </div>

                                <ul className="text-start font-medium text-[#191D2391] text-[16.5px] mt-3 ml-2">
                                    <li>• Your primary ID is a government-issued photo ID like a U.S.
                                        <div>
                                            driver's license, learner's permit, state ID card or passport.
                                        </div>
                                    </li>
                                    <li>• Your secondary ID can include a student or work ID, proof of
                                        <div>
                                            insurance, or bank card from another financial institution.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex bg-[#F4F7FA] md:flex-1 min-h-screen flex-col w-full justify-center items-center relative z-50">
                            <div className="flex  items-center justify-center h-screen w-full">
                                <div className="w-full flex flex-col p-5 max-w-2xl">
                                    <div className="text-black mb-1 text-xs text-end">Your application process should take around 10 minutes.</div>

                                    <div
                                        className="border rounded-sm p-7 shadow-lg bg-white w-full flex-1 mt-4"

                                    >
                                        <div className="">
                                            <div className="block relative">
                                                <label
                                                    htmlFor="file-input"
                                                    className="block w-full pb-1 text-sm font-medium text-gray-700 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                                                >
                                                    Upload the ID Front-view <span className="text-rose-700">*</span>
                                                    <div className="text-gray-400 text-[10px]">Valid government-issued photo ID (e.g., Driver's License, Passport, State ID)</div>
                                                </label>
                                                <input
                                                    type="file"
                                                    name="avatar"
                                                    id="file-input"
                                                    accept=".jpg,.jpeg,.png"
                                                    onChange={(e) => handleFileChange(e, 'frontId')}
                                                    className="w-full pl-3 pr-3 py-3 border rounded-sm border-gray-200 outline-none focus:border-[#61297F] text-sm"
                                                    placeholder="Valid government-issued photo ID"
                                                    required
                                                />
                                                <div
                                                    className="flex mt-3 flex-col h-6 "
                                                    style={{
                                                        position: "absolute",
                                                        right: "0px",
                                                        bottom: "12px",
                                                        lineHeight: "20px",
                                                    }}
                                                >

                                                    <div className="cursor-pointer">
                                                        {/* <svg
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        data-prefix="fas"
                                                        data-icon="eye-slash"
                                                        className="w-6 h-6 text-gray-600"
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 576 512"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M286.693 391.984l32.579 46.542A333.958 333.958 0 0 1 288 440C168.19 440 63.031 376.051 6.646 280.369a47.999 47.999 0 0 1 0-48.739c24.023-40.766 56.913-75.775 96.024-102.537l57.077 81.539C154.736 224.82 152 240.087 152 256c0 74.736 60.135 135.282 134.693 135.984zm282.661-111.615c-31.667 53.737-78.747 97.46-135.175 125.475l.011.015 41.47 59.2c7.6 10.86 4.96 25.82-5.9 33.42l-13.11 9.18c-10.86 7.6-25.82 4.96-33.42-5.9L100.34 46.94c-7.6-10.86-4.96-25.82 5.9-33.42l13.11-9.18c10.86-7.6 25.82-4.96 33.42 5.9l51.038 72.617C230.68 75.776 258.905 72 288 72c119.81 0 224.969 63.949 281.354 159.631a48.002 48.002 0 0 1 0 48.738zM424 256c0-75.174-60.838-136-136-136-17.939 0-35.056 3.473-50.729 9.772l19.299 27.058c25.869-8.171 55.044-6.163 80.4 7.41h-.03c-23.65 0-42.82 19.17-42.82 42.82 0 23.626 19.147 42.82 42.82 42.82 23.65 0 42.82-19.17 42.82-42.82v-.03c18.462 34.49 16.312 77.914-8.25 110.95v.01l19.314 27.061C411.496 321.2 424 290.074 424 256zM262.014 356.727l-77.53-110.757c-5.014 52.387 29.314 98.354 77.53 110.757z"
                                                        />
                                                    </svg> */}
                                                        <div className="w-full flex py-10 md:px-0 lg:px-5 xs:px-0 xs:py-0 justify-center items-center ">
                                                            <img
                                                                src={Download}
                                                                alt="Globe"
                                                                className="z-10 relative flex justify-center items-center "
                                                            />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="">
                                            <div className="block relative">
                                                <label
                                                    htmlFor="file-input"
                                                    className="block w-full pb-1 text-sm font-medium text-gray-700 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                                                >
                                                    Upload the ID Back-view  <span className="text-rose-700">*</span>
                                                    <div className="text-gray-400 text-[10px]">Valid government-issued photo ID (e.g., Driver's License, Passport, State ID)</div>
                                                </label>
                                                <input
                                                    type="file"
                                                    name="avatar"
                                                    id="file-input"
                                                    accept=".jpg,.jpeg,.png"
                                                    onChange={(e) => handleFileChange(e, 'backId')}
                                                    className="w-full pl-3 pr-3 py-3 border rounded-sm border-gray-200 outline-none focus:border-[#61297F] text-sm"
                                                    placeholder="Valid government-issued photo ID"
                                                    required
                                                />
                                                <div
                                                    className="flex mt-3 flex-col h-6 "
                                                    style={{
                                                        position: "absolute",

                                                        right: "0px",
                                                        bottom: "12px",
                                                        lineHeight: "20px",
                                                    }}
                                                >

                                                    <div className="cursor-pointer">
                                                        <div className="w-full flex py-10 md:px-0 lg:px-5 xs:px-0 xs:py-0 justify-center items-center ">
                                                            <img
                                                                src={Download}
                                                                alt="Globe"
                                                                className="z-10 relative flex justify-center items-center "
                                                            />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="">
                                            <div className="block relative">
                                                <label
                                                    htmlFor="file-input"
                                                    className="block w-full pb-1 text-sm font-medium text-gray-700 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                                                >
                                                    Take and Upload a Selfie holding the ID Front-view <span className="text-rose-700">*</span>
                                                    <div className="text-gray-400 text-[10px]">Valid government-issued photo ID (e.g., Driver's License, Passport, State ID)</div>
                                                </label>
                                                <input
                                                    type="file"
                                                    name="avatar"
                                                    id="file-input"
                                                    accept=".jpg,.jpeg,.png"
                                                    onChange={(e) => handleFileChange(e, 'selfieId')}
                                                    className="w-full pl-3 pr-3 py-3 border rounded-sm border-gray-200 outline-none focus:border-[#61297F] text-sm"
                                                    placeholder="Valid government-issued photo ID"
                                                    required
                                                />
                                                <div
                                                    className="flex mt-3 flex-col h-6 "
                                                    style={{
                                                        position: "absolute",
                                                        right: "0px",
                                                        bottom: "12px",
                                                        lineHeight: "20px",
                                                    }}
                                                >

                                                    <div className="cursor-pointer">

                                                        <div className="w-full flex py-10 md:px-0 lg:px-5 xs:px-0 xs:py-0 justify-center items-center ">
                                                            <img
                                                                src={Download}
                                                                alt="Globe"
                                                                className="z-10 relative flex justify-center items-center "
                                                            />
                                                        </div>
                                                    </div>

                                                </div>


                                            </div>
                                        </div>

                                        <div className="">
                                            <div className="block relative">
                                                <label
                                                    htmlFor="file-input"
                                                    className="block w-full pb-1 text-sm font-medium text-gray-700 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                                                >
                                                    Upload a Photograph of Applicant<span className="text-rose-700">*</span>
                                                    <div className="text-gray-400 text-[10px]">Take and Upload a Photograph of Applicant</div>
                                                </label>
                                                <input
                                                    type="file"
                                                    name="avatar"
                                                    id="file-input"
                                                    accept=".jpg,.jpeg,.png"
                                                    onChange={(e) => handleFileChange(e, 'applicantId')}
                                                    className="w-full pl-3 pr-3 py-3 border rounded-sm border-gray-200 outline-none focus:border-[#61297F] text-sm"
                                                    placeholder="Valid government-issued photo ID"
                                                    required
                                                />
                                                <div
                                                    className="flex mt-3 flex-col h-6 "
                                                    style={{
                                                        position: "absolute",
                                                        right: "0px",
                                                        bottom: "12px",
                                                        lineHeight: "20px",
                                                    }}
                                                >
                                                    <div className="cursor-pointer">
                                                        <div className="w-full flex py-10 md:px-0 lg:px-5 xs:px-0 xs:py-0 justify-center items-center ">
                                                            <img
                                                                src={Download}
                                                                alt="Globe"
                                                                className="z-10 relative flex justify-center items-center "
                                                            />
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="flex justify-between w-full mt-8">
                                            <div className="flex justify-end">
                                                <button
                                                    className="bg-[#61297F] py-2 rounded text-white px-8 text-xs font-semibold"
                                                    onClick={renderPreviousForm}
                                                >
                                                    Previous
                                                </button>

                                            </div>

                                            <div className="flex justify-end">
                                                <button
                                                    className="bg-[#61297F] py-2 rounded text-white px-8 text-xs font-semibold"
                                                    onClick={handleFormSubmit}
                                                >
                                                    Finish
                                                </button>

                                            </div>
                                        </div>

                                    </div>
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
            )}
        </section>
    );
}

export default VerifyPage;