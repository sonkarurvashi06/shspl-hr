import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

const PublicRoutes = lazy(() => import("./Routes/PublicRoutes"));
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top whenever the route changes
  }, [pathname]);

  return null;
};
const MainRoute = () => {
  return (
    <Router>
      <ScrollToTop /> {/* This ensures scrolling to top on route changes */}
      <Suspense fallback={<div>Loading...</div>}>
        <PublicRoutes />
      </Suspense>
    </Router>
  );
};

export default MainRoute;
