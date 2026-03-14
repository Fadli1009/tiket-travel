import BgSign from "../assets/bg-sign/sign_login.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Signs from "../components/sign";
import { FaRegUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";

const sign = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const inputs = [
    {
      icon: <FaRegUser />,
      type: "email",
      name: "email",
      autoComplete: "email",
      placeholder: "input your email!",
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
    {
      icon: <IoIosLock />,
      type: "password",
      name: "password",
      autoComplete: "current-password",
      placeholder: "input your password!",
      value: password,
      onChange: (e) => setPassword(e.target.value),
    },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    if (!email || !password) {
      alert("Please fill in both email and password fields.");
      return;
    }

    if (
      email === localStorage.getItem("email") &&
      password === localStorage.getItem("password")
    ) {
      navigate("/");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <>
      <div className="absolute inset-0 bg-black/30" />
      <div
        style={{ backgroundImage: `url(${BgSign})` }}
        className="h-full w-full bg-cover bg-center z-30"
      >
        <Signs
          title="Sign In"
          description="Don't have an account yet?"
          to="/signup"
          titles="Sign up here"
          form={handleLogin}
          inputs={inputs}
          titleButton="Sign In"
        />
      </div>
    </>
  );
};

export default sign;
