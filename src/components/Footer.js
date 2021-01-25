import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import styled from 'styled-components';
import city from '../img/city.svg';

const StyledImageContainer = styled.div`
  width: 25rem;
  height: auto;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-left: auto;
  @media (max-width: 768px) {
    width: 18rem;
  }
`;

const StyledImage = styled(Image)`
  height: auto;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledDiv = styled.div`
  padding: 3rem;
  background: #029be5;
  color: white;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledDescription = styled.div`
  font-size: 2rem;
  color: white;
  padding: 4rem;
  text-align: center;
  justify-content: center;
  font-family: 'Work Sans', sans-serif;
  margin-top: 3em;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 0.5em;
  }
`;

const Footer = () => {
  return (
    <StyledDiv>
      <Row>
        <Col>
          <StyledDescription>Start Building Now</StyledDescription>
        </Col>
        <Col>
          <StyledImageContainer>
            <StyledImage alt="footer-logo" src={city} />
          </StyledImageContainer>
        </Col>
      </Row>
    </StyledDiv>
  );
};

export default Footer;
