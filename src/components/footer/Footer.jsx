import bgImage from "../footer/img/footerImg.png";
import logo from "../footer/img/logo.png";
import tandaTanya from "../footer/img/tandatanya.png";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="h-90 w-full bg-cover bg-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-24 px-10">
          <div>
            <div className="flex gap-5 items-center justify-between">
              <div className="flex gap-5 items-center">
                <img src={tandaTanya} alt="" className="size-10" />
                <h1 className="text-[#193354] lg:text-4xl font-bold">
                  Customer Services
                </h1>
              </div>
              <button className="bg-white py-2 px-5 rounded-2xl hover:bg-gray-100">
                Need Help?
              </button>
            </div>
            <p className="text-[#193354] mt-10 font-semibold">
              Visit our customer service page to find useful information on
              travelling by ferry, our FAQs, and how to contact us for help with
              your booking.
            </p>
          </div>
          <div></div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 p-5 lg:p-10 text-[#193354] gap-5">
        <div>
          <h1 className="text-2xl font-bold">PT SEAVENTURES (Persero) HQ</h1>
          <p className="font-semibold">
            Jl. Gajah Mada No. 14,Jakarta Pusat, 10130DKI Jakarta, Indonesia
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold">PT SEAVENTURES (Persero) HQ</h1>
          <ul className="font-semibold">
            <li>T. 162 (Jabodetabek)</li>
            <li>F. +62 21 6385 4130</li>
            <li>E. infosea162@seaventures.co.id</li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Media Sosial</h1>
          <div className="flex gap-5 mt-5">
            <Instagram size={50} />
            <Twitter size={50} />
            <Facebook size={50} />
            <Youtube size={50} />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-10 flex-col-reverse lg:flex-row gap-5">
        <p className="text-gray-500">2018-2023 PT. Seaventures Indonesia. All Rights Reserved</p>
        <img src={logo} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
