import React from "react";
import { NavLink } from "react-router-dom";

const Products = () => {
  return (
    <ul className="list-unstyled p-3">
      <li>
        <NavLink
          to="/Products"
          className={({ isActive }) =>
            isActive
              ? "active-link text-black text-decoration-none"
              : "text-white text-decoration-none"
          }
        >
          <i className="bi bi-arrow-right text-black"></i>
          <span className="ms-3 fs-5">Products</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/Cart"
          className={({ isActive }) =>
            isActive
              ? "active-link text-black text-decoration-none"
              : "text-white text-decoration-none"
          }
        >
          <i className="bi bi-arrow-right text-black"></i>
          <span className="ms-3 fs-5">Cart</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/Wishlist"
          className={({ isActive }) =>
            isActive
              ? "active-link text-black text-decoration-none"
              : "text-white text-decoration-none"
          }
        >
          <i className="bi bi-arrow-right text-black"></i>
          <span className="ms-3 fs-5">Wishlist</span>
        </NavLink>
      </li>

    </ul>
  );
};

export default Products;
