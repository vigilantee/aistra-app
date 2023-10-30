import React, { memo, useEffect, useRef } from "react";
import "./about.css";
import { images }from "../../components/images";

const About = ({refs:ref}) => {

  return (
    <div ref={ref} className="about-container">
        <div className="about-body">
            <div className="about-image-container">
                <img className="about-image" src={images['about-img.png']} alt="About image" />
            </div>
            <div className="about-content">
                <div className="about-header">Who We Are</div>
                <div className="about-desc">
                    <div className="desc">
                        We are a group of entrepreneurs and business leaders who’ve meaningfully transformed workplaces by building and leading several multi-billion dollar businesses over the past two decades.
                    </div>
                    <div className="desc">
                        Today, as we stand on the cusp of having AI disrupt what we’ve built, we are passionate about embracing and leading that change, rather than defending the status quo.
                    </div>
                    <div className="desc">
                        Aistra is developing a suite of AI-based micro-apps and virtual assistants that elevate business processes by eliminating mundane tasks, channelling creativity and simplifying decision-making. Besides licensing our products, we will also offer a full range of solutions to optimize business processes. 
                    </div>
                    <div className="desc">
                        Is your workplace AI ready?  Get in touch to know more.
                    </div>
                </div>
                <div className="about-btn-container">
                    <img className="about-btn-image" src={images['talk-to-us-btn.svg']} alt="About button" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default memo(About);
