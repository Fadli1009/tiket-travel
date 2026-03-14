import React from "react";
import jumbotron from "../components/img/jumbotron.png";
import Jumbotron from "../components/Jumbotron";
import Patners from "../components/patners";

const home = () => {
  return (
    <>
      <Jumbotron jumbotron={jumbotron} />
      <Patners />
    </>
  );
};

export default home;
