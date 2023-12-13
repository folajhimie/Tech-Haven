import { Suspense, lazy } from "react";
// import Featured from "./components/Navbar/Featured";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";

// const Home = lazy(() => import("./pages/home/Home"));
const Layout = lazy(() => import("./components/Navbar/Layout.jsx"));
const MainPage = lazy(() => import("./components/Mainpage/MainPage.jsx"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp.jsx"));
const Register = lazy(() => import("./pages/Register/Register.jsx"));



// const Contact = lazy(() => import("./pages/Contact/Contact"));
// const AuthLogin = lazy(() => import("./components/Login/AuthLogin"));
// const AuthRegister = lazy(() => import("./components/Login/AuthRegister"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-[100vh] flex justify-center items-center">
          <Spinner />
        </div>
      }
    >
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>

              <Route path="/" element={<MainPage />} />
              {/* <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />  */}
            </Route>
            <Route
              path="/auth/signup"
              element={<SignUp/>}
            />
            <Route
              path="/auth/register"
              element={<Register/>}
            />
          </Routes>
        </Router>
      </div>
    </Suspense>
  );
}

export default App;
