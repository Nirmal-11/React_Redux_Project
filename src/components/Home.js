import React from "react";

const Home = () => {
  return (
    <div>
      <div className="add-to-cart">
        <img src="https://static.vecteezy.com/system/resources/previews/000/496/007/original/vector-add-to-cart-icon-design.jpg" />
      </div>
      <h1>Buy Your Dream Phones</h1>
      <div className="cart-wrapper">
        <div className="all-items">
          <div className="img-wrapper cart-item">
            <img src="http://www.91-img.com/pictures/vivo-apex-mobile-phone-large-1.jpg" />
          </div>
          <div className="text-wrapper cart-item">
            <span>I-phone</span>
            <span>Price: $1000.00</span>
          </div>
          <div className="cart-item">
            <button class="cart-btn">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
