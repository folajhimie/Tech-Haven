// import React from 'react'
// import MinimalLayout from "../MinimalLayout"
import DropdownUser from "../../Header/DropdownUser";
import DropdownMessage from "../../Header/DropdownMessage";
import DropdownNotification from "../../Header/DropdownNotification";


// eslint-disable-next-line react/prop-types
const FullHeader = ({ OpenScreen, open }) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none border-b-[1px] border-gray-300 drop-shadow-md">
      <div className="flex flex-grow items-center justify-between  py-2 px-2 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={() => {
              // e.stopPropagation();
              OpenScreen(!open);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-2 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5 w-5 cursor-pointer">
              <span className="block absolute right-0 h-full w-full bottom-1">
                <span
                  className={`relative top-0 left-0 my-1 block h-1 w-5 rounded-sm bg-primary delay-[0] duration-200 ease-in-out dark:bg-white ${!open && '!w-full delay-300'
                    }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-1 w-5 rounded-sm bg-primary delay-150 duration-200 ease-in-out dark:bg-white ${!open && 'delay-400 !w-full'
                    }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-1 w-5 rounded-sm bg-primary delay-200 duration-200 ease-in-out dark:bg-white ${!open && '!w-full delay-500'
                    }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2 top-0 block h-full w-1 rounded-sm bg-primary delay-300 duration-200 ease-in-out dark:bg-white ${!open && '!h-0 !delay-[0]'
                    }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2 block h-1 w-full rounded-sm bg-primary duration-200 ease-in-out dark:bg-white ${!open && '!h-0 !delay-200'
                    }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          {/* <Link className="block flex-shrink-0 lg:hidden" to="/">
            <img src={Logo} alt="Logo" />
          </Link> */}
        </div>

        <div className="hidden sm:block md:w-1/2 sm:w-full">
          <form action="https://formbold.com/s/unique_form_id" method="POST">
            <div className="relative rounded-full p-2 border-[1px] border-gray-300">
              <button className="absolute top-1/2 left-2 -translate-y-1/2 text-black">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5423 19.2499C15.3518 19.2499 19.2507 15.3511 19.2507 10.5416C19.2507 5.73211 15.3518 1.83325 10.5423 1.83325C5.73284 1.83325 1.83398 5.73211 1.83398 10.5416C1.83398 15.3511 5.73284 19.2499 10.5423 19.2499Z" stroke="#596780" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20.1673 20.1666L18.334 18.3333" stroke="#596780" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <input
                type="text"
                placeholder="Search something here"
                className="w-full bg-transparent pr-4 pl-9 focus:outline-none"
              />
            </div>
          </form>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7 ">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* <!-- Dark Mode Toggler --> */}
            {/* <DarkModeSwitcher /> */}
            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Notification Menu Area --> */}
            <DropdownNotification />
            {/* <!-- Notification Menu Area --> */}

            {/* <!-- Chat Notification Area --> */}
            <DropdownMessage />
            {/* <!-- Chat Notification Area --> */}
          </ul>

          {/* <!-- User Area --> */}
          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );

};

export default FullHeader;
