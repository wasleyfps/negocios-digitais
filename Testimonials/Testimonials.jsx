import React from "react";
import "./Testimonials.css";
import SlickSlider from "./SlickSlider";
const Testimonials = () => {
  return (
    <div className="t-wrapper">
      <div className="container">
        <div className="t-container">
          <div className="t-head">
            <span className="tag"> Depoimentos</span>
            <span className="title">
              Acesse capital que complementa a opção de financiamento
              tradicional </span>
              <span className="des">O que as pessoas dizem sobre nós</span>
          </div>

          {/* Slider */}
          <SlickSlider/>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
