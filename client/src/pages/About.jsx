import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import displayImage from '../../assets/aboutpage.png';

//Style Attributes
const aboutContainerStyle = {
    height: 'auto',
    marginTop: '105px',
    marginBottom: '5px',
    marginLeft: '50px',
    backgroundColor: '#F2F2F2',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
    width: '40%',
    minHeight: '600px',
    borderRadius: '30px 30px 30px 30px',
    textColor: '#333333',
  };

const imageStyle = {
    maxWidth: '100%', 
    height: '75%', 
    border: '5px solid', 
    marginTop: '120px', 
}

const headingStyle = {
    marginTop: '10%', 
    marginBottom: '5%',
}

const bodyStyle = {
    margin: '6%',
};

//Page Rendering
const About = () => {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <img src={displayImage} alt="Your Image" className="mr-3" style={imageStyle} />
                </Col>
                <Col md={4} className='text' style={aboutContainerStyle}>
                    <div>
                        <h1 className='headingText' style={headingStyle}>Our Story</h1>
                        <p className='text-start' style={bodyStyle}>As a small collective of visual artists came to the conclusion that the many virtual portfolio websites have been oversaturated with 
                                                             a vast array of artistic discipline, Flourish was born.<br/><br/>
                                                             We view Flourish as a refuge for visual artists to share their talent and abilities within a more abstracted niche community devoid of
                                                             influencer culture. We strive to attract visual creatives consumed with conceptual originality to share their works with the virtual world
                                                             not only to build an organic non-algorithmic following, by additionally to be discovered by their discipline and the thematics of their work. <br/><br/>
                                                             We hope that as a user or a creator that you find the value of art enjoyment and the excitement of discovering new visual artists! </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default About;