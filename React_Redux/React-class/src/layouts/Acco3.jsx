import { NavLink } from "react-router-dom";

const Acco3 = () => {
  return (
    <>
      <ul className="list-unstyled p-3">
        <li>
          <NavLink
            to="/USAccordion"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">Acoordion</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/USCarousel"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">Carousel</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/USDropdowns"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">Dropdowns</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/USModals"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">Modals</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/USNavbarOffcanvas"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">Navbar & Offcanvas</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/USNavTabs"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">Nav and Tabs</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/USOverlaysTooltips"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">Overlays & Tooltips</span>
          </NavLink>
        </li>

        {/* <li>
          <NavLink
            to="/USForms"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">Forms</span>
          </NavLink>
        </li> */}
      </ul>
    </>
  );
};

export default Acco3;
