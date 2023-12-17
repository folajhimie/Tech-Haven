// import React from 'react'
import { useState } from "react";
// import Appheader from "./Appheader";
import SideNav from "./SideNav";
// import useMediaQuery from "../../../hooks/useMediaQuery";
import { Outlet } from "react-router-dom";
import FullHeader from "./FullHeader";
// import MainPage from "../../../pages/dashboard/MainPage.jsx";

const Layout = () => {
  const [open, setOpen] = useState(false);
  // const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");

  const OpenScreen = () => {
    setOpen(!open);
    console.log("open screen...", open);
  };

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <SideNav OpenScreen={OpenScreen} open={open} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <FullHeader OpenScreen={OpenScreen} open={open} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main className="bg-[#F3F5F7] h-screen">
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 ">
              <Outlet />
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
    
  );
};

export default Layout;
