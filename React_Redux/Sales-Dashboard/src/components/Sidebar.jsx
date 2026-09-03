import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Badge, Col, Image, Row } from "react-bootstrap";
import { ArrowRight, ChevronDown, List } from "react-bootstrap-icons";
import logo from "../assets/logo/logo.svg";
import overviewIcon from "../assets/icons/overview.svg";
import analyticsIcon from "../assets/icons/analytics.svg";
import statusUpIcon from "../assets/icons/status-up.svg";
import shopIcon from "../assets/icons/shop.svg";
import yellowIcon from "../assets/icons/yellow.svg";
import greenIcon from "../assets/icons/green.svg";
import redIcon from "../assets/icons/red.svg";
import figmaIcon from "../assets/icons/figma.svg";
import settingIcon from "../assets/icons/setting.svg";
import helpIcon from "../assets/icons/help.svg";
import profileIcon from "../assets/icons/profile.svg";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState("0");
  const [openSubMenu, setOpenSubMenu] = useState(false); //  inner dropdown
  const [openLogout, setOpenLogout] = useState(false); //  LogOut dropdown
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUserName(parsedUser.fullName);
    }
  }, []);
  const toggleMenu = (key) => {
    setOpenMenu(openMenu === key ? null : key);
  };

  const MenuHeader = ({ id, title }) => {
    const isActive = openMenu === id;

    return (
      <button
        onClick={() => toggleMenu(id)}
        className={`w-100 d-flex align-items-center btn text-start px-3 py-2
          ${isActive ? "btn-dark text-white" : "btn-transparent text-info"}`}
      >
        <ChevronDown
          className={`me-3 transition ${isActive ? "rotate" : ""}`}
        />
        {title}
      </button>
    );
  };

  return (
    <>
      <Row className="vh-100">
        <Col className="bg-dark d-flex flex-column justify-content-between">
          {/* ================= MAIN MENU ================= */}
          <div>
            <header className="d-flex justify-content-between align-items-center p-3 mb-3">
              <div>
                <img
                  src={logo}
                  width="67"
                  height="70"
                  className="me-2 img-fluid"
                  alt="logo"
                />
              </div>
              <div>
                <List className="fs-1 text-info" />
              </div>
            </header>
            <MenuHeader id="0" title="MAIN MENU" />
            {openMenu === "0" && (
              <div className="px-3 py-2">
                <Link
                  to="overview"
                  className="d-block mb-2 text-info text-decoration-none"
                >
                  <img src={overviewIcon} className="me-3" />
                  Dashboard Overview
                </Link>

                <Link
                  to="comingsoon"
                  className="d-block mb-2 text-info text-decoration-none"
                >
                  <img src={analyticsIcon} className="me-3" />
                  Advanced Analytics
                </Link>

                {/* INNER DROPDOWN */}
                <button
                  onClick={() => setOpenSubMenu(!openSubMenu)}
                  className="w-100 d-flex justify-content-between align-items-center
                         btn btn-transparent text-info px-0 mb-2"
                >
                  <span>
                    <img src={statusUpIcon} className="me-3" />
                    Statistics
                  </span>

                  <ChevronDown
                    className={`transition ${openSubMenu ? "rotate" : ""}`}
                  />
                </button>

                {openSubMenu && (
                  <div className="border-start border-2 border-secondary ps-3">
                    <Link
                      to="comingsoon"
                      className="text-secondary text-info text-decoration-none ps-4"
                    >
                      Sales
                    </Link>

                    <Link
                      to="comingSoon"
                      className=" d-flex justify-content-between
                            align-items-center rounded bg-dark text-info text-decoration-none ps-2 m-3"
                    >
                      <span>Performance</span>
                      <Badge bg="primary" pill>
                        3
                      </Badge>
                    </Link>

                    <div className="ps-2 m-3 text-secondary text-info">
                      Audience
                    </div>
                    <div className="ps-2 m-3 text-secondary text-info">
                      Marketplace
                    </div>
                  </div>
                )}

                <Link
                  to="comingSoon"
                  className="d-flex justify-content-between align-items-center text-info text-decoration-none pe-3"
                >
                  <span>
                    <img src={shopIcon} className="me-3" />
                    Storefront
                  </span>
                  <Badge bg="success">New</Badge>
                </Link>
              </div>
            )}

            {/* ================= APPLICATIONS ================= */}
            <MenuHeader id="1" title="APPLICATIONS" />
            {openMenu === "1" && (
              <div className="ps-3 pe-3">
                <Link
                  to="#"
                  className="d-block mb-2 text-info text-decoration-none p-3 d-flex justify-content-between align-items-center"
                >
                  <span>
                    <img src={yellowIcon} className="me-3" />
                    Mailchimp
                  </span>
                  <ArrowRight />
                </Link>

                <Link
                  to="#"
                  className="d-block mb-2 text-info text-decoration-none p-3 d-flex justify-content-between align-items-center"
                >
                  <span>
                    <img src={greenIcon} className="me-3" />
                    Evernote
                  </span>
                  <ArrowRight />
                </Link>

                <Link
                  to="#"
                  className="d-block text-info text-decoration-none p-3 d-flex justify-content-between align-items-center"
                >
                  <span>
                    <img src={redIcon} className="me-3" />
                    Slack
                  </span>
                  <ArrowRight />
                </Link>

                <Link
                  to="#"
                  className="d-block text-info text-decoration-none p-3 d-flex justify-content-between align-items-center"
                >
                  <span>
                    <img src={figmaIcon} className="me-3" />
                    Figma
                  </span>
                  <ArrowRight />
                </Link>
              </div>
            )}

            {/* ================= ACCOUNT OPTIONS ================= */}
            <MenuHeader id="2" title="ACCOUNT OPTIONS" />
            {openMenu === "2" && (
              <div className="px-3 py-2">
                <Link
                  to="#"
                  className="d-block mb-2 text-info text-decoration-none"
                >
                  <img src={settingIcon} className="me-3" />
                  Settings
                </Link>

                <Link
                  to="#"
                  className="d-block mb-2 text-info text-decoration-none"
                >
                  <img src={helpIcon} className="me-3" />
                  Help Center
                </Link>

                <Link
                  to="comingSoon"
                  className="d-block text-info text-decoration-none"
                >
                  <img src={profileIcon} className="me-3" />
                  Profile
                </Link>
              </div>
            )}
          </div>

          {/* ================= Logout ================= */}

          <footer className="p-3">
            <button
              onClick={() => setOpenLogout(!openLogout)}
              className="w-100 d-flex justify-content-between align-items-center
                         btn btn-transparent text-info px-0 mb-2"
            >
              <span className="d-flex align-items-center gap-2">
                <Image
                  src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
                  roundedCircle
                  width={45}
                  height={45}
                />
                <span>{userName || "User"}</span>
              </span>

              <ChevronDown
                className={`transition ${openLogout ? "rotate" : ""}`}
              />
            </button>
            {openLogout && (
              <div className="ps-4">
                <Link
                  to="/"
                  className="text-secondary text-info text-decoration-none ps-4"
                >
                  LogOut
                </Link>
              </div>
            )}
          </footer>
        </Col>
      </Row>
    </>
  );
};

export default Sidebar;
