import { Navigate, Outlet} from "react-router-dom";
import { AuthService } from "../../Api/AuthService";


const RequireAuth = ({children, redirectTo="*"}) => {

    const userItem = AuthService.isAuth;

    if (!userItem) {  
    return <Navigate to={redirectTo}/>
    }
    return children ? children : <Outlet/>
    };

export default RequireAuth    