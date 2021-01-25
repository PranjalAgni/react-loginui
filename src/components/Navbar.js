import React from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const CustomNavbar = styled(Navbar)`
  height: 5rem;
  background-color: #f3f6fa;
`;

const StyledForm = styled(Form)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledBurger = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 2rem;
  }
`;

const NavbarComponent = () => {
  const history = useHistory();

  const handleOnClick = () => {
    history.push('/login');
  };

  return (
    <CustomNavbar variant="light">
      <Navbar.Brand href="#home">LoginRadius</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="https://github.com/PranjalAgni">
          See my work 👋
        </Nav.Link>
      </Nav>
      <StyledForm inline>
        <Button onClick={handleOnClick} variant="outline-primary">
          Sign In
        </Button>
      </StyledForm>
      <StyledBurger>🍔</StyledBurger>
    </CustomNavbar>
  );
};

export default NavbarComponent;
