import { Bell, BoxArrowRight, Gear, Person, Speedometer2 } from "react-bootstrap-icons";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";

const USDropdowns = () => {

  const MenuItems = () => (
    <>
      <Dropdown.Item href="#/action-1"><Speedometer2/> Dashboard</Dropdown.Item>
      <Dropdown.Item href="#/action-2"><Bell/> Notification</Dropdown.Item>
      <Dropdown.Item href="#/action-3"><Gear/> Settings</Dropdown.Item>
      <Dropdown.Item href="#/action-3"><BoxArrowRight/> Logout</Dropdown.Item>
    </>
  );

  return (
    <div className="d-flex justify-content-around">
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          <Person className="me-1"/>
          Profile
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <MenuItems/>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
          <Person className="me-1"/>
          Profile
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <MenuItems/>
        </Dropdown.Menu>
      </Dropdown>
      
      <Dropdown>
        <Dropdown.Toggle as="div" id="dropdown-basic" bsPrefix=" ">
           <Image
            src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?"
            roundedCircle
            width={45}
            height={45}
          />
        </Dropdown.Toggle>

        <Dropdown.Menu align="end">
          <MenuItems/>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default USDropdowns;
