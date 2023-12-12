import { Link } from "react-router-dom";
// import ServiceSection from "./ServicePage/ServiceSection";

// import SupportSection from "./SupportSection/SupportSection";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import gsap from "gsap";
// import Package from "../../assets/wrapper/break.svg";
import BusinessInsider from "../../assets/svg/businessInsider.svg"
import Yahoo from "../../assets/svg/yahoo.svg";
import TechCrunch from "../../assets/svg/techCrunch.svg";
import Group from "../../assets/svg/group.svg";
import Security from "../../assets/svg/business/security.svg";
import Arrow from '../../assets/svg/business/arrow.svg';
import Support from "../../assets/svg/business/support.svg"
// import { HiArrowSmRight } from "react-icons/hi";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Fade } from "react-reveal";
import { TypeAnimation } from "react-type-animation";

// import BasicSection from "./BasicSection/BasicSection";
import FaqSection from "./FaqSection/FaqSection";
// import { RiArrowDownSLine } from "react-icons/ri";
import TopSection from "./TopSection/TopSection";
import BackSection from "./BackSection/BackSection";
import BottomSection from "./BottomSection/BottomSection";

function MainPage() {
  const { ref, inView } = useInView();
  const animationX = useAnimation();
  const animationY = useAnimation();
  const animationZ = useAnimation();
  const animationBT = useAnimation();
  const pathAnimation = useAnimation();

  const pathRef = useRef(null);

  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  useEffect(() => {
    const el = pathRef.current;
    gsap.fromTo(
      el,
      { rotation: 0, opacity: 0 },
      {
        rotation: 360,
        opacity: 1,
        duration: 1,
        ease: "none",
        scrollTrigger: { trigger: el },
      }
    );
  }, [inView]);

  useEffect(() => {
    if (inView) {
      animationX.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          type: "fade",
        },
      });
      animationY.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          type: "fade",
        },
      });
      animationZ.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          type: "ease-out",
        },
      });
      animationBT.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          type: "ease-out",
        },
      });
      pathAnimation.start({
        opacity: 1,
        pathLength: 1,
        transition: {
          duration: 2,
          ease: "easeInOut",
        },
      });
    }
    if (!inView) {
      animationX.start({ opacity: 0, x: "-30px" });
      animationY.start({ opacity: 0, x: "30px" });
      animationZ.start({ opacity: 0, x: "-30px" });
      animationBT.start({ opacity: 0, y: "30px" });
      pathAnimation.start({ opacity: 0, pathLength: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { delay: 1, ease: "easeInOut" } },
  };

  return (
    <div>
      <div>
        <section
          ref={ref}
          className="w-full py-10 px-2 bg-black"
        >
          <div className="lg:px-5 md:px-0 grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 lg:gap-[1rem] md:gap-0 justify-evenly h-screen">
            <div className="flex items-center justify-center ">
              <div className="flex mx-4 items-center justify-center">
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="max-w-[700px] h-full"
                >
                  {/* <div className="text-lg  xs:mt-[100px] text-start text-md text-gray-500 p-2  w-fit tracking-[.2rem]"
                  style={{ fontFamily: 'cursive'}}>
                    WEBSITE DESIGN AGENCY. SINCE 2022.
                  </div> */}

                  <h1
                    data-scroll
                    data-scroll-delay="0.13"
                    data-scroll-speed="4"
                    className="font-poppins font-semibold xl:text-5xl mb-6 leading-normal text-start text-white xs:text-3xl lg:text-2xl mt-10"
                  >
                    <div className="h-fit xs:text-[20px] md:text-5xl">
                      Banking that works for your{" "}
                      <TypeAnimation
                        sequence={[
                          " Business",
                          2000,
                          " Customers",
                          4000,
                          " Future",
                          6000,
                          () => {},
                        ]}
                        wrapper="span"
                        cursor={false}
                        repeat={Infinity}
                        style={{ fontSize: "", display: "inline-block" }}
                      />
                      <div className="type-cursor w-5 h-5 rounded-full bg-purple-600 inline-block"></div>
                    </div>
                  </h1>
                  <p className="text-white text-start font-poppins xl:text-lg lg:text-md xs:text-xs my-4 pr-3">
                    Do more with a business account that comes with top-end
                    financial tools and integrations to help grow your
                    business..
                  </p>

                  <div className="my-12">
                    <div
                      style={{
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                      className="pl-[10px] relative z-10 inline-block"
                    >
                      <Link
                        to="/"
                        style={{ boxShadow: "-7px 7px 0 0 #000" }}
                        className="rounded-md flex justify-center items-center bg-[#61297F] py-[10px] px-[36px] w-full h-full border-[1px] border-slate-700"
                      >
                        <div>
                          <div className=" text-white md:text-xs xs:text-[10px] font-semibold">
                            Open an account in 10 minutes
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                <div className="w-full flex justify-between mb-5">
                  
                  <div className="block ">
                    <div className="">
                      <div className="">
                        <img
                          src={TechCrunch}
                          alt="Techcrunch"
                          className="z-10 relative"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="block ">
                    <div className="">
                      <div className="">
                        <img
                          src={Yahoo}
                          alt="Techcrunch"
                          className="z-10 relative"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="block ">
                    <div className="">
                      <div className="">
                        <img
                          src={BusinessInsider}
                          alt="Techcrunch"
                          className="z-10 relative"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                </motion.div>
              </div>
            </div>
            <Fade left delay={800}>
              <div className="flex justify-center items-center">
                <div className="">
                  <div className="sm:w-full  flex py-10 md:px-0 lg:px-5 xs:px-0 xs:py-0 justify-center items-center ">
                    <img
                      src={Group}
                      alt="Globe"
                      className="z-10 relative flex justify-center items-center  md:left-0 xs:top-0 "
                    />
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </section>
        {/* <div className="animate-bounce relative text-5xl z-30 py-1 font-semibold  w-full flex justify-center items-center text-lime-500">
          <RiArrowDownSLine />
        </div> */}
        <div className="px-6 my-6">
          <div className="relative z-30 py-6 px-2 font-bold  w-full flex justify-center items-center bg-white text-black text-3xl">
            The complete financial stack for your business
          </div>
          <div className="relative z-30 font-semibold  w-full flex justify-center items-center bg-white text-black">
            Top-end financial tools to help your business with its financial operations and cash flow.
          </div>
          <div className="relative z-30 font-semibold  w-full flex justify-center items-center bg-white text-black">
            We help companies of all types work better, save time and money with a simply better banking service that works.
          </div>
        </div>


        <div className="grid md:grid-cols-3 md:gap-10 xs:gap-5 xs:grid-cols-1 justify-center  items-center md:mx-20 xs:mx-0 mb-10 bg-white">
          <div className="flex bg-white my-4 justify-between">
            <div className="flex justify-center items-center mr-1 px-2">
              <div className="">
                <div className="w-full flex py-10 md:px-0 lg:px-5 xs:px-0 xs:py-0 justify-center items-center ">
                  <img
                    src={Arrow}
                    alt="Globe"
                    className="z-10 relative flex justify-center items-center "
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="font-semibold">
                Speed 
              </div>
              <div className="text-xs">
                Open a commercial-grade current account from anywhere in 10 minutes
              </div>
            </div>

          </div>

          <div className="flex bg-white my-4">
            <div className="flex justify-center items-center mr-1 px-2">
              <div className="">
                <div className="w-full flex py-10 md:px-0 lg:px-5 xs:px-0 xs:py-0 justify-center items-center ">
                  <img
                    src={Security}
                    alt="Globe"
                    className="z-10 relative flex justify-center items-center "
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="font-semibold">
                Security
              </div>
              <div className="text-xs">
                Rely on bank-grade security with all your monies fully insured by NDIC
              </div>
            </div>

          </div>

          <div className="flex bg-white my-4">
            <div className="flex justify-center items-center mr-1 px-2">
              <div className="">
                <div className="w-full flex py-10 md:px-0 lg:px-5 xs:px-0 xs:py-0 justify-center items-center ">
                  <img
                    src={Support}
                    alt="Globe"
                    className="z-10 relative flex justify-center items-center "
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="font-semibold">
                Support
              </div>
              <div className="text-xs">
                Get access to a trusted support team and resources whenever you want
              </div>
            </div>

          </div>
        </div>
      </div>

      <div>
        <BackSection />
      </div>

      <div>
        <TopSection />
      </div>

      {/* <div>
        <BasicSection />
      </div> */}
      {/* <div>
        <ServiceSection />
      </div> */}

      <div>
        <FaqSection />
      </div>
      <div>
        <BottomSection />
      </div>
    </div>
  );
}

export default MainPage;
