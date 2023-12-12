import { Link } from "react-router-dom";

import { Fade } from "react-reveal";
import Dot from "../../../assets/svg/business/dot.svg";
import Odu from "../../../assets/svg/business/odu.svg";
import Dinner from "../../../assets/svg/business/dinner.svg";

function TopSection() {
  return (
    <div>
      <div>
        <section className=" w-full pt-10 bg-[#ffff] rounded-br-[100px]">
          <Fade up>
            <div className="flex justify-center flex-col">
              <div className="flex justify-center">
                <div className="">
                  {/* <div className="px-2 font-bold text-4xl leading-normal text-start text-secondary font-poppins capitalize py-4">
                    Excellent digital services that help businesses{" "}
                    <span className="text-orange-600">succeed</span> .
                  </div> */}
                  <div className="text-3xl font-bold md:text-center xs:text-left px-5">
                    Built for today’s
                  </div>
                  <div className="text-3xl font-bold md:text-center xs:text-left px-5">
                    ambitious businesses
                  </div>
                </div>
              </div>
              <Fade left delay={500}>
                <div className="flex justify-center w-full xs:grid xs:grid-cols-1 md:grid md:grid-cols-1 text-gray-500 mt-3">
                  {/* <p className="px-2 flex justify-center mb-6 font-poppins text-md font-medium">
                    Make Your Choose To Request a Demo
                  </p> */}
                  <div className="text-md text-black px-3 flex justify-center mb-6 font-poppins text-md font-medium">
                    Thousands of forward-thinking businesses rely on Brass everyday to turbo-charge their business financial operations
                  </div>
                </div>
              </Fade>
            </div>
          </Fade>
          <div className="md:px-0 grid md:grid-cols-2 lg:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 bg-black">
            <div className="bg-black flex items-center justify-center ">
              <div className="flex mx-4 items-center justify-center">
                <div className="">
                  <div
                    className="xs:mx-2 md:mx-8 md:my-8 text-lg lg:my-lg text-center text-md text-white p-2  w-fit tracking-[.2rem] mb-5"

                  >
                    “The ease of opening an account completely won me over. The app is very easy to navigate and it’s obvious they have the best insterests of SMEs at heart. I’m proud to call them my bank.”
                  </div>

                  <div className="flex items-center">
                    {/* <div className="type-cursor w-10 h-10 rounded-full bg-orange-600 mr-6"></div> */}

                    <div
                      data-scroll
                      data-scroll-delay="0.13"
                      data-scroll-speed="7"
                      className="font-poppins items-center font-semibold w-full lg:text-xl text-[#656B76] xs:text-sm  my-0 text-center flex justify-center"
                    >
                      Olakunbi Adedipe, Odu Fashion
                    </div>
                  </div>
                  <div className="">
                    <div className="mt-10 w-full flex py-10 md:px-0 lg:px-5 xs:px-0 xs:py-0 justify-center items-center ">
                      <img
                        src={Dot}
                        alt="Globe"
                        className="z-10 relative flex justify-center items-center "
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center mr-1 px-2 py-10">
                    <div className="">
                      <div className="w-full flex py-10 md:px-0 lg:px-5 xs:px-0 xs:py-0 justify-center items-center ">
                        <img
                          src={Odu}
                          alt="Globe"
                          className="z-10 relative flex justify-center items-center "
                        />
                      </div>
                    </div>
                  </div>

                  {/* <div className="mt-10 w-full flex py-10 md:px-0 lg:px-5 xs:px-0 xs:py-0 justify-center items-center ">
                      <img
                        src={Odu}
                        alt="Globe"
                        className="z-10 relative flex justify-center items-center "
                      />
                    </div>
                  </div> */}

                  {/* <p className="text-gray-700 text-start font-poppins xl:text-lg lg:text-md xs:text-xs my-4 pr-3">
                    Corporate websites that build trust. E-Commerce and
                    marketing websites that drive sales. With experience working
                    on over 450 projects, we are the company to talk to about
                    your web design goals.
                  </p> */}

                  {/* <div className="my-12">
                    <div className="w-52">
                      <div className="capitalize text-lg font-semibold text-green-700">
                        Website Design services
                      </div>
                      <div className="w-full bg-green-700 h-[2px]"></div>
                    </div>
                  </div> */}
                  {/* <div className="my-10">
                    <div className="w-64">
                      <div className="text-lg font-semibold text-green-700">
                        eCommerce Website Services
                      </div>
                      <div className="w-full bg-green-700 h-[2px]"></div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <Fade left delay={800}>
              <div className="flex justify-center items-center ">
                <div className="">
                  <div className="w-full flex justify-center items-center ">
                    <img
                      src={Dinner}
                      alt="Globe"
                      className="z-10 relative flex justify-center items-center "
                    />
                  </div>
                </div>
              </div>
              <div className="hidden items-center justify-center">
                <div className="flex mx-2 items-center justify-center">
                  <div className="max-w-[700px] h-full">
                    <div
                      className="uppercase text-lg xs:mt-[3px] text-center text-md text-gray-500 p-2 mb-10 text-start w-fit tracking-[.2rem]"
                      style={{ fontFamily: "san-serif" }}
                    >
                      Put your money to work
                    </div>

                    <h1
                      data-scroll
                      data-scroll-delay="0.13"
                      data-scroll-speed="4"
                      className="font-poppins items-center font-semibold xl:text-4xl text-slate-800 xs:text-sm lg:text-xl my-0"
                    >
                      Branding that attracts the right people
                    </h1>
                    <p className="text-gray-700 text-start font-poppins xl:text-lg lg:text-md xs:text-xs my-4 pr-3">
                      We get it... you want to stand out in a noisy marketplace.
                      You want your business to be perceived the right way. We
                      have helped hundreds of businesses achieve this, and would
                      be happy to discuss how we can help you.
                    </p>

                    <div className="my-12">
                      <div
                        // style={{
                        //   transform:
                        //     "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        //   transformStyle: "preserve-3d",
                        // }}
                        className="pl-[10px] relative z-10 inline-block"
                      >
                        <Link
                          to="/"
                          style={{ boxShadow: "7px 7px 0 0 #000" }}
                          className="flex justify-center items-center bg-white py-[10px] px-[36px] w-full h-full border-[1px] border-slate-700"
                        >
                          <div>
                            <div className="text-slate-800 text-sm font-semibold">
                              Learn More
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TopSection;
