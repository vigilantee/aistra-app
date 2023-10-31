import React, { memo, useEffect, useState } from "react"
import "./header.css"
import { images } from "../images"

const Header = props => {
    const {refHome, refAbout, refProduct, refTeam, refCareers} = props;

    const handleHomeClick = () => {
        refHome.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const handleAboutClick = () => {
        refAbout.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const handleProductClick = () => {
        refProduct.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const handleTeamClick = () => {
        refTeam.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const handleCareersClick = () => {
        refCareers.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav
                className={isScrolled ? 'navbar fixed-top navbar-expand-lg navbar-dark p-0 bg-dark shadow' : 'navbar fixed-top navbar-expand-lg navbar-dark p-0'}>
                <div className="container">
                    <a className="navbar-brand p-0">
                        <img src={images['aistra-labs-logo.svg']} alt="Logo Image" className="my-brand" width="120" height="120"/>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="mx-auto"></div>
                        <ul className="navbar-nav align-items-center header-tabs">
                            <li className="nav-item">
                                <div className="nav-link header-tab" onClick={handleHomeClick}>Home</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link header-tab" onClick={handleAboutClick}>About</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link header-tab" onClick={handleProductClick}>Products</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link header-tab" onClick={handleTeamClick}>Team</div>
                            </li>
                        </ul>
                        <div className='ms-5'>
                            <div className="btn btn-outline-warning g-btn" role="button" onClick={handleCareersClick} >Careers</div>
                            <div className="btn btn-primary g-btn ms-4" role="button" >Get Started</div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default memo(Header)