import { Suspense, lazy,useEffect, useState } from "react";
// import Featured from "./components/Navbar/Featured";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";

// const Home = lazy(() => import("./pages/home/Home"));
const Layout = lazy(() => import("./components/Navbar/Layout.jsx"));
const MainPage = lazy(() => import("./components/Mainpage/MainPage.jsx"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp.jsx"));
const Register = lazy(() => import("./pages/Register/Register.jsx"));
const VerifyPage = lazy(() => import("./pages/VerifyAccount/VerifyPage.jsx"));
const MainDashboard = lazy(() => import("./components/Dashboard/Layout/Layout.jsx"));
const DefaultBoard = lazy(() => import("./pages/Dashboard/DefaultBoard.jsx"));

import routes from "./routes/index.jsx"

function App() {
  const [loading, setLoading] = useState(true);

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
              path="/auth/verify-account"
              element={<VerifyPage />}
            />

            {/* <Route path="/admin/" element={<MainDashboard />}>
              <Route path="dashboard" element={<DefaultBoard />}/>
            </Route> */}
          </Routes>
          <Routes>
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
          </Routes>
        </Router>
      </div>
      
    </>
  );
}

export default App;
