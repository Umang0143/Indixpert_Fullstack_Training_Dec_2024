import { NavLink } from "react-router-dom";

const Acco2 = () => {
  return (
    <>
      <ul className="list-unstyled p-3">
        <li>
          <NavLink
            to="/USBadges"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">Badges</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/USBreadcrumbs"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">Breadcrumbs</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/USButtonGroup"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">ButtonGroup</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/USButtons"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">Buttons</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/USCards"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">Cards</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/USCloseButton"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">CloseButton</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/USFigures"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">Figure</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/USImages"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">Images</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/USListGroup"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">ListGroup</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/USPagination"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">Pagination</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/USProgressBars"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">ProgressBars</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/USSpinners"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">Spinners</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/USTables"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">Tables</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Acco2;
