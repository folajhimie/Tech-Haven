import { Link } from "react-router-dom";

import { Fade } from "react-reveal";

function TopSection() {
  return (
    <div>
      <div>
        <section className="my-8 w-full pt-0 bg-[#ffff] rounded-br-[100px]">
          <Fade up>
            <div className="flex justify-center flex-col">
              <div className="flex justify-center">
                <div className="">
                  <div className="px-2 font-bold text-4xl leading-normal text-start text-secondary font-poppins capitalize py-4">
                    Excellent digital services that help businesses{" "}
                    <span className="text-orange-600">succeed</span> .
                  </div>
                </div>
              </div>
              <Fade left delay={500}>
                <div className="flex justify-center w-full xs:grid xs:grid-cols-1 md:grid md:grid-cols-1 text-gray-500">
                  <p className="px-2 flex justify-center mb-6 font-poppins text-md font-medium">
                    Make Your Choose To Request a Demo
                  </p>
                </div>
              </Fade>
            </div>
          </Fade>
          <div className="md:px-0 grid md:grid-cols-2 lg:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 lg:gap-[0rem] md:gap-0 justify-evenly">
            <div className="bg-green-100 flex items-center justify-center ">
              <div className="flex mx-4 items-center justify-center">
                <div className="max-w-[1000px] h-full">
                  <div
                    className="uppercase text-lg lg:my-[80px] sm:my-2 text-center text-md text-gray-500 p-2 text-start w-fit tracking-[.2rem] mb-5"
                    style={{ fontFamily: "san-serif" }}
                  >
                    One small step today, a giant leap for tomorrow.
                  </div>

                  <div className="flex items-center">
                    <div className="type-cursor w-10 h-10 rounded-full bg-orange-600 mr-6"></div>

                    <div
                      data-scroll
                      data-scroll-delay="0.13"
                      data-scroll-speed="7"
                      className="font-poppins items-center font-semibold xl:text-4xl text-slate-800 xs:text-sm lg:text-xl my-0"
                    >
                      Beautiful websites that get results
                    </div>
                  </div>

                  <p className="text-gray-700 text-start font-poppins xl:text-lg lg:text-md xs:text-xs my-4 pr-3">
                    Corporate websites that build trust. E-Commerce and
                    marketing websites that drive sales. With experience working
                    on over 450 projects, we are the company to talk to about
                    your web design goals.
                  </p>

                  <div className="my-12">
                    <div className="w-52">
                      <div className="capitalize text-lg font-semibold text-green-700">
                        Website Design services
                      </div>
                      <div className="w-full bg-green-700 h-[2px]"></div>
                    </div>
                  </div>
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
              <div className="flex items-center justify-center lg:ml-[40px]">
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
