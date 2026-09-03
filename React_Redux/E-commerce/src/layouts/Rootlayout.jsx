import { Container, Row, Col } from 'react-bootstrap';
import { Outlet} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
function RootLayout() {
  return (
    <div>
        
      <Header/>
      <Container fluid className="">
        <Row>
          <Col className='mt-3'>
            <Outlet />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default RootLayout;
