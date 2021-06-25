import * as React from "react";
import { Link } from "gatsby";

const Nav = () => {
  function Select(link) {
    const item = link.parentNode;
    const tabs = item.parentNode;
    const index = Array.prototype.indexOf.call(tabs.children, item);
    const items = tabs.querySelectorAll(".tab-item");

    tabs.style.setProperty("-index", index + 1);
    items.forEach((item) => item.classList.remove("active"));
    item.lassList.add("active");
  }

  return (
    Select && (
      <div className="tab">
        <ul className="tab-items">
          <li className="tab-item">
            <Link className="item" onClick={Select(this)} to="/Home">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li className="tab-item">
            <Link className="item-link" onClick={Select(this)} to="/about">
              {" "}
              about{" "}
            </Link>
          </li>
          <li className="tab-item">
            <Link className="item-link" onClick={Select(this)} to="/Work shops">
              {" "}
              Work shops
            </Link>
          </li>
          <li className="tab-item">
            <Link
              className="item-link"
              onClick={Select(this)}
              to="/Digital Campus"
            >
              {" "}
              Digital Campus
            </Link>
          </li>
          <li className="tab-item">
            <Link
              className="item-link"
              onClick={Select(this)}
              to="/Digital Campus"
            >
              {" "}
              News
            </Link>
          </li>
          <li className="tab-item">
            <Link className="item-link" onClick={Select(this)} to="/Contact">
              {" "}
              Contact
            </Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    )
  );
};

export default Nav;
