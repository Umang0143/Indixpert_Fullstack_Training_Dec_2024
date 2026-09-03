import React from "react";
import { NavLink } from "react-router-dom";

const Forms = () => {
  return (
    <>
      <ul className="list-unstyled p-3">
        <li>
          <NavLink
            to="/BasicForm"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">BasicForm</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/FormikFormYup"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">FormikFormYup</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/RHForm"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">RHForm</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/RHFormYup"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">RHFormYup</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Forms;
