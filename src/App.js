import React, { useState } from "react";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "src/components/ScrollToTop/ScrollToTop";
import { routes, adminRoutes, authRoutes } from "src/routes";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [hasUser, setHasUser] = useState(false);
  const routing = useRoutes(routes);
  let adminRouting = useRoutes(adminRoutes);
  const authRouting = useRoutes(authRoutes);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/login"
          element={hasUser ? <Navigate to="/admin" replace /> : authRouting}
        />
        <Route
          path="/admin/*"
          element={hasUser ? adminRouting : <Navigate to="/login" />}
        />
        <Route path="/*" element={routing} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      ></ToastContainer>
    </>
  );
}

export default App;
