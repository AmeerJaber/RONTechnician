import React from "react";
import Img from './icon-booking.png'
import background from "./backround.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="bg">
        <container>
    <img src={Img} /></container>
  </div>
  )
};

export default Home;