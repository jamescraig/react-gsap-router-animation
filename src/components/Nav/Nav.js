import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const activeStyle = { color: "#FF5043" };
    return (
      <div id="Nav">
        <div id="Nav_brand">
          <NavLink
            to="/"
            className="Nav_brand-logo"
            activeClassName="activeRoute"
            activeStyle={activeStyle}
            exact
          >
            home
          </NavLink>
        </div>
        <div id="Nav_pages">{this.props.children}</div>
      </div>
    );
  }
}

export default Nav;
