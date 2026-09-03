import { useContext } from "react";
import { useAccordionButton } from "react-bootstrap";
import { DashCircle, PlusCircle } from "react-bootstrap-icons";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import Card from "react-bootstrap/Card";

const USAccordion = () => {
  function ContextAwareToggle({ eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
      <button
        type="button"
        style={{
          border: "none",
          background: "none",
          color: isCurrentEventKey ? "#1877F2" : "black",
        }}
        onClick={decoratedOnClick}
      >
        {isCurrentEventKey ? (
          <DashCircle color="#1877F2" />
        ) : (
          <PlusCircle color="black" />
        )}
      </button>
    );
  }

  function CustomHeader({ children, eventKey }) {
    const { activeEventKey } = useContext(AccordionContext);
    const isActive = activeEventKey === eventKey;

    return (
      <Card.Header
        className="d-flex justify-content-between align-items-center"
        style={{ color: isActive ? "#1877F2" : "black" }}
      >
        <h5 className="m-0">{children}</h5>
        <ContextAwareToggle eventKey={eventKey} />
      </Card.Header>
    );
  }

  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Card>
          <CustomHeader eventKey="0">
            What is the cost of an online course?
          </CustomHeader>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate porro laboriosam dolor delectus repellendus veniam
              reiciendis, aperiam architecto dolorem natus distinctio esse minus
              optio eius maxime ratione aliquam nihil repellat praesentium iste
              voluptatum non accusantium labore? Molestiae voluptates rerum
              adipisci saepe accusantium quos, eius, ex minima voluptatem
              accusamus repudiandae vel?
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <CustomHeader eventKey="1">
            Do I need to visit any physical location?
          </CustomHeader>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate porro laboriosam dolor delectus repellendus veniam
              reiciendis, aperiam architecto dolorem natus distinctio esse minus
              optio eius maxime ratione aliquam nihil repellat praesentium iste
              voluptatum non accusantium labore? Molestiae voluptates rerum
              adipisci saepe accusantium quos, eius, ex minima voluptatem
              accusamus repudiandae vel?
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <CustomHeader eventKey="2">
            What are the technology requirements?
          </CustomHeader>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate porro laboriosam dolor delectus repellendus veniam
              reiciendis, aperiam architecto dolorem natus distinctio esse minus
              optio eius maxime ratione aliquam nihil repellat praesentium iste
              voluptatum non accusantium labore? Molestiae voluptates rerum
              adipisci saepe accusantium quos, eius, ex minima voluptatem
              accusamus repudiandae vel?
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <CustomHeader eventKey="3">
            How can I ask questions or clear doubts?
          </CustomHeader>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate porro laboriosam dolor delectus repellendus veniam
              reiciendis, aperiam architecto dolorem natus distinctio esse minus
              optio eius maxime ratione aliquam nihil repellat praesentium iste
              voluptatum non accusantium labore? Molestiae voluptates rerum
              adipisci saepe accusantium quos, eius, ex minima voluptatem
              accusamus repudiandae vel?
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default USAccordion;
