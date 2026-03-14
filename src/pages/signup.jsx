import { useNavigate } from "react-router-dom";
import BgSign from "../assets/bg-sign/sign_login.png";
import Signs from "../components/sign";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";

const signup = () => {
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
      autoComplete: "new-password",
      placeholder: "input your password!",
      value: password,
      onChange: (e) => setPassword(e.target.value),
    },
  ];

  const handleSignup = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in both email and password fields.");
      return;
    }

    if (email && password) {
      if (email === localStorage.getItem("email")) {
        alert("Email already exists. Please use a different email.");
        return;
      } else {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        navigate("/login");
      }
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${BgSign})` }}
      className="h-full w-full bg-cover bg-center brightness-75"
    >
      <Signs
        title="Sign Up"
        description="You Have Account?"
        to="/login"
        titles="Sign in here"
        form={handleSignup}
        inputs={inputs}
        titleButton="Sign Up"
      />
    </div>
  );
};

export default signup;
