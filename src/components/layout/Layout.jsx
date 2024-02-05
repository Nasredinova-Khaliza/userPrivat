import { Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Home from "../pages/Home";
import HomeUsers from "../pages/HomeUsers";
import scss from "./Layout.module.scss";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Layout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isAuth = localStorage.getItem("isAuth");

  useEffect(() => {
    if (isAuth && pathname === "/login") {
      navigate("/homeUsers");
    } else if (!isAuth && pathname === "/homeUsers") {
      navigate("/login");
    }
  }, [isAuth, pathname, navigate]);

  return (
    <div className={scss.Layout}>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homeUsers" element={<HomeUsers />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
