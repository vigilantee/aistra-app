import React, { memo } from "react";
import "./home.css";

const Home = ({refs:ref}) => {

  return (
    <div ref={ref} className="home-container">
        <div className="home-banner-container">
            <div className="home-title">Making AI Work</div>
        </div>
    </div>
  );
};

export default memo(Home);
