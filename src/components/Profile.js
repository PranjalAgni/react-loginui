import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { getUserProfile } from '../api';
import Logout from './Logout';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);
        const response = await getUserProfile();
        setUser(response);
      } catch (ex) {
        setUser(null);
      }

      setLoading(false);
    };

    loadProfile();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <Container fluid>
      <Row>
        <Col xs={10}>
          <h1 className="text-center">
            {user === null ? <span>🔐</span> : <span>Welcome 👋</span>}
          </h1>
        </Col>
        <Col>
          <Logout />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
