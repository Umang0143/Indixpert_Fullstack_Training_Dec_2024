import { NavLink } from "react-router-dom";

const Acco1 = () => {
  return (
    <>
      <ul className="list-unstyled p-3">
        <li>
          <NavLink
            to="/StaticProfile"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">StaticProfile</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/DynamicProfile"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">DynamicProfile</span>
          </NavLink>

          <ul>
            <li className="list-unstyled">
              <NavLink
                to="/DynamicProfile/profile"
                className={({ isActive }) =>
                  isActive
                    ? "active-link text-black text-decoration-none"
                    : "text-white text-decoration-none"
                }
              >
                <i className="bi bi-arrow-right text-black"></i>
                <span className="ms-3 fs-5">Profile</span>
              </NavLink>
            </li>

            <li className="list-unstyled">
              <NavLink
                to="/DynamicProfile/avatar"
                className={({ isActive }) =>
                  isActive
                    ? "active-link text-black text-decoration-none"
                    : "text-white text-decoration-none"
                }
              >
                <i className="bi bi-arrow-right text-black"></i>
                <span className="ms-3 fs-5">Avatar</span>
              </NavLink>
            </li>
          </ul>
        </li>

        <li>
          <NavLink
            to="/ToDoList"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">TodoList</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/Counter"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">Counter</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/CounterReduse"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">CounterReduse</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/ToDoDynemic"
            className={({ isActive }) =>
              isActive
                ? "active-link text-black text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <i className="bi bi-arrow-right text-black"></i>
            <span className="ms-3 fs-5">ToDoDynemic</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Acco1;
