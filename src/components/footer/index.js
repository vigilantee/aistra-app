import React, { memo } from "react"
import "./footer.css"
import { images } from "../images"

const Footer = props => {

    const handleClick = (val) => {
        window.scrollTo({
            top: val,
            behavior: "smooth"
        });
    }

    return (
        <div className="footer-container">
            <div className="footer-body">
                <div className="aistra-logo-container">
                    <img className="aistra-logo" src={images['aistra-labs-logo.svg']} alt="Aistra Logo" />
                </div>
                <div className="footer-mid-section">
                    <div className="footer-content">
                        <div className="footer-header">Company</div>
                        <div className="footer-links">
                            <div onClick={() => handleClick(850)} className="link-text">About us</div>
                            <div className="link-text">Team</div>
                            <div className="link-text">Get in touch</div>
                        </div>
                    </div>
                    <div className="footer-content">
                        <div className="footer-header">Useful Links</div>
                        <div className="footer-links">
                            <div className="link-text">Careers</div>
                            <div className="link-text">Privacy Policy</div>
                            <div className="link-text">Terms and Conditions</div>
                        </div>
                    </div>
                </div>
                <div className="footer-content">
                    <div className="footer-header">Contact Us</div>
                    <div className="footer-links">
                        <div className="email-text">info@aistra.com</div>
                        <div className="link-text">307 Seventh Avenue Suite 1601, New York, NY 10001.</div>
                    </div>
                </div>
                <div className="footer-content">
                    <div className="footer-header">Find us on</div>
                    <div className="social-links">
                        <div className="social-icon-container">
                            <img className="social-icon" src={images['twitter.svg']} alt="Twitter Logo" />
                        </div>
                        <div className="social-icon-container">
                            <img className="social-icon" src={images['linkedin.svg']} alt="Linkedin Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Footer)