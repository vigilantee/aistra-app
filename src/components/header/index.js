import React, { memo } from "react"
import "./header.css"
import { images } from "../images"

const Header = props => {
    const {refAbout, refProduct} = props;

    const handleAboutClick = () => {
        refAbout.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const handleProductClick = () => {
        refProduct.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="hcontainer">
            <div className="hlogo">
                <img src={images['aistra-labs-logo.svg']} alt="Aistra Logo" />
            </div>
            <div className="hmenu">
                <div className="tabs-container" style={{ display: 'flex' }}>
                    <div className="tab">Home</div>
                    <div onClick={() => handleAboutClick()} className="tab">About</div>
                    <div onClick={() => handleProductClick()} className="tab">Product</div>
                    <div className="tab">Team</div>
                </div>
                <div className="header-btn-container" style={{ display: 'flex' }}>
                    <div className="career-tab">Careers</div>
                    <img className="get-started-btn" src={images['get-started-btn.svg']} alt="Get started" />
                </div>
            </div>
        </div>
    )
}

export default memo(Header)