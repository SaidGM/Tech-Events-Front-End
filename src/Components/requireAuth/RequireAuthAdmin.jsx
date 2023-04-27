import { Navigate, Outlet} from "react-router-dom";


const RequireAuthAdmin = ({children, redirectTo="*"}) => {

    const userItem = localStorage.getItem("auth_role")

    if (userItem === "ADMIN") {  
        return children ? children : <Outlet/>
    }
        return <Navigate to={redirectTo}/>
    };

export default RequireAuthAdmin    