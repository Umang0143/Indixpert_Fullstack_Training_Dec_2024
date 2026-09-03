import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
function RootLayout() {
  return (
    <div>
      <Container fluid>
        <Outlet />
      </Container>
    </div>
  );
}

export default RootLayout;
