import Footer from "./Footer";

const Container = ({ children }) => {
  return (
    <>
      <div className="min-h-screen">
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
};
export default Container;
