import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouteOutlet = ({ auth }: { auth: boolean }) => {
  // const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRouteOutlet;
