/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import SidebarLinkGroup from "../../Header/SidebarLinkGroup";

// import { RiDashboardLine, RiPantoneLine } from "react-icons/ri";
// import { IoWalletOutline } from "react-icons/io5";
// import { MdOutlineMoveToInbox, MdOutlinePayment } from "react-icons/md";

// import { IoMdNotificationsOutline } from "react-icons/io";

// import { FiPackage } from "react-icons/fi";
// import { AiOutlineTag } from "react-icons/ai";
// import { BiStoreAlt } from "react-icons/bi";

import { Link } from "react-router-dom";
import Brass from "../../../assets/svg/business/brass.svg";
import Home from "../../../assets/Dashboard/Home.svg";
import Market from "../../../assets/Dashboard/Market.svg";
import Message from "../../../assets/Dashboard/Message.svg";
import Setting from "../../../assets/Dashboard/Setting.svg";
import Help from "../../../assets/Dashboard/Help.svg";
import Logout from "../../../assets/Dashboard/Logout.svg";
import Bitcoin from "../../../assets/Dashboard/Bitcoin.svg";

// import { RiArrowRightSLine } from "react-icons/ri";

// import send from "../../../assets/images/send.png";
// import useMediaQuery from "../../../hooks/useMediaQuery";
// import arrowRight from "../../../assets/images/arrow-right.png";
// import MinimalLayout from '../MinimalLayout';

// import Appheader from "../Layout/Appheader.jsx";
// import FullHeader from "./FullHeader.jsx";

// import { HiOutlineChevronRight, HiOutlineChevronDown } from "react-icons/hi";

