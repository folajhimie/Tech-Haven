import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import Logo from "../../assets/Logo.png";
// import Button from "../primaryButton/PrimaryButton.jsx";
// import PrimaryButton from "../primaryButton/PrimaryButton.jsx";
import SecondaryButton from "../secondaryButton/SecondaryButton.jsx";
import NavLinks from "./NavLinks";
import Home from "../../assets/svg/home.svg"
import useMediaQuery from "../../hooks/useMediaQuery.jsx";
// import { links } from "./Mylinks";
import NavbarLinks from "./NavbarLinks";






const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);

const transition = { duration: 0.3 };

// eslint-disable-next-line react/prop-types
const Navbar = ({ isTopOfPage }) => {
  const [open, setOpen] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");
  const navbarBackground = isTopOfPage ? "bg-white" : "bg-[#f2f7ff]";
  // const [heading, setHeading] = useState("")

  const OpenScreen = () => {
    setOpen(!open);
  };

  return (
    <nav className={`${navbarBackground} fixed w-full top-0 left-0 z-50 `}>

      {isAboveMediumScreens && (
        <div className="container-lg flex items-center font-medium justify-between mx-0 px-2 bg-black text-white">
          <div className="z-50 p-0 md:w-auto w-full flex justify-around items-center">
            <div className="ml-10">
              {/* <img src={Logo} alt="logo" className=" md:cursor-pointer h-7" /> */}
              <Link to="/" className="">
                <div className="text-xl text-white">
                  <img
                    src={Home}
                    alt="Globe"
                    className="z-10 relative"
                  />
                </div>
              </Link>
              <div className="text-xl md:hidden" onClick={() => setOpen(!open)}>
                <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>

              </div>
            </div>
            <div className="flex justify-center ml-10">
              <NavLinks />

            </div>


          </div>

          <ul className="md:flex hidden items-center gap-20 font-[Poppins] xl:text-sm lg:text-xs ">
            {/* <li>
              <Link to="/" className=" py-2 px-3 inline-block">
                Home
              </Link>
            </li> */}
            <div className="flex w-auto justify-between gap-2">
              <Link to="/admin/dashboard" className="cursor font-medium px-8 py-2 text-white sm:text-xs xs:text-[14px] sm:py-3 sm:px-6 lg:text-[0.75rem] xl:text-[0.95rem] lg:w-fit xl:w-fit">
                Resources
              </Link>

              <Link to="/auth/signup" className="cursor bg-amber-500 rounded-md font-medium px-8 py-2 text-white sm:text-xs xs:text-[14px] sm:py-3 sm:px-6 lg:text-[0.75rem] xl:text-[0.95rem] lg:w-fit xl:w-fit">
                Login
              </Link>

              <div className="md:block hidden">
                <Link className="link flex items-center" to="/auth/register">
                  <SecondaryButton text={"Open an account"} />
                </Link>
              </div>
            </div>
          </ul>
        </div>
      )}
      {!isAboveMediumScreens && (
        <div className=" flex items-center font-medium justify-between bg-black text-white ">
          <div
            className="z-50 p-3 w-full flex justify-around"
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <div className="flex items-center justify-between w-full">
              <div>
                <Link to="/" className="">
                  <div className="text-xl text-white">
                    <img
                      src={Home}
                      alt="Globe"
                      className="z-10 relative"
                    />
                  </div>
                </Link>
              </div>
              <button
                className="text-white text-3xl "
                onClick={() => setOpen(!open)}
              >
                {/* <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon> */}
                <svg width="23" height="23" viewBox="0 0 23 23">
                  <Path
                    animate={open ? "open" : "closed"}
                    initial={false}
                    variants={{
                      closed: {
                        d: "M 2 2.5 L 20 2.5",
                        stroke: "rgb(255,255,255)",
                      },
                      open: {
                        d: "M 3 16.5 L 17 2.5",
                        stroke: "rgb(255,255,255)",
                      },
                    }}
                    transition={transition}
                  />
                  <Path
                    d="M 2 9.423 L 20 9.423"
                    stroke="#ffffff"
                    animate={open ? "open" : "closed"}
                    initial={false}
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }}
                    transition={transition}
                  />
                  <Path
                    animate={open ? "open" : "closed"}
                    initial={false}
                    variants={{
                      closed: {
                        d: "M 2 16.346 L 20 16.346",
                        stroke: "rgb(255,255,255)",
                      },
                      open: {
                        d: "M 3 2.5 L 17 16.346",
                        stroke: "rgb(255,255,255)",
                      },
                    }}
                    transition={transition}
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <div
              onClick={OpenScreen}
              className={`${open ? "left-0" : "left-[-100%]"
                } absolute left-0 top-12 bg-slate-800 bg-opacity-75 md:bg-opacity-50 w-full h-screen text-white`}
            ></div>

            <ul
              className={`
              bg-black fixed h-fit top-[46px] overflow-y-auto bottom-0 py-10 px-4 md:w-[450px] w-full
              duration-500 ${open ? "right-0" : "right-[-100%]"}
              `}
              style={{
                height: "100%",
                // width: '100%',
                flex: "1",
                padding: "1rem 1.1rem 1rem 1rem",
                overflowY: "auto",
                overflowX: "hidden",
              }}
            >

              <li>
                <Link to="/auth/verify-account" className="py-4 px-1 inline-block capitalize text-white">
                  Industry
                </Link>
              </li>
              <NavbarLinks OpenScreen={OpenScreen} />
              <div className="mb-10 py-6 flex justify-center flex-col  sm:w-full">
                <Link to="/admin/dashboard" className="my-2 text-center cursor font-medium px-8 py-2 text-white sm:text-xs xs:text-[14px] sm:py-3 sm:px-6 lg:text-[0.75rem] xl:text-[0.95rem] lg:w-fit xl:w-fit">
                  Resources
                </Link>

                <Link to="/auth/signup" className="my-2 bg-amber-500 text-center cursor font-medium px-8 py-2 text-white sm:text-xs xs:text-[14px] sm:py-3 sm:px-6 lg:text-[0.75rem] xl:text-[0.95rem] lg:w-fit xl:w-fit">
                  Login
                </Link>

                <button className="text-white my-4 w-full rounded-sm p-2 px-1 text-sm bg-[#61297F] border-none">
                  Open an account
                </button>

                {/* <div className="my-8 flex justify-center w-full">
                  <div className="block  font-semibold">
                    <Link
                      className="link flex font-semibold"
                      to="/auth/register"
                    >
                      <SecondaryButton text={"Open an Account"} />
                    </Link>
                  </div>
                </div> */}
              </div>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
