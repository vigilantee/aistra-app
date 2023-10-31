import React, { memo } from "react"
import "./footer.css"
import { images } from "../images"

const Footer = props => {
    const {refAbout, refTeam, refCareers} = props;

    const handleAboutClick = () => {
        refAbout.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const handleTeamClick = () => {
        refTeam.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const handleCareersClick = () => {
        refCareers.current?.scrollIntoView({ behavior: 'smooth' });
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
                        <div className="footer-links" style={{ display: 'flex' }}>
                            <div onClick={handleAboutClick} className="link-text">About us</div>
                            <div onClick={handleTeamClick} className="link-text">Team</div>
                            <div className="link-text">Get in touch</div>
                        </div>
                    </div>
                    <div className="footer-content">
                        <div className="footer-header">Useful Links</div>
                        <div className="footer-links" style={{ display: 'flex' }}>
                            <div onClick={handleCareersClick} className="link-text">Careers</div>
                            <div className="link-text">Privacy Policy</div>
                            <div className="link-text">Terms and Conditions</div>
                        </div>
                    </div>
                </div>
                <div className="footer-content">
                    <div className="footer-header">Contact Us</div>
                    <div className="footer-links" style={{ display: 'flex' }}>
                        <div className="email-text">info@aistra.com</div>
                        <div className="address">307 Seventh Avenue Suite 1601, New York, NY 10001.</div>
                    </div>
                </div>
                <div className="footer-content">
                    <div className="footer-header">Find us on</div>
                    <div className="social-links" style={{ display: 'flex' }}>
                        <a href="https://twitter.com/AistraLabs" target="_blank" rel="noopener noreferrer" className="social-icon-container">
                            <img className="social-icon" src={images['twitter.svg']} alt="Twitter Logo" />
                        </a>
                        <a href="https://www.linkedin.com/company/aistra-labs/" target="_blank" rel="noopener noreferrer" className="social-icon-container">
                            <img className="social-icon" src={images['linkedin.svg']} alt="Linkedin Logo" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Footer)