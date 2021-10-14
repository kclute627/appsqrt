import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo23433.png";

function Nav() {
  const navItems = [
    {
      title: "About Us",
      path: "/about",
    },

    {
      title: "Portfolio",
      path: "/portfolio",
    },
    {
      title: "Pricing",
      path: "/pricing",
    },
    {
      title: "Faq",
      path: "/faq",
    },
    {
      title: "Contact",
      path: "/contact",
      btn: true,
    },
  ];
  return (
    <div className="nav">
      <div className="nav_logo">
        <Link to="/">
          <img src={logo} alt='home logo' />
        </Link>
      </div>
      <div className="nav_right">
        {navItems.map((cur, i) => {
          return (
            <Link className={cur.btn ? "nav_item nav_btn": "nav_item"} to={cur.path}>
              {cur.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Nav;
