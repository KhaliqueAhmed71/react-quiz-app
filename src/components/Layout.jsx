
import Navbar from "./Navbar";
import Bottom from "./Bottom";
import Footer from "./Footer"; 
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> 
      <Bottom />
      <Footer />
    </>
  );
};

export default Layout;
