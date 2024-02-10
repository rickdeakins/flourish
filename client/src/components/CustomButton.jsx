import React from 'react';
import { Button } from 'react-bootstrap';

const CustomButton = ({ activeTab, handleTabChange }) => {
 

  return (
    <Button
            variant={activeTab === 'login' ? 'primary' : 'success'}
            onClick={() => handleTabChange(activeTab === 'login' ? 'signup' : 'login')}
            className="mb-5 ml-30 btn-md" // Add margin to the button
            style={{ width: '80px', marginTop: '5px', cursor: 'pointer', whiteSpace: 'nowrap'}}
          >
            {activeTab === 'login' ? 'Login' : 'Sign Up'}
             
          </Button>
  );
};

export default CustomButton;