import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Login from '../components/Login';
import Signup from '../components/Signup';
import CustomButton from '../components/CustomButton';
import backgroundImage from '../../assets/background.jpg';
import Auth from '../utils/auth';

const Home = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  };

  const logout = () => {
    // Implement your logout logic here
    Auth.logout();
  };

  return (
    <Container fluid style={containerStyle}>
      <Row className="h-100 align-items-center justify-content-center">
        <Col md={12} className="text-center">
          {Auth.loggedIn() ? ( // If user is logged in, show welcome message
            <>
              <button className="btn btn-lg btn-light m-2 fixed-bottom" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            // If user is not logged in, show login or signup form
            <>
              {activeTab === 'login' ? <Signup /> : <Login />}
              <CustomButton activeTab={activeTab} handleTabChange={handleTabChange} />
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
