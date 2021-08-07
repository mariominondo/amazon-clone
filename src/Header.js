import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
        alt=""
      />
      <div className="header__deliverAddress">
        <div>
            <LocationOnIcon className="locationIcon"></LocationOnIcon>
            <div>
                <span className="deliverAddress__LineOne">Deliver to Mario</span>
                <span className="deliverAddress__LineTwo">Minessota 85497</span>
            </div>
            </div>
      </div>
      <div className="header__search">
        <input type="text" className="search__searchInput" />
        <SearchIcon fontSize="small" className="search__searchIcon" />
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
        <div className="nav__shopping-cart">{/** logo */} Cart</div>
      </nav>
    </div>
  );
}

export default Header;
