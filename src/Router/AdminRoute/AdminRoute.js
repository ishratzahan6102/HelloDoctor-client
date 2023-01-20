
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Pages/Contexts/Context';
import Loading from '../../Pages/Loading';
import useAdmin from '../../useAdmin/useAdmin';


const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation()



    if(user && isAdmin){
        return children
    }

    if(loading || isAdminLoading){
        return <Loading></Loading>
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default AdminRoute;