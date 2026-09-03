import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const USImages = () => {
   const img ="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?";
   const img1 ="https://t4.ftcdn.net/jpg/06/43/68/65/240_F_643686558_Efl6HB1ITw98bx1PdAd1wy56QpUTMh47.jpg";

  return (
    <Container>
      <Row>
        <h1>Avatar With Name</h1>
        <Col xs={6} md={4}>
          <Image src={img} roundedCircle fluid width={50} height={25}/> Umang Rajput
        </Col>
        <Col xs={6} md={4}>
          <Image src={img1} roundedCircle fluid width={50} height={25}/> Sumang Rajput
        </Col>
      </Row>
  
      <Row className="mt-4">
        <h1>Avatar Sizes</h1>
        <Col xs={6} md={8} className="mt-1">
          <Image className="me-2" src={img} roundedCircle fluid width={20} height={10}/>
          <Image className="me-2" src={img} roundedCircle fluid width={30} height={15}/>
          <Image className="me-2" src={img} roundedCircle fluid width={40} height={20}/>
          <Image className="me-2" src={img} roundedCircle fluid width={50} height={25}/>
          <Image className="me-2" src={img} roundedCircle fluid width={60} height={30}/>
          <Image className="me-2" src={img} roundedCircle fluid width={70} height={35}/>
        </Col>
      </Row>

      <Row className="mt-4">
        <h1>Avatar Group</h1>
        <Col xs={6} md={8} className="mt-1">
          <Image className="avatar" src={img} roundedCircle fluid width={50} height={25}/>
          <Image className="avatar" src={img} roundedCircle fluid width={50} height={25}/>
          <Image className="avatar" src={img} roundedCircle fluid width={50} height={25}/>
          <Image className="avatar" src={img} roundedCircle fluid width={50} height={25}/>
          <Image className="avatar" src={img} roundedCircle fluid width={50} height={25}/>
        </Col>
      </Row>
      
    </Container>
  );
};

export const Avatar = ({ img }) => {
  return <img src={img} alt="userimage" />;
};

export default USImages;
