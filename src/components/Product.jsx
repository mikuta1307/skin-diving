// Product.js
import React from 'react';

const Product = ({ data, isStandard }) => {
  return (
    <div className={`product-card ${data.type}`}>
      <div className="product-image">
        <img src={data.image} alt={data.name} />
      </div>
      <div className="product-content">
        <h3 className="product-name">{data.name}</h3>
        <p className="product-price">{data.price}</p>
        <div className="product-features">
          {data.features.map((feature, index) => (
            <div key={index} className="product-feature">
              {feature}
            </div>
          ))}
        </div>
        <div className="product-recommendation">
          <strong>おすすめな人：</strong>
          {data.recommendation}
        </div>
        <div className="product-cta">
          <a href={data.link} className="btn">このセットを詳しく見る</a>
        </div>
      </div>
    </div>
  );
};

export default Product;
