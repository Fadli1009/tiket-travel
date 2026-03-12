import Navbar from "./Navbar";
import Footer from "./footer/Footer";

const Container = ({ children }) => {
  return (
    <>
      <div className="min-h-screen px-2">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
};
export default Container;
