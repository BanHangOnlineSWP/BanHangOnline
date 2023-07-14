import React from "react";
import "./Fashion.css";

import { PRODUCTS } from "../../products";
import { Product } from "../home/product";

function Fashion() {
  return (
    <main>
      <div className="trending">
        <img
          className="trending-img"
          src="assets/img/banners/Trending.png"
          alt=""
        />
      </div>

      <div className="voucher-all">
        <div className="voucher-trending">
          <h1 class="voucher-title">Top Voucher</h1>

          <div className="voucher-container">
            {PRODUCTS.map((product) => (
              <Product data={product} />
            ))}
          </div>
        </div>
        
        <a href="#" class="voucher-more">
          <button id="voucher-more">Find out More</button>
        </a>
      </div>
    </main>
  );
}

export default Fashion;
