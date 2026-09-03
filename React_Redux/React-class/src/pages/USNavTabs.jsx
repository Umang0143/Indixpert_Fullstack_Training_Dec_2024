import { Calendar2, Clock, CurrencyRupee } from "react-bootstrap-icons";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

const USNavTabs = () => {
  return (
    <div className="bg-white p-3">
      <Tab.Container id="left-tabs-example" defaultActiveKey="overview">
        <Nav variant="underline" className="us-tabs">
          <Nav.Item>
            <Nav.Link eventKey="overview">Overview</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="scope">Project Scope</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="team">Team Members</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="tasks">Tasks</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="chat">Chat</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content className="mt-3">
          <Tab.Pane eventKey="overview">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem optio nihil voluptates eius voluptatum dignissimos
              rem odio culpa similique, temporibus consequatur error, aut
              aspernatur a deserunt? Aperiam reprehenderit repellendus nam.
            </p>
            <div className="us-tabs d-flex justify-content-between">
              <p className="d-flex align-items-center">
                <Calendar2 className="text-primary me-1" />
                Start Date
              </p>
              <p>01 Jul,2025</p>
            </div>
            <div className="us-tabs d-flex justify-content-between">
              <p className="d-flex align-items-center">
                <Calendar2 className="text-primary me-1" />
                End Date
              </p>
              <p>31 Dec,2025</p>
            </div>
            <div className="us-tabs d-flex justify-content-between align-items-center">
              <p className="d-flex align-items-center">
                <Clock className="text-primary me-1" />
                Estimate Time
              </p>
              <p>5 Months</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="d-flex align-items-center">
                <CurrencyRupee className="text-primary me-1" />
                Estimate Cost
              </p>
              <p>₹ 5,80,000</p>
            </div>
          </Tab.Pane>

          <Tab.Pane eventKey="scope">
            <p>Project Scope content...</p>
          </Tab.Pane>

          <Tab.Pane eventKey="team">
            <p>Team Members content...</p>
          </Tab.Pane>

          <Tab.Pane eventKey="tasks">
            <p>Tasks content...</p>
          </Tab.Pane>

          <Tab.Pane eventKey="chat">
            <p>Chat content...</p>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default USNavTabs;
