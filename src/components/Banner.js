import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3rem;
  z-index: 999;
  color: #44505f;
  text-align: center;
  justify-content: center;
  margin: 2rem auto;
  font-family: 'Work Sans', sans-serif;
  word-break: break-word;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.div`
  font-size: 1.5rem;
  text-align: center;
  justify-content: center;
  color: #4a4a4a;
  word-break: break-word;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledButton = styled(Button)`
  background-color: #039be5;
  border-color: #039be5;
  &:hover {
    background-color: white;
    color: black;
  }
  margin: 1rem auto;
`;

const Banner = () => {
  const history = useHistory();

  const handleOnClick = () => {
    history.push('/login');
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div>
              <Title className="font-weight-bold">
                Improve coding skills by developing projects 🚀
              </Title>
              <Description>
                Get ready for your first full-stack project with me
                <div>
                  <StyledButton
                    onClick={handleOnClick}
                    className="rounded-pill"
                    size="lg"
                  >
                    Get started now
                  </StyledButton>
                </div>
              </Description>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
