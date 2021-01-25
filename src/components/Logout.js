import React from 'react';
import { Button } from 'react-bootstrap';
import { doLogout } from '../api/index';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const history = useHistory();
  const handleLogout = async () => {
    await doLogout();
    history.push('/login');
  };

  return (
    <div>
      <Button variant="primary" size="lg" onClick={handleLogout}>
        Logout 🤙
      </Button>
    </div>
  );
};

export default Logout;
