import bgImage from "../components/img/footerImg.png";

const Footer = () => {
  return (
    <footer>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="h-90 w-full bg-cover bg-center"
      >
        <h1>footer</h1>
      </div>
    </footer>
  );
};

export default Footer;
