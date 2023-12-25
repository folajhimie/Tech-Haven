import { Navigate } from 'react-router-dom';
// import DashboardDefault from "../../components/Dashboard/Layout/Layout.jsx";
import { Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
// const DashboardDefault = lazy(() => import("./components/Dashboard/Layout/Layout.jsx"));

const PrivateRoute = () => {

    let userLogin = localStorage.getItem('user')

    const decoded = jwtDecode(userLogin);
    console.log("all the user...", decoded);

    //   const { userInfo } = useSelector((state) => state.auth);
    return decoded ? decoded && (decoded?.isAdmin === false) ?
            <Navigate to='/auth/verify-account' replace />
            :
            <Outlet/>
        :
        <Navigate to='/auth/login' replace />;
};

export default PrivateRoute;
