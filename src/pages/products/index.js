import React, { memo } from "react";
import "./products.css";
import { images }from "../../components/images";
import ProductCard from "../../components/productCard";

const Products = ({refs:ref}) => {

    const cardData = [
        {
          header: "UnconstrainED",
          description: "Platform enabling K-12 teachers worldwide to get AI savvy, enhance productivity using AI tools, ensure ethical and compliant usage within the education community, and amplify creativity and personalization within the classroom.",
          imageUrl: images['unconstrained-logo.svg'],
          knowMore: "https://unconstrained.work/"
        },
        {
          header: "DeepTalk",
          description: "Scalable and industry-specific Conversational AI enabling 50% or higher productivity improvement, 24x7 responsiveness, top-notch response quality, and multilingual capability for customer care and customer success.",
          imageUrl: images['deeptalk-logo.svg'],
          knowMore: ""
        },
        {
          header: "V.IP",
          description: "AI platform for global registration and protection of brand and corporate identity including trademarks, copyright, brand collateral and digital destinations, offered to legal advisors, branding agencies, and brand owners.",
          imageUrl: images['vip-logo.svg'],
          knowMore: ""
        },
        {
          header: "DeepTalk",
          description: "Scalable and industry-specific Conversational AI enabling 50% or higher productivity improvement, 24x7 responsiveness, top-notch response quality, and multilingual capability for customer care and customer success.",
          imageUrl: images['fni-logo.svg'],
          knowMore: ""
        },
    ];

    return (
        <div ref={ref} className="products-container">
            <div className="products-header">
                Products & Solutions
            </div>
            <div className="products-cards">
                {cardData.map((card, index) => {
                    return(
                        <ProductCard 
                            header={card.header}
                            description={card.description}
                            imageUrl={card.imageUrl}
                            knowMore={card.knowMore}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default memo(Products);
