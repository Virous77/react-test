import React from "react";
import "./Navbar.css";
import { navLinks } from "../utils/data";
import Theme from "../Theme";

const Navbar = React.memo(({ activeTab, setActiveTab }) => {
  return (
    <nav className="main-nav">
      <h1 onClick={() => setActiveTab("users")}>React</h1>

      <ul className="nav-links">
        <Theme />
        {navLinks.map((links) => (
          <li
            key={links.id}
            className={
              activeTab === links.name ? "active-tab" : "not-active-tab"
            }
            onClick={() => setActiveTab(links.name)}
          >
            {links.name}
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default Navbar;
