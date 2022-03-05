import React from "react";
import background from "./backround2.jpg";
import "./Home.css";

const About = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="bg">
      <h1 style={{color:"white"}}>חברת רון טכניקה
         בע"מ</h1><h3 style={{color:"white"}}>חברה לתיקון מוצרי חשמל לבית כמו מכונות כביסה ,מקררים וכו ומכירת מוצרים כמו חלקי חילוף ומערכות מים ופילטרים
      טלפון:0522401065
      </h3></div>
  )
};

export default About;