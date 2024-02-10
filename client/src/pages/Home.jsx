import React, { useState } from 'react';
import {  Row, Col, Container } from 'react-bootstrap';
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
    minHeight: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '120px',
    width: '70%',
    position: 'relative',
    border: '4px solid'
  };

  const logout = () => {
    // Implement your logout logic here
    Auth.logout();
  };

  return (
    <>
      <Row>
        <Col md={2} className="opacity-50" 
          style={{ height: "auto", marginTop:'105px', marginBottom:'5px', border: '0.5px solid gray', backgroundColor: '#F2F2F2'}}>
          <strong>Welcome to Flourish! </strong>
          <p style={{ margin: "10px", textAlign: 'left-justify' }}><br/>
            Flourish is a visual artist showcase where you can find a visual artist based on their genre of art.
          </p>
        </Col>
        <Col md={9}>
          <Container fluid style={containerStyle}>
            <Row className="justify-content-center opacity-75" style={{ marginTop: "20%" }}>
              <Col md={12} className="text-center">
                {Auth.loggedIn() ? (
                  <>
                    <button className="btn btn-lg btn-light m-2 fixed-bottom" onClick={logout}>
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    {activeTab === 'login' ? <Signup /> : <Login />}
                    <CustomButton activeTab={activeTab} handleTabChange={handleTabChange} />
                  </>
                )}
              </Col>
            </Row>
          </Container>
        </Col>
        {/* <Col md={1} className="h-100 align-items-left justify-content-center opacity-75" style={{ marginTop: "22%",border: '2px solid gray' }}>
          <strong class="bg-color-dark">BE DISCOVERED! </strong>
          <p>We welcome all visual artists to our platform.</p>
        </Col> */}
      </Row>
    </>
  );
};

export default Home;
