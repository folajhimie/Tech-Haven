
import { Link } from "react-router-dom";
// import ServiceSection from "./ServicePage/ServiceSection";

import SupportSection from "./SupportSection/SupportSection";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import gsap from "gsap";
import Package from "../../assets/wrapper/break.svg";
// import { HiArrowSmRight } from "react-icons/hi";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Fade } from "react-reveal";
import { TypeAnimation } from "react-type-animation";

// import BasicSection from "./BasicSection/BasicSection";
import FaqSection from "./FaqSection/FaqSection";
import { RiArrowDownSLine } from "react-icons/ri";
import TopSection from "./TopSection/TopSection";
import BackSection from "./BackSection/BackSection";

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
        <section ref={ref} className="w-full pt-0 bg-[#ffff] rouded-br-[100px]">
          <div className="lg:px-20 md:px-0 grid md:grid-cols-2 lg:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 lg:gap-[10rem] md:gap-0 justify-evenly">
            <div className="flex items-center justify-center lg:ml-[40px]">
              <div className="flex mx-4 items-center justify-center">
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="max-w-[700px] h-full"
                >
                  <div className="text-lg  xs:mt-[100px] text-center text-md text-gray-500 p-2  text-start w-fit tracking-[.2rem]"
                  style={{ fontFamily: 'cursive'}}>
                    WEBSITE DESIGN AGENCY. SINCE 2022.
                  </div>

                  <h1
                    data-scroll
                    data-scroll-delay="0.13"
                    data-scroll-speed="4"
                    className="font-poppins font-semibold xl:text-5xl mb-6 leading-normal text-start text-slate-800 xs:text-3xl lg:text-2xl mt-10"
                  >
                    
                      Focused on{" "}
                      <div className="h-fit">
                        <TypeAnimation
                          sequence={[
                            " Blockchain",
                            2000,
                            " Artificial Intelligence",
                            4000,
                            " Machine Learning",
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
                  <p className="text-gray-700 text-start font-poppins xl:text-lg lg:text-md xs:text-xs my-4 pr-3">
                    As one of the leading web design companies in Nigeria, we
                    have helped hundreds of businesses achieve success online.
                    Find out what we can do for you.
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
                        className="flex justify-center items-center bg-white py-[10px] px-[36px] w-full h-full border-[1px] border-slate-700"
                      >
                        <div>
                          <div className="text-slate-800 text-sm font-semibold">
                            Request Demo
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <Fade left delay={800}>
              <div className="block ">
                <div className="">
                  <div className="flex py-10 md:px-0 lg:px-5 justify-center items-center">
                    <img
                      src={Package}
                      alt="Globe"
                      className="z-10 relative top-[30px]"
                    />
                  </div>
                  {/* <div className="w-96 h-3/4 border-[5px] border-lime-100 rounded-tl-[100px] rounded-tr-2xl rounded-br-2xl rounded-bl-2xl z-0 absolute top-[100px] xsl:right-[380px] md:right-[100px]"></div>
                          <div className="w-96 h-3/4 border-[5px] border-lime-100 rounded-tl-[100px] rounded-tr-2xl rounded-br-2xl rounded-bl-2xl z-0 absolute top-[200px] xsl:right-[330px] md:right-[90px]"></div> */}
                </div>
              </div>
            </Fade>
          </div>
        </section>
        <div className="animate-bounce  relative text-5xl z-30 py-1 font-semibold  w-full flex justify-center items-center text-lime-500">
          <RiArrowDownSLine/>
          
        </div>
        <div className="relative z-30 py-6 px-2 font-semibold  w-full flex justify-center items-center bg-white text-slate-700">
          Wow! We are making Big Data accessible to everyone. Tech Haven is now available to Everyone
          
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
        <SupportSection />
      </div>
      <div>
        <FaqSection />
      </div>
    </div>
  );
}

export default MainPage;
