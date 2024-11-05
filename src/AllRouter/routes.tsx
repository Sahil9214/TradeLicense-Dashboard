import { Routes, Route } from "react-router-dom";
import LoginPage from "../Pages/Login/Login";
import LoadingPage from "../Pages/Loader/LoadingPage";
import { useState, useEffect } from "react";
import Dashboard from "../Pages/Dashboard/Dashboard";
function AllRouter() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Routes>
      <Route path="/" element={loading ? <LoadingPage /> : <LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default AllRouter;
