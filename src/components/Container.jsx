<<<<<<< Updated upstream
import Navbar from "./Navbar";
=======
>>>>>>> Stashed changes
import Footer from "./footer/Footer";

const Container = ({ children }) => {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <div className="">{children}</div>
        <Footer />
      </div>
    </>
  );
};
export default Container;
