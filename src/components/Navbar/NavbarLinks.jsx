import { useState } from "react";
// import { links } from "./Mylinks";


// import { RiArrowRightSLine } from "react-icons/ri";
// import { Link } from "react-router-dom";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";

import { AiOutlineTag, AiOutlineVideoCameraAdd } from "react-icons/ai";

import {
  FcPuzzle,
  FcRegisteredTrademark,
  FcUnlock,
  FcOnlineSupport,
  FcInTransit,
} from "react-icons/fc";

import { AiOutlineBank, AiOutlineUngroup } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
function NavbarLinks() {
  // const [heading, setHeading] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [subHeading, setSubHeading] = useState("");

  const [naming, setNaming] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [linkName, setLinkName] = useState({
    nameOne: "Customers",
    nameTwo: "Capital",
    nameThree: "Company",
  });

  return (
    <>
      <div className="overflow-x-auto md:w-full sm:w-full text-white">
        <div
          className={`${
            naming === linkName.nameOne ||
            linkName.nameTwo ||
            linkName.nameThree
              ? ""
              : ""
          } px-1 text-left md:cursor-pointer group py-0`}
        >
          {/* <div className="text-rose-800">{naming}</div> */}
          <div>
            <h1
              className={`${
                naming === linkName.nameOne ? "text-white" : ""
              } py-4 flex justify-between items-center md:pr-0 pr-5 group`}
              onClick={() => {
                naming !== linkName.nameOne
                  ? setNaming(linkName.nameOne)
                  : setNaming("");
                setSubHeading("");
              }}
            >
              {linkName.nameOne}
              <span className="text-sm inline">
                {naming === linkName.nameOne ? (
                  <HiOutlineChevronUp />
                ) : (
                  <HiOutlineChevronDown />
                )}
              </span>
            </h1>
            <div className=" top-0 left-0 w-full bg-white overflow-x-auto text-white">
              {naming === "Customers" && (
                <>
                  <div
                    className={`bg-white text-black  border-none w-full left-0 flex flex-col px-1 justify-center py-1`}
                  >
                    <div className="py-2 flex flex-col max-w-[30rem]">
                      <div className="py-2 flex flex-row justify-start">
                        <div className="text-2xl justify-start flex text-purple-600">
                          <AiOutlineVideoCameraAdd />
                        </div>
                        <div className="ml-4 text-start text-base leading-6 font-semibold">
                          Blockchain
                        </div>
                      </div>
                    </div>

                    <div className="py-2 flex flex-col max-w-[30rem]">
                      <div className="py-2 flex flex-row  justify-start">
                        <div className="text-2xl justify-start flex text-orange-700">
                          <AiOutlineTag />
                        </div>
                        <div className="ml-4 text-start text-base leading-6 font-semibold">
                          Machine Learning
                        </div>
                      </div>
                    </div>

                    <div className="py-2 flex flex-col max-w-[30rem]">
                      <div className="py-2 flex flex-row  justify-start">
                        <div className="text-2xl justify-start flex text-lime-500">
                          <AiOutlineUngroup />
                        </div>
                        <div className="ml-4 text-start text-base leading-6 font-semibold">
                          Big Analytics
                        </div>
                      </div>
                    </div>

                    <div className="py-2 flex flex-col max-w-[30rem]">
                      <div className="py-2 flex flex-row  justify-start">
                        <div className="text-2xl justify-start flex text-primary">
                          <AiOutlineBank />
                        </div>
                        <div className="ml-4 text-start text-base leading-6 font-semibold">
                          Artificial Intelligence
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <h1
              className={`${
                naming === linkName.nameTwo ? "text-white" : ""
              } py-4 flex justify-between items-center md:pr-0 pr-5 group`}
              onClick={() => {
                naming !== linkName.nameTwo
                  ? setNaming(linkName.nameTwo)
                  : setNaming("");
                setSubHeading("");
              }}
            >
              {linkName.nameTwo}
              <span className="text-sm inline">
                {naming === linkName.nameTwo ? (
                  <HiOutlineChevronUp />
                ) : (
                  <HiOutlineChevronDown />
                )}
              </span>
            </h1>
            <div className=" top-0 left-0 w-full bg-white overflow-x-auto">
              {naming === "Capital" && (
                <>
                  <div
                    className={`bg-white text-black  w-full left-0  flex flex-col px-1 justify-center py-1`}
                  >
                    <div className="py-2 flex flex-col max-w-[30rem]">
                      <div className="py-2 flex flex-row  justify-start">
                        <div className="text-2xl justify-start flex text-purple-600">
                          <FcPuzzle />
                        </div>
                        <div className="ml-4 text-start text-base leading-6 font-semibold">
                          Swift Ticket
                        </div>
                      </div>
                    </div>

                    <div className="py-2 flex flex-col max-w-[30rem]">
                      <div className="py-2 flex flex-row  justify-start">
                        <div className="text-2xl justify-start flex text-orange-700">
                          <FcRegisteredTrademark />
                        </div>
                        <div className="ml-4 text-start text-base leading-6 font-semibold">
                          Ferry Transport
                        </div>
                      </div>
                    </div>

                    <div className="py-2 flex flex-col max-w-[30rem]">
                      <div className="py-2 flex flex-row  justify-start">
                        <div className="text-2xl justify-start flex text-lime-500">
                          <FcUnlock />
                        </div>
                        <div className="ml-4 text-start text-base leading-6 font-semibold">
                          Personal Rides
                        </div>
                      </div>
                    </div>

                    <div className="py-2 flex flex-col max-w-[30rem]">
                      <div className="py-2 flex flex-row  justify-start">
                        <div className="text-2xl justify-start flex text-primary">
                          <FcInTransit />
                        </div>
                        <div className="ml-4 text-start text-base leading-6 font-semibold">
                          Bus Transport
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <h1
              className={`${
                naming === linkName.nameThree ? "text-white" : ""
              } py-4 flex justify-between items-center md:pr-0 pr-5 group`}
              onClick={() => {
                naming !== linkName.nameThree
                  ? setNaming(linkName.nameThree)
                  : setNaming("");
                setSubHeading("");
              }}
            >
              {linkName.nameThree}
              <span className="text-sm inline">
                {naming === linkName.nameThree ? (
                  <HiOutlineChevronUp />
                ) : (
                  <HiOutlineChevronDown />
                )}
              </span>
            </h1>
            <div className=" top-0 left-0 w-full bg-white overflow-x-auto">
              {naming === "Company" && (
                <>
                  <div
                    className={`bg-white text-black w-full left-0  flex flex-col px-1 justify-center py-1 border-none`}
                  >
                    <div className="py-2 flex flex-col max-w-[30rem]">
                      <div className="py-2 flex flex-row  justify-start">
                        <div className="text-2xl justify-start flex text-purple-600">
                          <FcOnlineSupport />
                        </div>
                        <div className="ml-4 text-start text-base leading-6 font-semibold">
                          Contact Us
                        </div>
                      </div>
                    </div>

                    <div className="py-2 flex flex-col max-w-[30rem]">
                      <div className="py-2 flex flex-row  justify-start">
                        <div className="text-2xl justify-start flex text-orange-700">
                          <FcRegisteredTrademark />
                        </div>
                        <div className="ml-4 text-start text-base leading-6 font-semibold">
                          About Us
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarLinks;
