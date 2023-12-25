import { Suspense, lazy,useEffect, useState } from "react";
// import Featured from "./components/Navbar/Featured";
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";
import { Toaster } from 'react-hot-toast';

// const Home = lazy(() => import("./pages/home/Home"));
const Layout = lazy(() => import("./components/Navbar/Layout.jsx"));
const MainPage = lazy(() => import("./components/Mainpage/MainPage.jsx"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp.jsx"));
const Register = lazy(() => import("./pages/Register/Register.jsx"));
const VerifyPage = lazy(() => import("./pages/VerifyAccount/VerifyPage.jsx"));
const MainDashboard = lazy(() => import("./components/Dashboard/Layout/Layout.jsx"));
const DefaultBoard = lazy(() => import("./pages/Dashboard/DefaultBoard.jsx"));
const PrivateRoute = lazy(() => import("./middleware/privateRoute.jsx"))
const Verification = lazy(() => import("./pages/VerifyAccount//Verification.jsx"));

import axios from "axios";

import routes from "./routes/index.jsx"
// import { jwtDecode } from "jwt-decode";


function App() {

  const [loading, setLoading] = useState(true);
  // let location = useLocation();
  let myToken = localStorage.getItem('user')
  const [token, setToken] = useState(myToken ? myToken : null);

  // let pathname = location.pathname
  // console.log("some token ...", myToken, "another token..", token);

  axios.defaults.headers.common["Authorization"] = "Bearer " + token

  if (
    localStorage.getItem('user') && 
    axios.defaults.headers.common.Authorization.split(" ")[1] == null 
    ) {
    window.location.reload();
  }

  useEffect(() => {
    let myToken = localStorage.getItem('user')

    
    if (myToken) {
      setToken(myToken)
    }
    const parsedToken = myToken ? myToken : "";
    // console.log("all lot of token ...", myToken, "parsed token..", parsedToken);
    axios.defaults.headers.common["Authorization"] = "Bearer " + parsedToken

    // console.log("axios token..", axios.defaults.headers.common["Authorization"]) 


  }, [token, myToken]);


  // const decoded = jwtDecode(userLogin);


  // console.log("all the user...", decoded);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);


  return loading ? (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <Spinner />
    </div>
  ) : (
    <>
      <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<MainPage />} />
            </Route>
            
            <Route
              path="/auth/signup"
              element={<SignUp />}
            />
            <Route
              path="/auth/register"
              element={<Register />}
            />
            <Route
              path="/auth/account-verification"
              element={<Verification />}
            />
            <Route
              path="/auth/verify-account"
              element={<VerifyPage />}
            />

            {/* <Route path="/admin/" element={<MainDashboard />}>
              <Route path="dashboard" element={<DefaultBoard />}/>
            </Route> */}
          </Routes>
          <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/admin/" element={<MainDashboard />}>
              <Route path="dashboard" element={<DefaultBoard />} />
              {routes.map((routes, index) => {
                const { path, Component } = routes;
                return (
                  <Route
                    key={index}
                    path={path}
                    element={
                      <Suspense 
                        fallback={
                          <div className="w-full h-[100vh] flex justify-center items-center">
                            <Spinner />
                          </div>
                        }
                      >
                        <Component />
                      </Suspense>
                    }
                  />
                );
              })}
            </Route>

          </Route>
            
          </Routes>
        </Router>
      </div>
      
    </>
  );
}

export default App;
