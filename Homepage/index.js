import React from 'react';
import { userData } from '../../help';
import { Row, Col, NavLink, Button } from 'reactstrap';

//retrieve user data and display
const Home = () => {
  const { username } = userData();

  return (
    <Row className="home">
      <Col sm="12" md={{ size: 4, offset: 4 }}>
        <h2 style={{ color: "#fff" }}>
          Welcome to Strapi <span style={{ color: "#007bff" }}>{username}</span>
        </h2>
        <p style={{ color: "#fff" }}>
          We hope you are making progress on your project!
        </p>
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <Button color="primary">
            <NavLink href="/logout">
              <h3 style={{ color: "#000" }}>Logout</h3>
            </NavLink>
          </Button>
        </Col>
      </Col>
    </Row>
  );
};

export default Home;
