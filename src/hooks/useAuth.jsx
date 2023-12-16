import { useSelector } from "react-redux";
import { selectCurrentUser, selectCurrentToken } from "../features/auth/authSlice";
import jwtDecode from "jwt-decode";

const useAuth = () => {
    const user = useSelector(selectCurrentUser);

    const token = useSelector(selectCurrentToken)
    let isOwner = false;
    let isAdmin = false;
    let isManager = false;
    let isAccountant = false;
    let status = "Accountant";
    // Save an object to local storage
    // const user = { name: 'John', age: 25 };
    localStorage.setItem('user', JSON.stringify(user));

    localStorage.setItem('token', JSON.stringify(token));

    // Retrieve the object from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    const storedToken = JSON.parse(localStorage.getItem('token'));

    console.log("all the stored user..", storedUser, storedToken);


    // const { roles } = storedUser;

    const decoded = jwtDecode(storedToken);
    const roles = decoded?.roles;
    

    if (storedToken) {
        console.log("token for life..", token, user, storedToken, storedUser)
        console.log("first user...", user, decoded)



        
        isOwner = decoded?.roles === 'Owner';
        isAdmin = decoded?.roles === 'Admin';
        isManager = decoded?.roles === 'Manager';
        isAccountant = decoded?.roles === 'Accountant';
        
        if (isOwner) status = "Owner";
        // eslint-disable-next-line no-unused-vars
        if (isAdmin) status = "Admin";
        if (isManager) status = "Manager";
        if (isAccountant) status = "Accountant";
        
        console.log("all the roles..", roles, decoded.roles, status, isOwner)
        return {
            roles,
            status,
            isOwner,
            isAccountant,
            isManager,
            isAdmin
        }
    }

    return {
        roles,
        status,
        isOwner,
        isAccountant,
        isManager,
        isAdmin
    }
}

export default useAuth