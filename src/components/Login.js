import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { doLogin, isAuthenticated } from '../api';
import { useHistory } from 'react-router-dom';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  background-color: #039be5;
  width: 10rem;
  max-width: 50%;
  border-color: #039be5;
  &:hover {
    background-color: white;
    color: black;
  }

  margin-top: 18rem;
`;

const Login = () => {
  const history = useHistory();

  useEffect(() => {
    const checkAuth = async () => {
      const isUserAuthenticated = await isAuthenticated();
      console.log(isUserAuthenticated);
      if (isUserAuthenticated) history.push('/profile');
    };
    checkAuth();
  }, [history]);

  const handleLogin = async () => {
    await doLogin();
  };

  return (
    <StyledContainer>
      <StyledButton
        variant="primary"
        size="lg"
        className="rounded-pill"
        onClick={handleLogin}
      >
        Login 🌸
      </StyledButton>
    </StyledContainer>
  );
};

export default Login;
