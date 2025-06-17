import { Navigate, useLocation } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const isAuthenticated = () => {
  // Você pode trocar isso por algo real, tipo localStorage ou contexto
  return localStorage.getItem("token") !== null;
};

const PrivateRoute = ({ children }: Props) => {
  const location = useLocation();

  if (!isAuthenticated()) {
    // Redireciona para login e salva para onde o usuário queria ir
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
