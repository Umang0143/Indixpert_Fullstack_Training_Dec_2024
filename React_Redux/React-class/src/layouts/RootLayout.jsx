import { Outlet } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

import Acco1 from "./Acco1";
import Acco2 from "./Acco2";
import Acco3 from "./Acco3";
import Forms from "./Forms";
import Products from "./Products";

const RootLayout = () => {
  return (
    <div>
      <header className="container">
        <h1 className="bg-dark text-center mb-4 ">React Exercise</h1>
      </header>
      <main className="container ">
        <div className="row justify-content-around contant">
          <div className="col-md-3 bg-dark text-start pt-3">
            <Button variant="primary col-12 mb-3">Bootstrap Components</Button>

            {/* ================= Bootstrap Section ================= */}
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Componenents</Accordion.Header>
                <Accordion.Body bsPrefix="bg-primary">
                  <Acco1 />
                </Accordion.Body>
              </Accordion.Item>

              {/* -------- Non-Interactive Section -------- */}
              <Accordion.Item eventKey="1">
                <Accordion.Header>Non Intractive Componenents</Accordion.Header>
                <Accordion.Body bsPrefix="bg-primary">
                  <Acco2 />
                </Accordion.Body>
              </Accordion.Item>

              {/* -------- Interactive Section -------- */}
              <Accordion.Item eventKey="2">
                <Accordion.Header>Intractive Componenents</Accordion.Header>
                <Accordion.Body bsPrefix="bg-primary">
                  <Acco3 />
                </Accordion.Body>
              </Accordion.Item>

              {/* ================= Forms Section ================= */}
              <Accordion.Item eventKey="3">
                <Accordion.Header>Forms</Accordion.Header>
                <Accordion.Body bsPrefix="bg-primary">
                  <Forms />
                </Accordion.Body>
              </Accordion.Item>

              {/* ================= Products Section ================= */}
              <Accordion.Item eventKey="4">
                <Accordion.Header>Products</Accordion.Header>
                <Accordion.Body bsPrefix="bg-primary">
                  <Products />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <div className="col-md-8 bg-dark p-3">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default RootLayout;
