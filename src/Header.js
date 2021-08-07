import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
        alt=""
      />
      <div className="header__deliverAddress">
          <span className="deliverAddress__LineOne">Deliver to Mario</span>
          <span className="deliverAddress__LineTwo">Minessota 85497</span>
      </div>
      <div className="header__search">
        <input type="text" className="search__searchInput" />
        {/** logo */}
      </div>
      <nav className="nav">
        <div className="nav__signin">
            <span className="signin__LineOne">Hello Mario</span>
            <span className="signin__LineTwo">Account &#38; Lists</span>
        </div>
        <div className="nav__returnsAndOrders">
            <span className="returnsAndOrders__LineOne">Returns</span>
            <span className="returnsAndOrders__LineTwo">&#38; Orders</span>
        </div>
        <div className="nav__shopping-cart">{/** logo */}</div>
      </nav>
    </div>
  );
}

export default Header;
