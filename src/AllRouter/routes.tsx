import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/Login";
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
      <Route path="/" element={loading ? <LoadingPage /> : <Login />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default AllRouter;
