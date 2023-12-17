import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { links } from "../../data/Mylinks";
// import { linkData } from "./data";
// import { RiArrowRightSLine } from "react-icons/ri";

import { AiOutlineTag, AiOutlineVideoCameraAdd } from "react-icons/ai";

import {
  FcPuzzle,
  FcRegisteredTrademark,
  FcUnlock,
  FcOnlineSupport,
  FcInTransit,
} from "react-icons/fc";

import { AiOutlineBank, AiOutlineUngroup } from "react-icons/ai";

import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";


let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

const NavLinks = () => {
  // let menuRef = useRef();
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  // const [open, setOpen] = useState(false);

  let domNode = useClickOutside(() => {
    setHeading("");
    console.log(subHeading);
  });

  return (
    <>
      <div ref={domNode} className="flex ">
        <div className="">
          <div className="px-6 text-left md:cursor-pointer group py-4">
            {/* { link.name} */}
            {/* {heading} */}
            <h1 className="py-0 flex justify-between items-center md:pr-0 pr-5 group">
              <Link to="/auth/verify-account" className="inline-block">
                Industry
              </Link>
            </h1>
          </div>
          {/* Mobile menus */}
        </div>
        {links.map((link) => (
          <div key={link.name} className="">
            <div
              className={`${
                heading === link.name ? "border-b-[0px]" : ""
              } px-3 text-left md:cursor-pointer group py-4 `}
            >
              {/* { link.name} */}
              {/* {heading} */}
              <h1
                className={`${
                  heading === link.name ? " text-[#61297f]" : ""
                } py-0 flex justify-between items-center md:pr-0 pr-5 group`}
                onClick={() => {
                  heading !== link.name
                    ? setHeading(link.name)
                    : setHeading("");
                  setSubHeading("");
                }}
              >
                {link.name}
                <span className="text-sm md:hidden inline">
                  {heading === link.name ? (
                    <HiOutlineChevronUp />
                  ) : (
                    <HiOutlineChevronDown />
                  )}

                  {/* <ion-icon
                    name={`${
                      heading === link.name ? "chevron-up" : "chevron-down"
                    }`}
                  ></ion-icon> */}
                </span>
                <span className="text-sm md:mt-1 md:ml-2  md:block hidden ">
                  {heading === link.name ? (
                    <HiOutlineChevronUp />
                  ) : (
                    <HiOutlineChevronDown />
                  )}
                </span>
              </h1>
            </div>
            {/* Mobile menus */}
          </div>
        ))}
        <div className=" absolute top-10 left-0 w-full bg-white">
          {heading === "Customers" && (
            <>
              <div
                className={` absolute bg-white text-black rounded-lg left-40 top-[1.15rem] flex gap-5 px-4 py-1 border-[2px] border-gray-200`}
              >
                <div className="flex flex-col">
                  <div className="flex justify-evenly py-5">
                    <div className=" py-0 flex flex-row max-w-[20rem]  px-10 justify-center ">
                      <div className="xl:text-2xl lg:text-2xl justify-start flex text-purple-600">
                        <AiOutlineVideoCameraAdd />
                      </div>
                      <div className="ml-4 text-start text-base leading-6 font-semibold">
                        Blockchain 
                      </div>
                    </div>

                    <div className=" py-0 flex flex-row max-w-[20rem] px-10 justify-center">
                      <div className="xl:text-2xl lg:text-2xl justify-start flex text-orange-700">
                        <AiOutlineTag />
                      </div>
                      <div className="ml-4 text-start text-base leading-6 font-semibold">
                        <div>Wallets</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-evenly py-5 ">
                    <div className="py-0 flex flex-row max-w-[20rem]  px-10 justify-center ">
                      <div className="xl:text-2xl lg:text-2xl justify-start flex text-lime-500">
                        <AiOutlineUngroup />
                      </div>
                      <div className="ml-4 text-start text-base leading-6 font-semibold">
                        Exchanges
                      </div>
                    </div>

                    <div className="py-0 flex flex-row max-w-[20rem] px-10 justify-center">
                      <div className="xl:text-2xl lg:text-2xl justify-start flex text-primary">
                        <AiOutlineBank />
                      </div>
                      <div className="ml-4 text-start text-base leading-6 font-semibold">
                        <div>Bitcoin</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {heading === "Capital" && (
            <>
              <div
                className={` absolute bg-white text-black rounded-lg left-80 top-[1.15rem] flex gap-5 px-4 py-1 border-[2px] border-gray-200`}
              >
                <div className="flex flex-col">
                  <div className="flex justify-between py-5">
                    <div className="py-0 flex flex-row max-w-[20rem] px-10 justify-center ">
                      <div className="xl:text-2xl lg:text-2xl justify-start flex text-purple-600">
                        <FcPuzzle />
                      </div>
                      <div className="ml-4 text-start text-base leading-6 font-semibold">
                      Cryptocurrencies
                      </div>
                    </div>

                    <div className=" py-0 flex flex-row max-w-[20rem] px-10 justify-center">
                      <div className="xl:text-2xl lg:text-2xl justify-start flex text-orange-700">
                        <FcRegisteredTrademark />
                      </div>
                      <div className="ml-4 text-start text-base leading-6 font-semibold">
                        <div>Trading Pairs</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between py-5">
                    <div className="py-0 flex flex-row max-w-[20rem] px-10 justify-center ">
                      <div className="xl:text-2xl lg:text-2xl justify-start flex text-lime-500">
                        <FcUnlock />
                      </div>
                      <div className="ml-4 text-start text-base leading-6 font-semibold">
                        Exchange Options

                      </div>
                    </div>

                    <div className="py-0 flex flex-row max-w-[20rem] px-10 justify-center">
                      <div className="xl:text-2xl lg:text-2xl justify-start flex text-primary">
                        <FcInTransit />
                      </div>
                      <div className="ml-4 text-start text-base leading-6 font-semibold">
                        <div>Market analysis</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {heading === "Company" && (
            <>
              <div
                className={` absolute bg-white text-black rounded-lg left-[31rem] top-[1.15rem] flex gap-5 px-4 py-1 border-[2px] border-gray-200`}
              >
                <div className="flex flex-col">
                  <div className="flex justify-between py-3">
                    <div className="py-0 flex flex-row max-w-[20rem] px-10 justify-center ">
                      <div className="xl:text-2xl lg:text-2xl justify-start flex text-purple-600">
                        <FcOnlineSupport />
                      </div>
                      <div className="ml-4 text-start text-base leading-6 font-semibold">
                        Contact Us
                      </div>
                    </div>
                    <div className=" py-0 flex flex-row max-w-[20rem] px-10 justify-center">
                      <div className="xl:text-2xl lg:text-2xl justify-start flex text-orange-700">
                        <FcRegisteredTrademark />
                      </div>
                      <div className="ml-4 text-start text-base leading-6 font-semibold">
                        <div>About Us</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavLinks;
