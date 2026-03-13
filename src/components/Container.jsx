import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer/Footer";

const Container = () => {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
export default Container;
