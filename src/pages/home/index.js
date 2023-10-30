import React, { memo } from "react";
import "./home.css";

const Home = ({Header}) => {

  return (
    <div className="home-container">
        <div className="home-banner-container">
            <Header />
            <div className="home-title">Making AI Work</div>
        </div>
    </div>
  );
};

export default memo(Home);
