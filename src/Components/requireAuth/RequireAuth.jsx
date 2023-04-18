import { Navigate, Outlet} from "react-router-dom";


const RequireAuth = ({children, redirectTo="*"}) => {

    const userItem = JSON.parse(localStorage.getItem("auth"));

    if (!userItem) {  
    return <Navigate to={redirectTo}/>
    }
    return children ? children : <Outlet/>
    };

export default RequireAuth    