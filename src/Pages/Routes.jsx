import { Route, Routes, useLocation } from "react-router-dom";
import { usePages } from "./hooks/usePages";
import ProtectedRoute from "./ProtectedRoute";

export const CustomRoutes = () => {
  const pages = usePages();
  const location = useLocation();

  return (
    <Routes key={location.pathname} location={location}>
      {pages.map(({ path, element, isProtected }, idx) => {
        return (
          <Route
            key={idx}
            path={path}
            element={
              isProtected ? <ProtectedRoute>{element}</ProtectedRoute> : element
            }
          />
        );
      })}
    </Routes>
  );
};