const SideNav = ({ OpenScreen, open }) => {
    // const [heading, setHeading] = useState("Business Overview");
    // const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");
    const location = useLocation();
    const { pathname } = location;

    // eslint-disable-next-line no-unused-vars
    const [subHeading, setSubHeading] = useState("");
    // const [open, setOpen] = useState(false);
    // const [naming, setNaming] = useState("Business Overview");

    // eslint-disable-next-line no-unused-vars
    const [linkName, setLinkName] = useState({
        nameOne: "Sales",
        nameTwo: "Supply Chain",
        nameThree: "Manage",
        nameFour: "Business Overview",
        nameFive: "Reports",
        nameSix: "Task",
        nameSeven: "Expenses",
        nameEight: "Wallet",
        nameNine: "Cash Flow",
        nameTen: "Utiliity Bills",
        nameZero: "Transactions",
    });

    // const Menus = [
    //     { id: 0, title: "Dashboard", src: Home, to: "/admin/dashboard" },
    //     { id: 1, title: "Market", src: Market, to: "/admin/task" },
    //     { id: 2, title: "Portfolio", src: Market, to: "/admin/sales", arrow: true },
    //     { id: 3, title: "Trade", src: Message, to: "/admin/reports" },
    //     {
    //         id: 4,
    //         title: "Profile",
    //         src: Message,
    //         to: "/admin/supply-chain",
    //         arrow: true,
    //     },
    //     {
    //         id: 5,
    //         title: "Settings",
    //         src: Setting,
    //         gap: true,
    //         to: "/admin/pickups",
    //         arrow: true,
    //     },
    //     { id: 6, title: "Help & Center", src: Help, to: "/admin/wallet" },
    // ];

    const trigger = useRef(null);
    const sidebar = useRef(null);

    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
    );

    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!sidebar.current || !trigger.current) return;
            if (
                !open ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            OpenScreen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!open || keyCode !== 27) return;
            OpenScreen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    useEffect(() => {
        localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
        if (sidebarExpanded) {
            document.querySelector('body')?.classList.add('sidebar-expanded');
        } else {
            document.querySelector('body')?.classList.remove('sidebar-expanded');
        }
    }, [sidebarExpanded]);

    return (
        <div className="">
            {/* className={`absolute left-0 top-0 z-9999 flex h-screen w-52 flex-col overflow-y-hidden bg-white duration-300 ease-linear border-r-[1px] border-gray-200  lg:static lg:translate-x-0 
                        `} */}
           


            <div
                ref={sidebar}
                className={`absolute left-0 top-0 z-9999 flex h-screen w-52 flex-col overflow-y-hidden bg-white duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 border-r-[1px] border-gray-200  ${open ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* <!-- SIDEBAR HEADER --> */}
                <div className="flex items-center justify-between px-6 py-5 lg:py-6">
                    <Link
                        to="/admin/dashboard"
                        className="flex gap-x-4 items-center  "
                    >
                        <img
                            src={Brass}
                            className={`w-7 h-7 cursor-pointer duration-500`}
                        />
                        <h1
                            className={`text-slate-600 origin-left font-medium text-xl duration-200 `}
                        >
                            <div className=" text-start flex justify-start mx-auto text-primary cursor-pointer">
                                <div className="link">
                                    <span className="text-black text-xl font-semibold capitalize">
                                        Brass
                                    </span>
                                </div>
                            </div>
                        </h1>
                    </Link>

                    <button
                        ref={trigger}
                        onClick={() => OpenScreen(!open)}
                        aria-controls="sidebar"
                        aria-expanded={open}
                        className="block lg:hidden"
                    >
                        <svg
                            className="fill-current"
                            width="20"
                            height="18"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                                fill=""
                            />
                        </svg>
                    </button>
                </div>
                {/* <!-- SIDEBAR HEADER --> */}

                <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear justify-between  h-full">
                    {/* <!-- Sidebar Menu --> */}
                    <nav className="  lg:mt-9 lg:px-2">
                        {/* <!-- Menu Group --> */}
                        <div>
                            <h3 className="text-[#8c95a7] mb-1 ml-4 text-sm font-semibold text-bodydark2">
                                Main Menu
                            </h3>

                            <ul className=" flex flex-col gap-1 ">
                                {/* <!-- Menu Item Dashboard --> */}
                                <SidebarLinkGroup
                                    activeCondition={
                                        pathname === '/' || pathname.includes('dashboard')
                                    }
                                >
                                    {(handleClick) => {
                                        return (
                                            <React.Fragment>
                                                <NavLink
                                                    to="#"
                                                    className={`text-[#8c95a7] mb-1 text-sm group relative flex items-center gap-2 py-2 px-4 font-medium duration-300 ease-in-out hover:bg-[#61297F] hover:text-white rounded-lg ${(pathname === '/' ||
                                                            pathname.includes('dashboard')) &&
                                                        'bg-graydark dark:bg-meta-4'
                                                        }`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        sidebarExpanded
                                                            ? handleClick()
                                                            : setSidebarExpanded(true);
                                                    }}
                                                >
                                                    
                                                    <div className="flex mr-1 w-5 h-5  justify-center">
                                                        <img src={Home} alt="" className="" />
                                                    </div>
                                                    <span className=" ">Dashboard</span>
                                                    
                                                    
                                                </NavLink>
                                                
                                            </React.Fragment>
                                        );
                                    }}
                                </SidebarLinkGroup>
                                <li>
                                    <NavLink
                                        to="/calendar"
                                        className={`text-[#8c95a7] mb-1 text-sm group relative flex items-center gap-2 py-2 px-4 font-medium duration-300 ease-in-out hover:bg-[#61297F] hover:text-white rounded-lg ${pathname.includes('calendar') &&
                                            'bg-graydark dark:bg-meta-4'
                                            }`}
                                    >
                                        
                                        <div className="flex mr-1 w-5 h-5  justify-center">
                                            <img src={Market} alt="" className="" />
                                        </div>
                                        <span className=" ">Market</span>
                                    </NavLink>
                                </li>
                                {/* <!-- Menu Item Calendar --> */}

                                {/* <!-- Menu Item Profile --> */}
                                <li>
                                    <NavLink
                                        to="/profile"
                                        className={`text-[#8c95a7] mb-1 text-sm group relative flex items-center gap-2 py-2 px-4 font-medium duration-300 ease-in-out hover:bg-[#61297F] hover:text-white rounded-lg ${pathname.includes('profile') && 'bg-graydark dark:bg-meta-4'
                                            }`}
                                    >
                                        
                                        <div className="flex mr-1 w-5 h-5  justify-center">
                                            <img src={Market} alt="" className="" />
                                        </div>
                                        <span className=" ">Profile</span>
                                        {/* Profile */}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/profile"
                                        className={`text-[#8c95a7] mb-1 text-sm group relative flex items-center gap-2 py-2 px-4 font-medium duration-300 ease-in-out hover:bg-[#61297F] hover:text-white rounded-lg ${pathname.includes('profile') && 'bg-graydark dark:bg-meta-4'
                                            }`}
                                    >
                                        
                                        <div className="flex mr-1 w-5 h-5  justify-center">
                                            <img src={Message} alt="" className="" />
                                        </div>
                                        <span className=" ">Trade</span>
                                        {/* Profile */}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/profile"
                                        className={`text-[#8c95a7] mb-1 text-sm group relative flex items-center gap-2 py-2 px-4 font-medium duration-300 ease-in-out hover:bg-[#61297F] hover:text-white rounded-lg ${pathname.includes('profile') && 'bg-graydark dark:bg-meta-4'
                                            }`}
                                    >
                                        
                                        <div className="flex mr-1 w-5 h-5  justify-center">
                                            <img src={Message} alt="" className="" />
                                        </div>
                                        <span className=" ">Portfolio</span>
                                        {/* Profile */}
                                    </NavLink>
                                </li>
                                <div className="flex  absolute bottom-10 left-28">
                                    <img src={Bitcoin} alt="" className="w-52 h-52" />
                                </div>
                                {/* <!-- Menu Item Profile --> */}

                                {/* <!-- Menu Item Forms --> */}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[#8c95a7] mb-1 mt-4 ml-4 text-sm font-semibold text-bodydark2">
                                Preference
                            </h3>

                            <ul className=" flex flex-col gap-1 ">
                                {/* <!-- Menu Item Dashboard --> */}
                                <SidebarLinkGroup
                                    activeCondition={
                                        pathname === '/' || pathname.includes('dashboard')
                                    }
                                >
                                    {(handleClick) => {
                                        return (
                                            <React.Fragment>
                                                <NavLink
                                                    to="#"
                                                    className={`text-[#8c95a7] mb-1 text-sm group relative flex items-center gap-2 py-2 px-4 font-medium duration-300 ease-in-out hover:bg-[#61297F] hover:text-white rounded-lg ${(pathname === '/' ||
                                                            pathname.includes('dashboard')) &&
                                                        'bg-graydark dark:bg-meta-4'
                                                        }`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        sidebarExpanded
                                                            ? handleClick()
                                                            : setSidebarExpanded(true);
                                                    }}
                                                >
                                                    
                                                    <div className="flex mr-1 w-5 h-5  justify-center">
                                                        <img src={Setting} alt="" className="" />
                                                    </div>
                                                    <span className=" ">Settings</span> 
                                                </NavLink>
                                            </React.Fragment>
                                        );
                                    }}
                                </SidebarLinkGroup>
                                
                                <li>
                                    <NavLink
                                        to="/calendar"
                                        className={`text-[#8c95a7] text-sm mb-1 group relative flex items-center gap-2 py-2 px-4 font-medium duration-300 ease-in-out hover:bg-[#61297F] hover:text-white rounded-lg ${pathname.includes('calendar') &&
                                            'bg-graydark dark:bg-meta-4'
                                            }`}
                                    >
                                        
                                        <div className="flex mr-1 w-5 h-5  justify-center">
                                            <img src={Help} alt="" className="" />
                                        </div>
                                        <span className=" ">Help & Center</span>
                                    </NavLink>
                                </li> 
                            </ul>
                        </div>
                    </nav>
                    {/* <!-- Sidebar Menu --> */}

                    <div>
                        <NavLink
                            to="/profile"
                            className={`text-[#8c95a7] mb-1 text-sm group relative flex items-center gap-2 py-2 px-4 font-medium duration-300 ease-in-out hover:bg-[#61297F] hover:text-white rounded-lg ${pathname.includes('profile') && 'bg-graydark dark:bg-meta-4'
                                }`}
                        >
                            
                            <div className="flex mr-1 w-5 h-5  justify-center">
                                <img src={Logout} alt="" className="" />
                            </div>
                            <span className=" ">Logout</span>
                            {/* Profile */}
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SideNav;
